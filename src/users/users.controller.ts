import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "./create-user.dto";
import {User} from "./user.model";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post('/create')
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get('/:id')
    get (@Param('id') id: number) {
        return this.usersService.findOne(id);

    }

}
