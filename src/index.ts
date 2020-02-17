
import Render from "./engine/webgl/Render";
import Game from "./Game";
import InputManager from "./engine/input/InputManager";
import texturesImage from "./data/textrues/textures.png";

window.onload = function () {
    let image = new Image();

    image.onload = () => {
        const render: Render = new Render("canvas", image);
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

    image.src = texturesImage;
};