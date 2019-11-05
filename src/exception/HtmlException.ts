import BaseException from "./BaseException";

export default class HtmlException extends BaseException {
    constructor(message: string) {
        super(message);
    }
}