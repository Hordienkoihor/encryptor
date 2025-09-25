import {CipherMethod} from "./constants";

export interface Handler {
    (cipherMethodId: CipherMethod, value: string): HandlerResponse;
}