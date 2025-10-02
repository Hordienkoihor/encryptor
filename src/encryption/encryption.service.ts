import {HttpException, Injectable} from '@nestjs/common';
import {CreateEncryptionDto} from "./encryptor-encrypt.dto";
import {caesarHandlerUtility} from './handlers/caesar-handler.utility'
import {atbashHandlerUtility} from './handlers/atbash-handler.utility'
import {CreateUserDto} from "../users/create-user.dto";
import {UsersService} from "../users/users.service";
import {UserDataDto} from "../users/user-data.dto";

@Injectable()
export class EncryptionService {
    constructor(private readonly usersService: UsersService) {
    }

    async encryptWithCaesar(dto: CreateEncryptionDto, userInfo: UserDataDto) {
        if (userInfo?.email) {
            const user = await this.usersService.findOneByEmail(userInfo.email);

            if (!user) {
                throw new HttpException("User not found", 404);
            }

            await this.usersService.pushToRecentCyphers(dto.value, user );

        }
        return caesarHandlerUtility(dto.cipherMethod, dto.value);
    }

    encryptWithAtbash(dto: CreateEncryptionDto) {
        return atbashHandlerUtility(dto.cipherMethod, dto.value);
    }
}
