import Processable from "../Processable";
import Render from "./Render";

export default class Animation implements Processable {
    private activeTexture: number;
    private activeFrames: number;

    constructor(private textures: string[], private tpf: number) {
        this.activeTexture = 0;
        this.activeFrames = 0;
    }

    tick(): void {
        ++this.activeFrames;

        if(this.activeFrames >= this.tpf) {
            this.activeFrames = 0;
            ++this.activeTexture;

            if(this.activeTexture >= this.textures.length) {
                this.activeTexture = 0;
            }
        }

    }

    public draw(render: Render): void {
        render.drawTexture(this.textures[this.activeTexture]);
    }
}