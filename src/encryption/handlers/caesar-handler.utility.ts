import {Handler} from "./handler-interface";
import {ALPHABET, ALPHABET_UP, CipherMethod, KEY} from "./constants";

export const caesarHandlerUtility: Handler = (cipherMethodId: string, value: string) => {
    let handlerResponse: HandlerResponse = {
        success: false,
        value: null,
    };

    if (CipherMethod.CAESAR != cipherMethodId) {
        return handlerResponse;
    }

    const alphabet = ALPHABET;
    const alphabetUp = ALPHABET_UP;
    const key = KEY;

    const input = value;
    let res = '';

    for (let i = 0; i < input.length; i++) {
        const current = input[i];

        const lowerIndex = alphabet.indexOf(current);
        if (lowerIndex !== -1) {
            res += alphabet[(lowerIndex + key) % alphabet.length];
            continue;

        }

        const higherIndex = alphabetUp.indexOf(current);
        if (higherIndex !== -1) {
            res += alphabetUp[(higherIndex + key) % alphabetUp.length];
            continue;
        }

        res += current;

    }

    return handlerResponse = {
        success: true,
        value: res,
    };
}