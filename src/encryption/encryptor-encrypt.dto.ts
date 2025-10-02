import {CipherMethod} from "./handlers/constants";

export class CreateEncryptionDto {
        cipherMethod: string
        value: string;
    }