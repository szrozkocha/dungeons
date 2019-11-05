export default class Sprite {
    constructor(
        private x: number,
        private y: number,
        private z: number,
        private rotation: number,
        private texture: string
    ) {
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getZ(): number {
        return this.z;
    }

    public getRotation(): number {
        return this.rotation;
    }

    public setRotation(rotation: number): void {
        this.rotation = rotation;
    }

    public rotate(angle: number): void {
        this.rotation += angle;
    }

    public getTexture(): string {
        return this.texture;
    }
}