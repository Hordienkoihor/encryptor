import {Body, Controller, Post} from '@nestjs/common';
import {EncryptionService} from "./encryption.service";
import {CreateEncryptionDto} from "./encryptor-encrypt.dto";

@Controller('encryption')
export class EncryptionController {
    constructor(private readonly encryptionService: EncryptionService) {}

    @Post('/caesar')
    async encryptWithCaesar(@Body() dto: CreateEncryptionDto) {
        return this.encryptionService.encryptWithCaesar(dto);
    }

    @Post('/atbash')
    async encryptWithAtbash(@Body() dto: CreateEncryptionDto) {
        return this.encryptionService.encryptWithAtbash(dto);
    }
}
