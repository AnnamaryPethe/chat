import {Injectable} from "@nestjs/common";
import {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./interfaces/users.interface";
import {UserRegisterDTO} from "./dto/user-register.dto";
import {Login} from "./interfaces/login.interface";
import {UserLoginDto} from "./dto/user-login.dto";
import * as bcrypt from 'bcrypt';
import {Login_user} from "./interfaces/login_user.interface";

@Injectable()
export class RegisterService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

   async getAllUser(): Promise<User[]> {
       return await this.userModel.find().exec();
   }

   async getUser(id): Promise<User> {
        return await this.userModel.findById(id).exec();
   }

   async checkUser(userLoginDto: UserLoginDto): Promise<Login_user> {
       return new Promise<Login_user>((resolve, reject) => {
           this.userModel.findOne({email: userLoginDto.data.email}, function (err, user: Login | null) {
                if (err) {
                    console.log(err);
                   return reject(err);
                }
               console.log(user);
               bcrypt.compare(userLoginDto.data.password, user.password, ((err1, same) => {
                    if (err1) {
                        return reject(err1);
                    }
                    return resolve({success: same, id: user.id});
                }));
           });
       })

   }

   async addUser(userRegisterDTO: UserRegisterDTO): Promise<User | Error> {
       const isExist = await this.checkIfUserExist(userRegisterDTO);
       if (!isExist) {
           await bcrypt.hash(userRegisterDTO.data.password, 10, ((err, encrypted) => {
               if (err) {
                   return Promise.reject(err);
               }
               userRegisterDTO.data.password = encrypted;
               const newUser = new this.userModel(userRegisterDTO.data);
               newUser.save();
           }))
        }
       else {
           return Promise.reject("This email address is already exist. Please try it again.")
       }

   }

   async updateUser(userId, userRegisterDTO: UserRegisterDTO): Promise<User> {
       return this.userModel.findByIdAndUpdate(userId, userRegisterDTO, {new: true});
   }

   async deleteUser(userId): Promise<User> {
        return this.userModel.findByIdAndDelete(userId);
   }

   checkIfUserExist(userRegisterDTO: UserRegisterDTO): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            this.userModel.findOne({email: userRegisterDTO.data.email}, function (err, user: User | null) {
                if (err) {
                    return reject(err);
                }
                console.log('User: ', user);
                if (user?.email === userRegisterDTO.data.email) {
                    console.log(user.email === userRegisterDTO.data.email);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        })

   }


}