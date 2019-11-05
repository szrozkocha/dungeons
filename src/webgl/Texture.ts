export default class Texture {
    constructor(
        private readonly name: string,
        private readonly width: number,
        private readonly height: number,
        private readonly data: WebGLTexture
    ) {
    }

    public getName(): string {
        return this.name;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getData(): WebGLTexture {
        return this.data;
    }
}