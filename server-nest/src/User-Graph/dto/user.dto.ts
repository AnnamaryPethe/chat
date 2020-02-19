import { ObjectType, Field, ID } from "type-graphql";


@ObjectType()
export class UserType {
    @Field(() => ID)
    readonly id?: string;
    @Field({ nullable: true })
    firstName: string;
    @Field({ nullable: true })
    lastName: string;
    @Field({ nullable: true })
    nickName: string;
    @Field({ nullable: true })
    email: string;
    @Field({ nullable: true })
    password?: string;
}