import Processable from "../Processable";

export default class Sprite implements Processable {
    constructor(private texture: string) {
    }

    public getTexture(): string {
        return this.texture;
    }

    tick(): void {
    }
}