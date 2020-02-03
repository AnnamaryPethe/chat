import { Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import { RegisterService} from './register.service'
import {UserController} from "./user.controller";
import {UserSchema} from "./user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
    ],
    controllers: [UserController],
    providers: [RegisterService]
})
export class RegisterModule{}
