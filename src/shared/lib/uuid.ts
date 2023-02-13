import * as crypto from "crypto";

export const createUUID = () => {
    return crypto.randomUUID()
}