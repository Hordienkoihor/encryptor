import {Body, Controller, Post} from '@nestjs/common';
import {EncryptionService} from "./encryption.service";
import {CreateEncryptionDto} from "./encryptor-encrypt.dto";
import {CreateUserDto} from "../users/create-user.dto";
import {UserDataDto} from "../users/user-data.dto";

@Controller('encryption')
export class EncryptionController {
    constructor(private readonly encryptionService: EncryptionService) {}

    @Post('/caesar')
    async encryptWithCaesar(@Body() dto: CreateEncryptionDto) {
        const userInfo: UserDataDto = dto.email ? { email: dto.email } : {email: undefined};
        return this.encryptionService.encryptWithCaesar(dto, userInfo);
    }

    @Post('/atbash')
    async encryptWithAtbash(@Body() dto: CreateEncryptionDto) {
        return this.encryptionService.encryptWithAtbash(dto);
    }
}
