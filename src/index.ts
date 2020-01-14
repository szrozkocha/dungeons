import Sprite from "./webgl/Sprite";
import Render from "./webgl/Render";

const render: Render = new Render("canvas");

const wall: Sprite = new Sprite(
    -24,
    0,
    0,
    0,
    "wall"
);

const sword: Sprite = new Sprite(
    0,
    0,
    0,
    Math.PI / 2,
    "sword"
);

const bat: Sprite = new Sprite(
    24,
    0,
    0,
    0,
    "bat_up"
);

setInterval(() => {
    const angle = Math.PI / (1000 / 60 * 10);

    wall.rotate(angle);
    sword.rotate(angle);
    bat.rotate(angle);

    render.resize();
    render.clear();

    render.draw(sword);
    render.draw(wall);
    render.draw(bat);
}, 1000 / 60);