
import Render from "./engine/webgl/Render";
import Game from "./Game";
import InputManager from "./engine/input/InputManager";
import texturesImage from "./data/textrues/textures.png";
import TextureManager from "./engine/webgl/TextureManager";
import SpriteShaderProgram from "./engine/webgl/SpriteShaderProgram";
import vertexShaderSource from "./data/shaders/vertex.glsl";
import fragmentShaderSource from "./data/shaders/fragment.glsl";
import fireColumnDescriptor from "./data/textrues/descriptor/fireColumn.json";
import knightDescriptor from "./data/textrues/descriptor/knight.json";
import othersDescriptor from "./data/textrues/descriptor/others.json";
import wallDescriptor from "./data/textrues/descriptor/wall.json";

window.onload = function () {
    let textures = new Image();

    textures.onload = () => {
        const render: Render = new Render(
            "canvas",
            gl => new SpriteShaderProgram(gl, vertexShaderSource, fragmentShaderSource),
            gl => new TextureManager(
                gl,
                textures,
                [fireColumnDescriptor, knightDescriptor, othersDescriptor, wallDescriptor]
            )
        );
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

        window.onmousemove = (event: MouseEvent) => {
            inputManager.onMouseMove(event);
        }

        requestAnimationFrame(run);
    };

    textures.src = texturesImage;
};