import Processable from "../Processable";
import Translatable from "../webgl/Translatable";
import Render from "../webgl/Render";
import Collisionable from "../Collisionable";

export default abstract class Entity extends Translatable implements Processable, Collisionable {

    public abstract draw(render: Render): void;

    public abstract tick(frame: number): void;

    // @ts-ignore
    processCollision(collisionable:Collisionable): void {

    }
}