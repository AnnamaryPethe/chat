import { ObjectType, Field, ID } from "type-graphql";
import {UserType} from "./user.dto";

@ObjectType()
export class UserTypeDto {
    @Field({ nullable: true })
    data: UserType;
}