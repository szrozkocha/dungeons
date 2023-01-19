import Entity from "../Entity";
import Render from "../../webgl/Render";
import wallMapping from "../../../data/wallMapping.json";

interface WallMapping {
    texture: string;
    x: number;
    y: number;
    z: number;
    rotation: number;
}

function getWallMapping(neighbours: number): WallMapping[] {
    if(!((wallMapping as any)["" + neighbours])) {
        console.log(neighbours);
    }
    return (wallMapping as any)["" + neighbours] as WallMapping[];
}

export default class Wall extends Entity {
    constructor(
        x: number,
        y: number,
        z: number,
        rotation: number,
        private neighbours: number) {
        super(x, y, z, rotation);
    }

    tick(): void {
    }

    public draw(render: Render): void {
        render.push();
        render.translate(this.x, this.y, this.z);
        render.rotate(this.rotation);
        for (const wallMapping of getWallMapping(this.neighbours)) {
            render.push();
            render.translate(wallMapping.x, wallMapping.y, wallMapping.z);
            render.rotate(wallMapping.rotation);
            render.drawTexture(wallMapping.texture);
            render.pop();
        }
        render.pop();
    }
}