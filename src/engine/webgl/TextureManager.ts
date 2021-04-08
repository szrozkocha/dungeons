import GlException from "../exception/GlException";
import Texture from "./Texture";

export default class TextureManager {
    private textures: { [key: string]: Texture } = {};
    public getTexture(name: string): Texture {
        if(this.textures.hasOwnProperty(name)) {
            return this.textures[name];
        }

        throw new GlException("Can't get texture!");
    }

    constructor(gl: WebGLRenderingContext, textures: HTMLImageElement, texturesDescriptors: TextureData[][]) {
        for(const texturesDescriptor of texturesDescriptors) {
            for (const textureData of texturesDescriptor) {
                this.createTexture(textures, textureData, gl);
            }
        }
    }

    private createTexture(image: HTMLImageElement, textureData: TextureData, gl: WebGLRenderingContext) {
        let textureCanvas = document.createElement("canvas");
        textureCanvas.width = textureData.width;
        textureCanvas.height = textureData.height;

        let textureCtx = textureCanvas.getContext("2d");
        if(textureCtx === null) {
            throw "Cant create context 2d";
        }

        textureCtx.drawImage(image, textureData.x, textureData.y, textureData.width, textureData.height, 0, 0, textureData.width, textureData.height);

        const texture: WebGLTexture = TextureManager.createGlTexture(gl);
        gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture);
        gl.texImage2D(
            WebGLRenderingContext.TEXTURE_2D,
            0,
            WebGLRenderingContext.RGBA,
            WebGLRenderingContext.RGBA,
            WebGLRenderingContext.UNSIGNED_BYTE,
            textureCanvas
        );
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

        this.textures[textureData.name] = new Texture(textureData.name, textureData.width, textureData.height, texture);
    }

    private static createGlTexture(gl: WebGLRenderingContext): WebGLTexture {
        const texture: WebGLTexture | null = gl.createTexture();

        if(null !== texture) {
            return texture;
        }

        throw new GlException("Can't create texture!");
    }
}

interface TextureData {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
}