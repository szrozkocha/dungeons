attribute vec2 aPosition;

uniform float uZ;
uniform vec2 uPosition;
uniform float uScale;
uniform float uRatio;
uniform vec2 uSize;

varying highp vec2 vTextureCoord;

void main() {
    highp float maxSize = ceil(sqrt(pow(uSize.x / 2.0, 2.0) + pow(uSize.y / 2.0, 2.0))) * 2.0;

    vec2 innerPos = (maxSize - uSize) / 2.0;

    vec2 translated = aPosition * maxSize;
    vec2 moved = translated + uPosition - innerPos;
    vec2 scaled = moved / uScale;
    vec2 transformed = scaled * vec2(1, uRatio);
    vec2 mirrored = transformed * vec2(1.0, -1.0);

    gl_Position = vec4(mirrored, uZ, 1.0);

    vTextureCoord = aPosition;
}