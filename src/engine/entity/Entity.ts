import Processable from "../Processable";
import Translatable from "../webgl/Translatable";

export default abstract class Entity extends Translatable implements Processable {

    public abstract getTexture(): string;

    public abstract tick(frame: number): void;
}