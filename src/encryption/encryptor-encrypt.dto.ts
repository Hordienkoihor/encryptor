import {CipherMethod} from "./handlers/constants";

export class CreateEncryptionDto {
        cipherMethod: CipherMethod
        value: string;
    }