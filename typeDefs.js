const typeDefs = `
    type Query {
        users: [User]
        messagesOfUser(receiverId: Int!): [Message]
    }

    input UserInput {
        name: String!
        email: String!
        age: Int!
        password: String!
    }

    input UserLogInInput {
        email: String!
        password: String!
    }

    type Token {
        token: String!
    }

    type Mutation {
        signUpUser(userNew: UserInput!): User
        logInUser(userData: UserLogInInput!): Token
        createMessage(receiverId: Int!, text: String!): Message
    }

    type Subscription{
        messageAdded: Message
    }

    scalar Date

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
    }

    type Message {
        id: ID!
        text: String!
        senderId: Int!
        receiverId: Int!
        createdAt: Date!
    }
`;

export default typeDefs;