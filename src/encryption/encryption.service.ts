import {Injectable} from '@nestjs/common';
import {CreateEncryptionDto} from "./encryptor-encrypt.dto";

@Injectable()
export class EncryptionService {
    private readonly alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    private readonly alphabetUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    private readonly key = 3;

    encryptWithCaesar(dto: CreateEncryptionDto) {
        const input = dto.value;
        let res = '';

        for (let i = 0; i < input.length; i++) {
            const current = input[i];

            const lowerIndex = this.alphabet.indexOf(current);
            if (lowerIndex !== -1) {
                res += this.alphabet[(lowerIndex + this.key) % this.alphabet.length];
                continue;

            }

            const higherIndex = this.alphabetUp.indexOf(current);
            if (higherIndex !== -1) {
                res += this.alphabetUp[(higherIndex + this.key) % this.alphabetUp.length];
                continue;
            }

            res += current;

        }

        return res;
    }
}
