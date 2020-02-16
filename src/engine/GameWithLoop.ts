export default abstract class GameWithLoop {
    private lastFrameTimeMs: number;
    private delta: number;
    private readonly fps: number;
    private frame: number;

    protected constructor(fps: number) {
        this.lastFrameTimeMs = 0;
        this.delta = 0;
        this.fps = 1000 / fps;
        this.frame = 0;
    }

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

    protected abstract tick(timestamp: number): void;
    protected abstract draw(): void;
}