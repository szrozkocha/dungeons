import HtmlException from "../exception/HtmlException";
import GlException from "../exception/GlException";
import SpriteShaderProgram from "./SpriteShaderProgram";
import TextureManager from "./TextureManager";
import vertexShaderSource from "../data/shaders/vertex.glsl";
import fragmentShaderSource from "../data/shaders/fragment.glsl";
import Sprite from "./Sprite";

export default class Render {
    private readonly gl: WebGLRenderingContext;
    private readonly spriteShaderProgram: SpriteShaderProgram;
    private readonly textureManager: TextureManager;

    constructor(canvasId: string) {
        this.gl = Render.getWebGl(Render.getCanvas(canvasId));

        this.gl.enable(WebGLRenderingContext.DEPTH_TEST);
        this.gl.enable(WebGLRenderingContext.CULL_FACE);
        this.gl.enable(WebGLRenderingContext.BLEND);
        this.gl.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
        this.gl.depthFunc(WebGLRenderingContext.LEQUAL);

        this.spriteShaderProgram = new SpriteShaderProgram(this.gl, vertexShaderSource, fragmentShaderSource);
        this.textureManager = new TextureManager(this.gl);
    }

    public resize(): void {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    }

    public clear(): void {
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
        this.gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
    }

    public draw(sprite: Sprite) {
        this.spriteShaderProgram.use();

        const texture = this.textureManager.getTexture(sprite.getTexture());


        const positionAttribute: number = this.spriteShaderProgram.getAttribute(SpriteShaderProgram.POSITION_ATTRIBUTE);
        const positionBuffer: WebGLBuffer = this.createBuffer();

        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);

        const vertices = [
            1.0, 0.0,
            0.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ];
        this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(vertices), WebGLRenderingContext.STATIC_DRAW);

        this.gl.enableVertexAttribArray(positionAttribute);

        this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, positionBuffer);

        this.gl.vertexAttribPointer(
            positionAttribute,
            2,
            WebGLRenderingContext.FLOAT,
            false,
            0,
            0
        );


        const zUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.Z_UNIFORM);
        this.gl.uniform1f(zUniform, sprite.getZ());


        const positionUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.POSITION_UNIFORM);
        this.gl.uniform2fv(positionUniform, new Float32Array([sprite.getX(), sprite.getY()]));


        const scaleUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.SCALE_UNIFORM);
        this.gl.uniform1f(scaleUniform, 128);

        const ratioUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.RATIO_UNIFORM);
        this.gl.uniform1f(ratioUniform, this.gl.canvas.width / this.gl.canvas.height);

        const maxSizeUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.MAX_SIZE_UNIFORM);
        const maxSize = Math.ceil(Math.sqrt(Math.pow(texture.getWidth() / 2.0, 2.0) + Math.pow(texture.getHeight() / 2.0, 2.0))) * 2.0;
        this.gl.uniform1f(maxSizeUniform, maxSize);

        const innerPosUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.INNER_POS_UNIFORM);
        this.gl.uniform2fv(innerPosUniform, [(maxSize - texture.getWidth()) / 2.0, (maxSize - texture.getHeight()) / 2.0]);

        const rotationUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.ROTATION_UNIFORM);
        this.gl.uniform1f(rotationUniform, sprite.getRotation());


        const samplerUniform: WebGLUniformLocation = this.spriteShaderProgram.getUniform(SpriteShaderProgram.SAMPLER_UNIFORM);
        this.gl.activeTexture(WebGLRenderingContext.TEXTURE0);
        this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, texture.getData());
        this.gl.uniform1i(samplerUniform, 0);

        const primitiveType: number = WebGLRenderingContext.TRIANGLE_STRIP;
        const offset: number = 0;
        const count: number = 4;

        this.gl.drawArrays(primitiveType, offset, count);
    }

    private createBuffer() {
        const buffer: WebGLBuffer | null = this.gl.createBuffer();

        if(null === buffer) {
            throw new GlException("Can't create buffer!");
        }

        return buffer;
    }

    private static getCanvas(canvasId: string): HTMLCanvasElement {
        const canvas: HTMLElement | null = document.getElementById(canvasId);

        if (canvas instanceof HTMLCanvasElement) {
            return canvas;
        }

        throw new HtmlException("Canvas don't exists!");
    }

    private static getWebGl(canvas: HTMLCanvasElement): WebGLRenderingContext {
        const gl: WebGLRenderingContext | null = canvas.getContext("webgl");

        if (gl instanceof WebGLRenderingContext) {
            return gl;
        }

        throw new GlException("Canvas don't provide webgl");
    }
}