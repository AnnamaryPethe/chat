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
    Delete, BadRequestException,
} from '@nestjs/common';
import {UserRegisterDTO} from './dto/user-register.dto';
import {RegisterService} from './register.service';
import {UserLoginDto} from './dto/user-login.dto';
import {CreateResponse} from './classes/create-response.class';
import {Login_user} from './interfaces/login_user.interface';

@Controller('user')
export class UserController {
    constructor(private registerService: RegisterService) {}

    @Post()
    async addUser(@Body() userRegisterDTO: UserRegisterDTO): Promise<CreateResponse> {
        // tslint:disable-next-line:no-console
        console.log(userRegisterDTO);
        await this.registerService.addUser(userRegisterDTO).catch((err: string) => {
            // tslint:disable-next-line:no-console
            console.log(err);
            throw new BadRequestException({message: err, success: false});
        });
        return {
            message: 'User has been created.',
            success: true,
        };
    }

    @Post('/login')
    async login(@Body() userLoginDto: UserLoginDto): Promise<CreateResponse> {

        const result = await this.registerService.checkUser(userLoginDto).catch((err: string) => {
            throw new BadRequestException({message: err, success: false});
        });
        return {
            message: 'Login.',
            success: result.success,
            id: result.id,
        };
    }

    @Get()
    async getAllUsers(@Res() res) {
        const users = await this.registerService.getAllUser();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    async getUser(@Res() res, @Param('id') id): Promise<any[]> {
        const user = await this.registerService.getUser(id);
        if (!user) { throw new NotFoundException('User does not exist'); }
        return res.status(HttpStatus.OK).json(user);
    }

    @Put()
    async updateUser(@Res() res, @Query('userId') userId, @Body() userRegisterDTO: UserRegisterDTO): Promise<any[]> {
        const user = await this.registerService.updateUser(userId, userRegisterDTO);
        if (!user) { throw new NotFoundException('User does not exist'); }
        return res.status(HttpStatus.OK).json({message: 'User has been updated', user});
    }

    @Delete()
    async deleteUser(@Res() res, @Query('userId') userId): Promise<any[]> {
        const user = await this.registerService.deleteUser(userId);
        if (!user) { throw new NotFoundException('User does not exist'); }
        return res.status(HttpStatus.OK).json({message: 'User has been deleted', user});
    }

}
