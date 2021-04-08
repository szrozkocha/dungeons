import Entity from "./Entity";
import Animation from "../webgl/Animation";
import Render from "../webgl/Render";

export default class FireColumn extends Entity {
    private readonly animation: Animation;

    public constructor(
        x: number,
        y: number,
        z: number,
        rotation: number) {
        super(x, y, z, rotation);
        this.animation = new Animation(
            [
                "fire_column_0",
                "fire_column_1",
                "fire_column_2",
                "fire_column_3",
                "fire_column_4",
                "fire_column_5",
                "fire_column_6",
                "fire_column_7",
            ],
            10
        );
    }

    public tick(): void {
        this.animation.tick();
    }

    public draw(render: Render): void {
        render.push();
        render.translate(this.x, this.y, this.z);
        render.rotate(this.rotation);
        this.animation.draw(render);
        render.pop();
    }
}