import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {UserGraphService} from "./user.graph.service";
import {UserGraphResolver} from "./user.graph.resolver";
import {UserGraphSchema} from "./user-graph-schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'User', schema: UserGraphSchema}])
    ],
    providers: [UserGraphResolver, UserGraphService]
})
export class UserGraphModule{}