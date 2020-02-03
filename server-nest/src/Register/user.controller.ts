import {
    Body,
    Controller,
    HttpStatus,
    Post,
    Get,
    Res,
    Param,
    NotFoundException,
    Query,
    Put,
    Delete, BadRequestException
} from '@nestjs/common';
import {UserRegisterDTO} from "./dto/user-register.dto";
import {RegisterService} from "./register.service";
import {UserLoginDto} from "./dto/user-login.dto";
import {ancestorWhere} from "tslint";


@Controller('user')
export class UserController {
    constructor(private registerService: RegisterService) {}

    @Post()
    async addUser(@Res() res, @Body() userRegisterDTO: UserRegisterDTO) {
        console.log(userRegisterDTO);
        await this.registerService.addUser(userRegisterDTO).catch((err: string) => {
            console.log(err);
            throw new BadRequestException({message: err, success: false})
        });
        return res.status(HttpStatus.OK).json({
            message: "User has been created.",
            success: true
        })
    }

    @Post('/login')
    async login(@Res() res, @Body() userLoginDto: UserLoginDto) {

        await this.registerService.getUserByEmail(userLoginDto).catch((err: string) => {
            console.log(err);
            throw new BadRequestException({message: err, success: false})
        });
        return res.status(HttpStatus.OK).json({
            message: "Login.",
            success: true
        })
    }

    @Get()
    async getAllUsers(@Res() res) {
        const users = await this.registerService.getAllUser();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:userId')
    async getUser(@Res() res, @Param('userId') userId): Promise<any[]> {
        const user = await this.registerService.getUser(userId);
        if(!user) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json(user);
    }

    @Put()
    async updateUser(@Res() res, @Query('userId') userId, @Body() userRegisterDTO: UserRegisterDTO):Promise<any[]> {
        const user = await this.registerService.updateUser(userId, userRegisterDTO);
        if(!user) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json({message: "User has been updated", user});
    }

    @Delete()
    async deleteUser(@Res() res, @Query("userId") userId): Promise<any[]> {
        const user = await this.registerService.deleteUser(userId);
        if(!user) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json({message: "User has been deleted", user});
    }

}