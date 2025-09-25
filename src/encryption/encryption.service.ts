import {Injectable} from '@nestjs/common';
import {CreateEncryptionDto} from "./encryptor-encrypt.dto";
import {caesarHandlerUtility} from './handlers/caesar-handler.utility'
import {atbashHandlerUtility} from './handlers/atbash-handler.utility'

@Injectable()
export class EncryptionService {
    encryptWithCaesar(dto: CreateEncryptionDto) {
        return caesarHandlerUtility(dto.cipherMethod, dto.value);
    }

    encryptWithAtbash(dto: CreateEncryptionDto) {
        return atbashHandlerUtility(dto.cipherMethod, dto.value);
    }
}
