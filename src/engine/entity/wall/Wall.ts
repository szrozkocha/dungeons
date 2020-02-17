import WallType from "./WallType";
import Entity from "../Entity";

export default class Wall extends Entity {
    private readonly texture: string;

    constructor(
        x: number,
                y: number,
                z: number,
                rotation: number,
        wallType: WallType) {
        super(x, y, z, rotation);
        switch (wallType) {
            case WallType.LEFT:
                this.texture = "wall_left";
                break;
            case WallType.RIGHT:
                this.texture = "wall_right";
                break;
            case WallType.BOTTOM:
                this.texture = "wall_bottom";
                break;
            case WallType.CONCAVE_CORNER_TOP_LEFT:
                this.texture = "wall_concave_corner_top_left";
                break;
            case WallType.CONCAVE_CORNER_TOP_RIGHT:
                this.texture = "wall_concave_corner_top_right";
                break;
            case WallType.CONCAVE_CORNER_BOTTOM_LEFT:
                this.texture = "wall_concave_corner_bottom_left";
                break;
            case WallType.CONCAVE_CORNER_BOTTOM_RIGHT:
                this.texture = "wall_concave_corner_bottom_right";
                break;
            case WallType.CONVEX_CORNER_BOTTOM_LEFT:
                this.texture = "wall_convex_corner_bottom_left";
                break;
            case WallType.CONVEX_CORNER_TOP_LEFT:
                this.texture = "wall_convex_corner_top_left";
                break;
            case WallType.CONVEX_CORNER_TOP_RIGHT:
                this.texture = "wall_convex_corner_top_right";
                break;
            case WallType.CONVEX_CORNER_BOTTOM_RIGHT:
                this.texture = "wall_convex_corner_bottom_right";
                break;
            case WallType.TOP:
            default:
                this.texture = "wall_top";
        }
    }

    getTexture(): string {
        return this.texture;
    }

    tick(): void {
    }
}