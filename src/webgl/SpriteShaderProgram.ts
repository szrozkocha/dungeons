import ShaderProgram from "./ShaderProgram";

export default class SpriteShaderProgram extends ShaderProgram {
    public static readonly POSITION_ATTRIBUTE = "aPosition";

    public static readonly Z_UNIFORM = "uZ";
    public static readonly POSITION_UNIFORM = "uPosition";
    public static readonly SCALE_UNIFORM = "uScale";
    public static readonly RATIO_UNIFORM = "uRatio";
    public static readonly SIZE_UNIFORM = "uSize";
    public static readonly ROTATION_UNIFORM = "uRotation";
    public static readonly SAMPLER_UNIFORM = "uSampler";

    public constructor(gl: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string) {
        super(gl, vertexShaderSource, fragmentShaderSource);

        this.attributes[SpriteShaderProgram.POSITION_ATTRIBUTE] = this.getAttributeLocation(SpriteShaderProgram.POSITION_ATTRIBUTE);

        this.uniforms[SpriteShaderProgram.Z_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.Z_UNIFORM);
        this.uniforms[SpriteShaderProgram.POSITION_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.POSITION_UNIFORM);
        this.uniforms[SpriteShaderProgram.SCALE_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SCALE_UNIFORM);
        this.uniforms[SpriteShaderProgram.RATIO_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.RATIO_UNIFORM);
        this.uniforms[SpriteShaderProgram.SIZE_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SIZE_UNIFORM);
        this.uniforms[SpriteShaderProgram.ROTATION_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.ROTATION_UNIFORM);
        this.uniforms[SpriteShaderProgram.SAMPLER_UNIFORM] = this.getUniformLocation(SpriteShaderProgram.SAMPLER_UNIFORM);
    }
}