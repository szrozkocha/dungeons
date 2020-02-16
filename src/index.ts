
import Render from "./engine/webgl/Render";
import Game from "./Game";
import InputManager from "./engine/input/InputManager";

window.onload = function () {
    const render: Render = new Render("canvas");
    const inputManager: InputManager = new InputManager();
    const game: Game = new Game(render, inputManager);

    function run(timestamp: number): void {
        game.update(timestamp);
        requestAnimationFrame(run);
    }

    window.onkeydown = function(event: KeyboardEvent) {
        inputManager.onKeyDown(event);
    };

    window.onkeyup = function(event: KeyboardEvent) {
        inputManager.onKeyUp(event);
    };

    requestAnimationFrame(run);
};