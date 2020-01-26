
import Render from "./webgl/Render";
import Game from "./Game";

window.onload = function () {
    const render: Render = new Render("canvas");
    const game: Game = new Game(render);

    function run(timestamp: number): void {
        game.update(timestamp);
        requestAnimationFrame(run);
    }

    requestAnimationFrame(run);
};