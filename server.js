import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { useServer } from 'graphql-ws/use/ws';
import { WebSocketServer } from 'ws';
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './typeDefs.js'; 
import resolvers from './resolvers.js';
import jwt from 'jsonwebtoken';

const port = process.env.PORT || 4000

// create express and HTTP server
const app = express();
const httpServer = createServer(app);

const context = ({ req, connection }) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jwt.verify(authorization, process.env.JWT_SECRET_KEY);
        return { userId };
    }

    if (connection) {
      return connection.context;
    }
}
const schema = makeExecutableSchema({typeDefs, resolvers})

// create websocket server
const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
});

// Save the returned server's info so we can shut down this server later
const serverCleanup = useServer({ schema }, wsServer);

// create apollo server
const apolloServer = new ApolloServer({
    schema,
    plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),

        // Proper shutdown for the WebSocket server.
        {
        async serverWillStart() {
            return {
            async drainServer() {
                await serverCleanup.dispose();
            },
            };
        },
        },
    ],
    context
});

await apolloServer.start();
apolloServer.applyMiddleware({ app });
httpServer.listen(port, () =>{
    console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
    console.log(`Subscription ready at ws://localhost:4000${apolloServer.graphqlPath}`);
});

