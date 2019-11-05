varying highp vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform highp vec2 uSize;
uniform highp float uRotation;

void main() {
    highp float maxSize = ceil(sqrt(pow(uSize.x / 2.0, 2.0) + pow(uSize.y / 2.0, 2.0))) * 2.0;
    highp vec2 innerPos = (maxSize - uSize) / 2.0;

    highp vec2 croped = (floor(vTextureCoord * uSize + 0.5) + 0.5) / uSize;

    highp vec2 moved = croped - 0.5;
    highp vec2 rotated = vec2(moved.x * cos(uRotation) - moved.y * sin(uRotation), moved.x * sin(uRotation) + moved.y * cos(uRotation));
    highp vec2 movedBack = rotated + 0.5;
    highp vec2 textureCoord = (movedBack * (1.0 + innerPos * 2.0 / maxSize)) - innerPos / maxSize;

    if(textureCoord.x < 0.0 || textureCoord.y < 0.0 || textureCoord.x > 1.0 || textureCoord.y > 1.0) {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    } else {
        gl_FragColor = texture2D(uSampler, textureCoord);
    }
}