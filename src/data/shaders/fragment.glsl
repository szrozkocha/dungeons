varying highp vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform highp vec2 uSize;
uniform highp float uRotation;

void main() {
    highp float maxSize = ceil(sqrt(pow(uSize.x / 2.0, 2.0) + pow(uSize.y / 2.0, 2.0))) * 2.0;
    highp vec2 innerPos = (maxSize - uSize) / 2.0;

    highp vec2 translated = floor(vTextureCoord * maxSize) + 0.5;
    highp vec2 moved = translated - maxSize / 2.0;
    highp vec2 rotated = vec2(moved.x * cos(uRotation) - moved.y * sin(uRotation), moved.x * sin(uRotation) + moved.y * cos(uRotation));
    highp vec2 movedBack = rotated + maxSize / 2.0;
    highp vec2 textureCoord = (movedBack - innerPos) / (maxSize - 2.0 * innerPos);

    if(0.0 <= textureCoord.x && textureCoord.x <= 1.0 &&
    0.0 <= textureCoord.y && textureCoord.y <= 1.0) {
        gl_FragColor = texture2D(uSampler, textureCoord);
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}