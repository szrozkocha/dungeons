export default class Translatable {

    public constructor(
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

    public copy(): Translatable {
        return new Translatable(this.x, this.y, this.z, this.rotation);
    }

    public clear(): void {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.rotation = 0;
    }
}