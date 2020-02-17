
import Render from "./engine/webgl/Render";
import Game from "./Game";
import InputManager from "./engine/input/InputManager";
import texturesImage from "./data/textrues/textures.png";

window.onload = function () {
    let image = new Image();

    image.onload = () => {
        const render: Render = new Render("canvas", image);
        render.resize(window.innerWidth, window.innerHeight);
        const inputManager: InputManager = new InputManager();
        const game: Game = new Game(render, inputManager);

        function run(timestamp: number): void {
            game.update(timestamp);
            requestAnimationFrame(run);
        }

        window.onresize = () => {
            render.resize(window.innerWidth, window.innerHeight);
        }

        window.onkeydown = (event: KeyboardEvent) => {
            inputManager.onKeyDown(event);
        };

        window.onkeyup = (event: KeyboardEvent) => {
            inputManager.onKeyUp(event);
        };

        requestAnimationFrame(run);
    };

    image.src = texturesImage;
};