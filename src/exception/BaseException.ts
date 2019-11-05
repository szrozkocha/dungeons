export default class BaseException {
    constructor(private readonly message: string) {}

    public getMessage(): string {
        return this.message;
    }
}