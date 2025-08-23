import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.model";
import {CreateUserDto} from "./create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
                private userRepository: Repository<User>,
    ) {}

    async createUser(userDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.save(userDto);
        return user;
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<User | null> {
        return await this.userRepository.findOneBy({id: id});
    }

}
