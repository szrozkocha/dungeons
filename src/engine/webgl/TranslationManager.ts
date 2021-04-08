import Translatable from "./Translatable";

export default class TranslationManager {
    private readonly translatables: Translatable[];

    constructor() {
        this.translatables = [new Translatable(0, 0, 0, 0)];
    }

    public get(): Translatable {
        return this.translatables[this.translatables.length - 1];
    }

    public pop(): void {
        if(this.translatables.length > 1) {
            this.translatables.pop();
        }
    }

    public push(): void {
        this.translatables.push(this.get().copy());
    }

    public clear(): void {
        this.get().clear();
    }

    public translate(x: number, y: number, z?: number) {
        let actual = this.get();

        actual.setX(actual.getX() + Math.cos(actual.getRotation()) * x - Math.sin(actual.getRotation()) * y);
        actual.setY(actual.getY() + Math.sin(actual.getRotation()) * x - Math.cos(actual.getRotation()) * y);

        if(z !== undefined) {
            actual.setZ(actual.getZ() + z);
        }
    }

    public rotate(angle: number) {
        let actual = this.get();

        actual.setRotation(actual.getRotation() + angle)
    }
}