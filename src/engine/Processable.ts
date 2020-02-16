export default interface Processable {
    tick(frame: number): void;
    getTexture(): string;
}