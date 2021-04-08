import Processable from "../Processable";
import Render from "./Render";

export default class Sprite implements Processable {
    constructor(private texture: string) {
    }

    tick(): void {
    }

    public draw(render: Render): void {
        render.drawTexture(this.texture);
    }
}