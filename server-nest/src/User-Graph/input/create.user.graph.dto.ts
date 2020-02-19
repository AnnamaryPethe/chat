import { Field, InputType} from 'type-graphql';


@InputType()
export class CreateUserTypeDto {
        @Field()
        readonly firstName: string;
        @Field()
        readonly lastName: string;
        @Field()
        readonly nickname: string;
        @Field()
        readonly email: string;
        @Field()
        readonly password: string;
}

@InputType()
export class UserInputGraphDto {
    @Field(type => CreateUserTypeDto, {nullable: true})
    data: CreateUserTypeDto
}


