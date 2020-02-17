import Animation from "./engine/webgl/Animation";
import Render from "./engine/webgl/Render";
import Sprite from "./engine/webgl/Sprite";
import GameWithLoop from "./engine/GameWithLoop";
import Entity from "./engine/entity/Entity";
import StaticEntity from "./engine/entity/StaticEntity";
import InputManager from "./engine/input/InputManager";
import InputSignal from "./engine/input/InputSignal";
import Wall from "./engine/entity/wall/Wall";
import WallType from "./engine/entity/wall/WallType";
import Translatable from "./engine/webgl/Translatable";
import FireColumn from "./engine/entity/FireColumn";

export default class Game extends GameWithLoop {
    private readonly entities: Entity[] = [];

    constructor(private render: Render, public inputManager: InputManager) {
        super(60);

        this.createFloors();
        this.createWalls();

        this.entities.push(
            new FireColumn(-20, -30, 1, 0),
            new FireColumn(20, -30, 1, 0),
            new FireColumn(-20, 10, 1, 0),
            new FireColumn(20, 10, 1, 0),
        );

        this.entities.push(
            new StaticEntity(
                0,
                0,
                1,
                0,
                new Animation(
                    [
                        "bat_up",
                        "bat_down",
                    ],
                    20
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

        for(const sprite of this.entities) {
            sprite.tick(frame);
        }
    }

    protected draw(): void {
        this.render.clear();

        this.entities.sort(Translatable.compare);

        for(const sprite of this.entities) {
            this.render.drawEntity(sprite);
        }
    }

    private createFloors() {
        for(let x = -1; x <= 1;++x) {
            for(let y = -4; y <= 4;++y) {
                this.entities.push(new StaticEntity(x * 16, y * 16, 0, 0, new Sprite("floor")));
            }
        }

        for(let x = -4; x <= -2;++x) {
            for(let y = -1; y <= 1;++y) {
                this.entities.push(new StaticEntity(x * 16, y * 16, 0, 0, new Sprite("floor")));
            }
        }

        for(let x = 2; x <= 4;++x) {
            for(let y = -1; y <= 1;++y) {
                this.entities.push(new StaticEntity(x * 16, y * 16, 0, 0, new Sprite("floor")));
            }
        }
    }

    private createWalls() {
        //TOP
        for(let x = -4; x <= -3;++x) {
            this.entities.push(new Wall(x * 16, -40, -1, 0, WallType.TOP));
        }

        for(let x = -1; x <= 1;++x) {
            this.entities.push(new Wall(x * 16, -5 * 16 - 8, -1, 0, WallType.TOP));
        }

        for(let x = 3; x <= 4;++x) {
            this.entities.push(new Wall(x * 16, -40, -1, 0, WallType.TOP));
        }

        //BOTTOM
        for(let x = -4; x <= -3;++x) {
            this.entities.push(new Wall(x * 16, 16, 2, 0, WallType.BOTTOM));
        }

        for(let x = -1; x <= 1;++x) {
            this.entities.push(new Wall(x * 16, 4 * 16, 2, 0, WallType.BOTTOM));
        }

        for(let x = 3; x <= 4;++x) {
            this.entities.push(new Wall(x * 16, 16, 2, 0, WallType.BOTTOM));
        }

        //LEFT
        for(let y = -5; y <= -4;++y) {
            this.entities.push(new Wall(-32, y * 16, -1, 0, WallType.LEFT));
        }

        for(let y = -2; y <= 0;++y) {
            this.entities.push(new Wall(-5 * 16, y * 16, -1, 0, WallType.LEFT));
        }

        for(let y = 2; y <= 3;++y) {
            this.entities.push(new Wall(-32, y * 16, -1, 0, WallType.LEFT));
        }

        //RIGHT
        for(let y = -5; y <= -4;++y) {
            this.entities.push(new Wall(32, y * 16, -1, 0, WallType.RIGHT));
        }

        for(let y = -2; y <= 0;++y) {
            this.entities.push(new Wall(5 * 16, y * 16, -1, 0, WallType.RIGHT));
        }

        for(let y = 2; y <= 3;++y) {
            this.entities.push(new Wall(32, y * 16, -1, 0, WallType.RIGHT));
        }

        this.entities.push(new Wall(-5 * 16, -48, -1, 0, WallType.CONCAVE_CORNER_TOP_LEFT));
        this.entities.push(new Wall(-5 * 16, 16, 2, 0, WallType.CONCAVE_CORNER_BOTTOM_LEFT));

        this.entities.push(new Wall(-32, -6 * 16, -1, 0, WallType.CONCAVE_CORNER_TOP_LEFT));
        this.entities.push(new Wall(-32, 4 * 16, 2, 0, WallType.CONCAVE_CORNER_BOTTOM_LEFT));

        this.entities.push(new Wall(32, -6 * 16, -1, 0, WallType.CONCAVE_CORNER_TOP_RIGHT));
        this.entities.push(new Wall(32, 4 * 16, 2, 0, WallType.CONCAVE_CORNER_BOTTOM_RIGHT));

        this.entities.push(new Wall(5 * 16, -48, -1, 0, WallType.CONCAVE_CORNER_TOP_RIGHT));
        this.entities.push(new Wall(5 * 16, 16, 2, 0, WallType.CONCAVE_CORNER_BOTTOM_RIGHT));

        this.entities.push(new Wall(-2 * 16, -40, -1, 0, WallType.CONVEX_CORNER_TOP_LEFT));
        this.entities.push(new Wall(2 * 16, -40, -1, 0, WallType.CONVEX_CORNER_TOP_RIGHT));
        this.entities.push(new Wall(2 * 16, 16, 2, 0, WallType.CONVEX_CORNER_BOTTOM_RIGHT));
        this.entities.push(new Wall(-2 * 16, 16, 2, 0, WallType.CONVEX_CORNER_BOTTOM_LEFT));
    }
}