export default class Translatable {
    protected constructor(
        protected x: number,
        protected y: number,
        protected z: number,
        protected rotation: number
    ) {
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    public getZ(): number {
        return this.z;
    }

    public setZ(z: number): void {
        this.z = z;
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

    public static compare(a: Translatable, b: Translatable) {
        if (a.getZ() < b.getZ()) {
            return -1;
        }
        if (b.getZ() < a.getZ()) {
            return 1;
        }
        return 0;
    }
}