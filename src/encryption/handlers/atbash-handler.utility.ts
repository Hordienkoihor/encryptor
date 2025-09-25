import {CreateEncryptionDto} from "../encryptor-encrypt.dto";
import {Handler} from "./handler-interface";
import {ALPHABET, ALPHABET_UP, CipherMethod, KEY} from "./constants";
import {HttpException, HttpStatus} from "@nestjs/common";


export const atbashHandlerUtility: Handler = (cipherMethodId: CipherMethod, value: string): HandlerResponse => {
    let handlerResponse: HandlerResponse = {
        success: false,
        value: null,
    };

    if (cipherMethodId != CipherMethod.ATBASH) {
        throw new HttpException("not atbash id", HttpStatus.BAD_REQUEST);
    }

    const alphabet = ALPHABET;
    const alphabetUp = ALPHABET_UP;
    const reverseAlphabet: string[] = [...alphabet].reverse();
    const reverseAlphabetUp: string[] = [...alphabetUp].reverse();

    let res = ''

    for (let i = 0; i < value.length; i++) {
        let current: string = value.charAt(i);

        let lowerCaseIdx: number = alphabet.indexOf(current);

        if (lowerCaseIdx != -1) {
            res += reverseAlphabet[lowerCaseIdx];
        } else {
            let upperCaseIdx: number = alphabetUp.indexOf(current);

            if (upperCaseIdx != -1) {
                res += reverseAlphabet[upperCaseIdx];
            } else {
                res += current;
            }
        }
    }

    return handlerResponse = {
            success: true,
            value: res
    };
}