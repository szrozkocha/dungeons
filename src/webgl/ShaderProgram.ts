import GlException from "../exception/GlException";

export default class ShaderProgram {
    protected glShaderProgram: WebGLProgram;

    protected attributes: { [key: string]: number } = {};
    public getAttribute(name: string): number {
        if(this.attributes.hasOwnProperty(name)) {
            return this.attributes[name];
        }

        throw new GlException("Can't get attribute!");
    }

    protected uniforms: { [key: string]: WebGLUniformLocation } = {};
    public getUniform(name: string): WebGLUniformLocation {
        if(this.uniforms.hasOwnProperty(name)) {
            return this.uniforms[name];
        }

        throw new GlException("Can't get uniform!");
    }

    public constructor(protected gl: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string) {
        const vertexShader = this.createShader(vertexShaderSource, WebGLRenderingContext.VERTEX_SHADER);
        const fragmentShader = this.createShader(fragmentShaderSource, WebGLRenderingContext.FRAGMENT_SHADER);

        this.glShaderProgram = this.createProgram(vertexShader, fragmentShader);
    }

    public use(): void {
        this.gl.useProgram(this.glShaderProgram);
    }

    protected getAttributeLocation(attributeName: string): number {
        let attributeLocation: number = this.gl.getAttribLocation(this.glShaderProgram, attributeName);

        if(-1 === attributeLocation) {
            throw new GlException("Can't get attribute location!");
        }

        return attributeLocation;
    }

    protected getUniformLocation(uniformName: string): WebGLUniformLocation {
        let uniformLocation: WebGLUniformLocation | null = this.gl.getUniformLocation(this.glShaderProgram, uniformName);

        if(null === uniformLocation) {
            throw new GlException("Can't get uniform location!");
        }

        return uniformLocation;
    }

    private createShader(source: string, type: number): WebGLShader {
        const shader: WebGLShader | null = this.gl.createShader(type);

        if(null === shader) {
            throw new GlException("Can't create shader!");
        }

        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        const success: boolean = this.gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS);
        if (success) {
            return shader;
        }

        console.log(this.gl.getShaderInfoLog(shader));

        this.gl.deleteShader(shader);

        throw new GlException("Can't compile shader!");
    }

    private createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        const program: WebGLProgram | null = this.gl.createProgram();

        if(null === program) {
            throw new GlException("Can't create program!");
        }

        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);

        const success: boolean  = this.gl.getProgramParameter(program, WebGLRenderingContext.LINK_STATUS);
        if (success) {
            return program;
        }

        this.gl.deleteProgram(program);

        throw new GlException("Can't link program!");
    }
}