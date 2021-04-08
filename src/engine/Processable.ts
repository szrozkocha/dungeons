import Render from "./webgl/Render";

export default interface Processable {
    tick(frame: number): void;
    draw(render: Render): void;
}