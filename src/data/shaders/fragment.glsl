varying highp vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform highp float uRotation;

uniform highp float uMaxSize;
uniform highp vec2 uInnerPos;
uniform highp float uVerticalFlip;

void main() {
    highp vec2 translated = floor(vTextureCoord * uMaxSize) + 0.5;
    highp vec2 moved = translated - uMaxSize / 2.0;
    highp vec2 rotated = vec2(moved.x * cos(uRotation) - moved.y * sin(uRotation), moved.x * sin(uRotation) + moved.y * cos(uRotation));
    highp vec2 movedBack = rotated + uMaxSize / 2.0;
    highp vec2 textureCoord = (movedBack - uInnerPos) / (uMaxSize - 2.0 * uInnerPos);

    if(0.0 <= textureCoord.x && textureCoord.x <= 1.0 &&
    0.0 <= textureCoord.y && textureCoord.y <= 1.0) {
        gl_FragColor = texture2D(uSampler, vec2(abs(textureCoord.x - uVerticalFlip), textureCoord.y));
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}