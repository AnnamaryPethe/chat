import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {UserGraph} from "./interfaces/user.graph.interface";
import {Model} from "mongoose";
import {UserInputGraphDto} from "./input/create.user.graph.dto";

@Injectable()
export class UserGraphService {
    constructor(@InjectModel('User') private userModel: Model<UserGraph>) {
    }

    async createUser(createUserGraphDto: UserInputGraphDto): Promise<UserGraph> {
        const createUser = new this.userModel(createUserGraphDto);
        return await createUser.save();
    }

    async findUser(id: string): Promise<UserGraph> {
        return this.userModel.findOne(id);
    }

    async findAll(): Promise<UserGraph[]> {
        console.log(await this.userModel.find().exec());
        return await this.userModel.find().exec();
    }

    async delete(id: string): Promise<UserGraph> {
        return  this.userModel.findByIdAndRemove(id);
    }

    async update(id: string, user: UserInputGraphDto): Promise<UserGraph> {
        return  this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

}
