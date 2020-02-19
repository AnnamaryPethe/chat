import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {GraphQLModule} from "@nestjs/graphql";
import {UserGraphModule} from "./User-Graph/user.graph.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      ('mongodb+srv://test:pIw3MXPMqJ2gblyq@chat-qnd1q.gcp.mongodb.net/test?retryWrites=true&w=majority')
  ),
    GraphQLModule.forRoot({playground: true, installSubscriptionHandlers: true,autoSchemaFile: 'schema.gql'}),
    UserGraphModule,
   ],
})
export class AppModule {}
