import Render from "./webgl/Render";
import Sprite from "./webgl/Sprite";

export default class Game {
    private readonly sprites: Sprite[] = [];

    constructor(private render: Render) {
        this.sprites.push(
            new Sprite(
                -24,
                0,
                0,
                0,
                "wall"
            ),
            new Sprite(
                0,
                0,
                0,
                Math.PI / 2,
                "sword"
            ),
            new Sprite(
                24,
                0,
                0,
                0,
                "bat_up"
            )
        );
    }

    private lastFrameTimeMs: number = 0;
    private delta: number = 0;
    private fps: number = 1000 / 60;
    private frame: number = 0;

    public update(timestamp: number): void {
        this.delta += timestamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timestamp;

        while(this.delta >= this.fps) {
            this.tick(this.frame);
            this.delta -= this.fps;
            ++this.frame;
        }
        this.draw();
    }

    // @ts-ignore
    private tick(frame: number): void {
        const angle = Math.PI / (1000 / 60 * 10);

        for(const sprite of this.sprites) {
            sprite.rotate(angle);
        }
    }

    private draw(): void {
        this.render.resize();
        this.render.clear();

        for(const sprite of this.sprites) {
            this.render.draw(sprite);
        }
    }
}