attribute vec2 aPosition;

uniform float uZ;
uniform vec2 uPosition;
uniform float uScale;
uniform float uRatio;

uniform highp float uMaxSize;

varying highp vec2 vTextureCoord;

void main() {
    vec2 translated = floor(aPosition * uMaxSize);
    vec2 moved = translated + uPosition - uMaxSize / 2.0;
    vec2 scaled = moved / uScale;
    vec2 transformed = scaled * vec2(1.0, uRatio);
    vec2 mirrored = transformed * vec2(1.0, -1.0);

    gl_Position = vec4(mirrored, (-uZ + 128.0) / 256.0, 1.0);

    vTextureCoord = aPosition;
}