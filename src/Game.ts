import Animation from "./engine/webgl/Animation";
import Render from "./engine/webgl/Render";
import Sprite from "./engine/webgl/Sprite";
import GameWithLoop from "./engine/GameWithLoop";
import Entity from "./engine/entity/Entity";
import StaticEntity from "./engine/entity/StaticEntity";
import InputManager from "./engine/input/InputManager";
import InputSignal from "./engine/input/InputSignal";

export default class Game extends GameWithLoop {
    private readonly sprites: Entity[] = [];

    constructor(private render: Render, public inputManager: InputManager) {
        super(60);
        this.sprites.push(
            new StaticEntity(
                -24,
                0,
                0,
                0,
                new Sprite("wall")
            ),
            new StaticEntity(
                0,
                0,
                0,
                Math.PI / 2,
                new Sprite("sword")
            ),
            new StaticEntity(
                24,
                0,
                0,
                0,
                new Sprite("bat_up")
            )
            ,
            new StaticEntity(
                0,
                24,
                0,
                0,
                new Animation(
                    [
                        "fire_column_0",
                        "fire_column_1",
                        "fire_column_2",
                        "fire_column_3",
                        "fire_column_4",
                        "fire_column_5",
                        "fire_column_6",
                        "fire_column_7",
                    ],
                    10
                )
            )
        );

        inputManager.addMapping(InputSignal.UP, "w");
        inputManager.addMapping(InputSignal.RIGHT, "d");
        inputManager.addMapping(InputSignal.DOWN, "s");
        inputManager.addMapping(InputSignal.LEFT, "a");
    }

    protected tick(frame: number): void {
        const x = +this.inputManager.getStatus(InputSignal.LEFT) * -1 + +this.inputManager.getStatus(InputSignal.RIGHT);
        const y = +this.inputManager.getStatus(InputSignal.UP) * -1 + +this.inputManager.getStatus(InputSignal.DOWN);

        this.render.move(x, y);

        const angle = Math.PI / (1000 / 60 * 10);

        this.render.rotate(angle);

        for(const sprite of this.sprites) {
            sprite.rotate(angle);
            sprite.tick(frame);
        }
    }

    protected draw(): void {
        this.render.resize();
        this.render.clear();

        for(const sprite of this.sprites) {
            this.render.drawEntity(sprite);
        }
    }
}