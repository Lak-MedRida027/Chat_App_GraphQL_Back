import {
  ApolloError,
  UserInputError,
  AuthenticationError,
  ForbiddenError,
} from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();
const prisma = new PrismaClient();

const MESSAGE_ADDED = "MESSAGE_ADDED";

const resolvers = {
  Query: {
    users: async (_, args, { userId }) => {
      if (!userId) throw new ForbiddenError("You must be logged in");
      const users = await prisma.user.findMany({
        orderBy: {
          createAt: "desc",
        },
        where: {
          id: {
            not: userId,
          },
        },
      });
      return users;
    },
    messagesOfUser: async (_, { receiverId }, { userId }) => {
      if (!userId) throw new ForbiddenError("You must be logged in");
      const messages = await prisma.message.findMany({
        orderBy: {
          createdAt: "asc",
        },
        where: {
          OR: [
            {
              senderId: userId,
              receiverId: receiverId,
            },
            {
              senderId: receiverId,
              receiverId: userId,
            },
          ],
        },
      });

      return messages;
    },
  },
  Mutation: {
    signUpUser: async (_, { userNew }) => {
      try {
        if (!userNew.name || !userNew.email || !userNew.password) {
          throw new AuthenticationError(
            "Missing required fields (name, email, password)"
          );
        }

        const existUser = await prisma.user.findUnique({
          where: { email: userNew.email },
        });

        if (existUser) {
          throw new UserInputError("A user with this email already exists");
        }

        const hashedPassword = await bcrypt.hash(userNew.password, 10);

        const newUser = await prisma.user.create({
          data: {
            ...userNew,
            password: hashedPassword,
          },
        });

        delete newUser.password;

        return newUser;
      } catch (error) {
        console.error("Error in signUpUser mutation:", error);
        throw new ApolloError(
          `Something went wrong while signing up: ${error.message}`
        );
      }
    },
    logInUser: async (_, { userData }) => {
      try {
        if (!userData.email || !userData.password) {
          throw new AuthenticationError(
            "Missing required fields (email, password)"
          );
        }

        const user = await prisma.user.findUnique({
          where: { email: userData.email },
        });

        if (!user) {
          throw new UserInputError(
            "Combination Email and password does not exist!"
          );
        }

        if (!(await bcrypt.compare(userData.password, user.password))) {
          throw new UserInputError("Email or Password is incorrect!");
        }

        const token = jwt.sign(
          {
            userId: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET_KEY
        );

        return { token };
      } catch (error) {
        console.error("Error in logInUser mutation:", error);
        throw new ApolloError(error.message);
      }
    },
    createMessage: async (_, { receiverId, text }, { userId }) => {
      if (!userId) throw new ForbiddenError("You must be logged in");
      const message = await prisma.message.create({
        data: {
          text,
          receiverId,
          senderId: userId,
        },
      });

      pubsub.publish(MESSAGE_ADDED, { messageAdded: message });

      return message;
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterableIterator(MESSAGE_ADDED),
    },
  },
};

export default resolvers;
