import Entity from "./Entity";
import Processable from "../Processable";

export default class StaticEntity extends Entity {
    public constructor(
        x: number,
        y: number,
        z: number,
        rotation: number,
        private processable: Processable) {
        super(x, y, z, rotation);
    }

    public getTexture(): string {
        return this.processable.getTexture();
    }

    public tick(frame: number): void {
        this.processable.tick(frame);
    }

}