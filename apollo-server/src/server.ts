import {typeDefs} from "./schema";
import {resolvers} from "./resolver";
import {ApolloServer} from "apollo-server";
import connect from './connectdb';


const dbUrl = 'mongodb+srv://test:pIw3MXPMqJ2gblyq@chat-qnd1q.gcp.mongodb.net/test?retryWrites=true&w=majority';

const server = new ApolloServer({ typeDefs, resolvers, introspection: true });

server.listen().then(async ({url }: {url: string}) => {
    await connect({db: dbUrl});
    console.log(`🚀  Server ready at ${url}`);
});
