import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {UserGraphService} from "./user.graph.service";
import { Query} from "@nestjs/graphql";
import {UserGraph} from "./interfaces/user.graph.interface";
import {UserInputGraphDto} from "./input/create.user.graph.dto";
import {UserTypeDto} from "./dto/user.type.dto";

@Resolver()
export class UserGraphResolver {
    constructor(private readonly userGraphService: UserGraphService) {}

    @Mutation(type => UserTypeDto)
    async addUser(@Args('userInput') userInput: UserInputGraphDto): Promise<UserGraph> {
        return await this.userGraphService.createUser(userInput);
    }

    @Query(returns => UserTypeDto)
    async getUser(@Args('id') id: string): Promise<UserGraph> {
        return await this.userGraphService.findUser(id);
    }

    @Query(returns => String)
    getHello(): string {
        return "string"
    }

    @Query(returns => UserTypeDto)
    getAllUsers(): Promise<UserGraph[]> {
        return this.userGraphService.findAll()
    }

    @Mutation(type => UserTypeDto)
    async updateItem(
        @Args('id') id: string,
        @Args('input') input: UserInputGraphDto): Promise<UserGraph> {
        return this.userGraphService.update(id, input);
    }

    @Mutation(type => UserTypeDto)
    async deleteUser(@Args('id') id: string): Promise<UserGraph> {
        return this.userGraphService.delete(id);
    }
}