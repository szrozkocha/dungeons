import Entity from "./Entity";
import Processable from "../Processable";
import Render from "../webgl/Render";

export default class StaticEntity extends Entity {
    public constructor(
        x: number,
        y: number,
        z: number,
        rotation: number,
        private processable: Processable) {
        super(x, y, z, rotation);
    }

    public tick(frame: number): void {
        this.processable.tick(frame);
    }

    public draw(render: Render): void {
        render.push();
        render.translate(this.x, this.y, this.z);
        render.rotate(this.rotation);
        this.processable.draw(render);
        render.pop();
    }
}