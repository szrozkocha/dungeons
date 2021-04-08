import Processable from "../Processable";
import Translatable from "../webgl/Translatable";
import Render from "../webgl/Render";

export default abstract class Entity extends Translatable implements Processable {

    public abstract draw(render: Render): void;

    public abstract tick(frame: number): void;
}