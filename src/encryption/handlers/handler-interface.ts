import {CipherMethod} from "./constants";

export interface Handler {
    (cipherMethodId: string, value: string): HandlerResponse;
}