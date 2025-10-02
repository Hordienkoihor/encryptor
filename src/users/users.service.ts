import {HttpException, Injectable} from '@nestjs/common';
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
        const user = await this.userRepository.save({
            ...userDto,
            recentCyphers: [],
        });
        return user;
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<User | null> {
        return await this.userRepository.findOneBy({id: id});
    }

    async findOneByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOneBy({email: email});
    }

    async pushToRecentCyphers(cypher: string, user: User): Promise<User> {
        user.recentCyphers.push(cypher);

        return await this.userRepository.save(user);
    }

}
