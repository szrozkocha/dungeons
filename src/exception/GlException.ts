import BaseException from "./BaseException";

export default class GlException extends BaseException {
    constructor(message: string) {
        super(message);
    }
}