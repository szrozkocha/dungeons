import Entity from "./Entity";
import Animation from "../webgl/Animation";

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

    public getTexture(): string {
        return this.animation.getTexture();
    }

    public tick(): void {
        this.animation.tick();
    }
}