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
import FireColumn from "./engine/entity/FireColumn";
import Knight from "./engine/entity/Knight";

export default class Game extends GameWithLoop {
    private readonly entities: Entity[] = [];
    private readonly floor: StaticEntity[] = [];
    private readonly sword: StaticEntity;
    private readonly player: Knight;

    constructor(private render: Render, public inputManager: InputManager) {
        super(60);

        this.player = new Knight(0, 0, 0, inputManager);
        this.entities.push(this.player);

        this.sword = new StaticEntity(-8 + 32, -8, 0, 0, new Sprite("sword"));
        this.entities.push(this.sword);

        this.createFloors();
        this.createWalls();

        this.entities.push(
            new FireColumn(-12 + -2 * 16, -10 + 3 * 16, 0, 0),
            new FireColumn(-12 + -2 * 16, -2 + -2 * 16, 0, 0),
            new FireColumn(-4 + 2 * 16, -10 + 3 * 16, 0, 0),
            new FireColumn(-4 + 2 * 16, -2 + -2 * 16, 0, 0),
        );

        this.entities.push(
            new StaticEntity(
                -8,
                -8,
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
        for(const sprite of this.entities) {
            sprite.tick(frame);
        }

        this.sword.setRotation(this.sword.getRotation() + Math.PI / 120);
    }

    protected draw(): void {
        this.render.clear();

        this.render.push();

        this.render.translate(-this.player.getX(), -this.player.getY());

        for(const floor of this.floor) {
            floor.draw(this.render);
        }

        for(const sprite of this.entities.sort((a, b) => Math.sign((a.getZ() - a.getY()) - (b.getZ() - b.getY())))) {
            sprite.draw(this.render);
        }

        this.render.pop();
    }

    // @ts-ignore
    private createFloors() {
        for(let x = -7; x <= -3;++x) {
            for(let y = -2; y <= 2;++y) {
                this.floor.push(new StaticEntity(-8 + x * 16, -8 + y * 16, 0, 0, new Sprite("floor")));
            }
        }

        for(let x = -2; x <= 2;++x) {
            for (let y = -7; y <= 7; ++y) {
                this.floor.push(new StaticEntity(-8 + x * 16, -8 + y * 16, 0, 0, new Sprite("floor")));
            }
        }

        for(let x = 3; x <= 7;++x) {
            for(let y = -2; y <= 2;++y) {
                this.floor.push(new StaticEntity(-8 + x * 16, -8 + y * 16, 0, 0, new Sprite("floor")));
            }
        }

    }

    private createWalls() {
        //TOP
        for(let x = -7; x <= -4;++x) {
            this.entities.push(new Wall(-8 + x * 16, 3 * 16, -1, 0, WallType.TOP));
        }

        for(let x = -2; x <= 2;++x) {
            this.entities.push(new Wall(-8 + x * 16, 8 * 16, -1, 0, WallType.TOP));
        }

        for(let x = 4; x <= 7;++x) {
            this.entities.push(new Wall(-8 + x * 16, 3 * 16, -1, 0, WallType.TOP));
        }

        //BOTTOM
        for(let x = -7; x <= -4;++x) {
            this.entities.push(new Wall(-8 + x * 16, -8 + -2 * 16, 2, 0, WallType.BOTTOM));
        }

        for(let x = -2; x <= 2;++x) {
            this.entities.push(new Wall(-8 + x * 16, -8 + -7 * 16, 2, 0, WallType.BOTTOM));
        }

        for(let x = 4; x <= 7;++x) {
            this.entities.push(new Wall(-8 + x * 16, -8 + -2 * 16, 2, 0, WallType.BOTTOM));
        }

        //LEFT
        for(let y = 5; y <= 8;++y) {
            this.entities.push(new Wall(-8 + -3 * 16, -8 + y * 16, -1, 0, WallType.LEFT));
        }

        for(let y = -1; y <= 3;++y) {
            this.entities.push(new Wall(-8 + -8 * 16, -8 + y * 16, -1, 0, WallType.LEFT));
        }

        for(let y = -6; y <= -3;++y) {
            this.entities.push(new Wall(-8 + -3 * 16, -8 + y * 16, -1, 0, WallType.LEFT));
        }

        //RIGHT
        for(let y = 5; y <= 8;++y) {
            this.entities.push(new Wall(-8 + 3 * 16, -8 + y * 16, -1, 0, WallType.RIGHT));
        }

        for(let y = -1; y <= 3;++y) {
            this.entities.push(new Wall(-8 + 8 * 16, -8 + y * 16, -1, 0, WallType.RIGHT));
        }

        for(let y = -6; y <= -3;++y) {
            this.entities.push(new Wall(-8 + 3 * 16, -8 + y * 16, -1, 0, WallType.RIGHT));
        }


        this.entities.push(new Wall(-8 + -8 * 16, -8 + 4 * 16, -1, 0, WallType.CONCAVE_CORNER_TOP_LEFT));
        this.entities.push(new Wall(-8 + -8 * 16, -8 + -2 * 16, -1, 0, WallType.CONCAVE_CORNER_BOTTOM_LEFT));

        this.entities.push(new Wall(-8 + -3 * 16, -8 + 9 * 16, -1, 0, WallType.CONCAVE_CORNER_TOP_LEFT));
        this.entities.push(new Wall(-8 + -3 * 16, -8 + -7 * 16, -1, 0, WallType.CONCAVE_CORNER_BOTTOM_LEFT));


        this.entities.push(new Wall(-8 + 8 * 16, -8 + 4 * 16, -1, 0, WallType.CONCAVE_CORNER_TOP_RIGHT));
        this.entities.push(new Wall(-8 + 8 * 16, -8 + -2 * 16, -1, 0, WallType.CONCAVE_CORNER_BOTTOM_RIGHT));

        this.entities.push(new Wall(-8 + 3 * 16, -8 + 9 * 16, -1, 0, WallType.CONCAVE_CORNER_TOP_RIGHT));
        this.entities.push(new Wall(-8 + 3 * 16, -8 + -7 * 16, -1, 0, WallType.CONCAVE_CORNER_BOTTOM_RIGHT));


        this.entities.push(new Wall(-8 + -3 * 16, 3 * 16, -1, 0, WallType.CONVEX_CORNER_TOP_LEFT));
        this.entities.push(new Wall(-8 + 3 * 16, 3 * 16, -1, 0, WallType.CONVEX_CORNER_TOP_RIGHT));

        this.entities.push(new Wall(-8 + -3 * 16, -8 + -2 * 16, 2, 0, WallType.CONVEX_CORNER_BOTTOM_LEFT));
        this.entities.push(new Wall(-8 + 3 * 16, -8 + -2 * 16, 2, 0, WallType.CONVEX_CORNER_BOTTOM_RIGHT));
    }
}