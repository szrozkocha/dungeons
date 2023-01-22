import Animation from "./engine/webgl/Animation";
import Render from "./engine/webgl/Render";
import Sprite from "./engine/webgl/Sprite";
import GameWithLoop from "./engine/GameWithLoop";
import Entity from "./engine/entity/Entity";
import StaticEntity from "./engine/entity/StaticEntity";
import InputManager from "./engine/input/InputManager";
import InputSignal from "./engine/input/InputSignal";
import FireColumn from "./engine/entity/FireColumn";
import Knight from "./engine/entity/Knight";
import Walls from "./engine/entity/wall/Walls";

export default class Game extends GameWithLoop {
    private entities: Entity[] = [];
    private readonly floor: StaticEntity[] = [];
    private readonly sword: StaticEntity;
    private readonly player: Knight;
    private readonly walls: Walls;


    constructor(private render: Render, public inputManager: InputManager) {
        super(60);

        this.player = new Knight(0, 0, 0, inputManager);
        this.entities.push(this.player);

        this.sword = new StaticEntity(-8 + 32, -8, 0, 0, new Sprite("sword"));
        this.entities.push(this.sword);

        this.walls = new Walls(
          16 * -5,
          16 * -5,
          [
              [true, true, true, true, true, true, true, true, true, true],
              [true, false, false, false, false, false, false, false, false, true],
              [true, false, false, false, false, false, false, false, false, true],
              [true, false, false, false, false, false, false, false, false, true],
              [true, false, false, false, false, false, false, false, true, true],
              [true, false, false, false, false, false, false, false, true, true],
              [true, false, false, false, false, false, false, false, false, true],
              [true, false, false, false, false, false, false, false, false, true],
              [true, false, false, false, false, false, false, false, false, true],
              [true, true, true, true, true, true, true, true, true, true]
          ]
        );

        this.entities.push(
          ...this.walls.walls
        )

        this.floor.push(
          ...this.walls.floors
        );

        //this.createFloors();
        //this.createWalls();

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

        this.player.processCollision(this.walls);

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

    /*private createWalls() {
        const walls: boolean[][] = [];

        for(let i = 0;i < 16 * 3;++i) {
            walls[i] = [];
        }

        const start = 0;

        const xOffset = -((start % 16)  * 3) * 16;
        const yOffset = -(Math.floor(start / 16) * 3) * 16;

        for (let i = start;i < 256;++i) {
            const gY = Math.floor(i / 16);
            const gX = i % 16;

            const wallPattern: boolean[][] = [
              [(i & 1) > 0, (i & 2) > 0, (i & 4) > 0],
              [(i & 8) > 0, true, (i & 16) > 0],
              [(i & 32) > 0, (i & 64) > 0, (i & 128) > 0]
            ]

            for (let y = 0; y < 3; y++) {
                for (let x = 0; x < 3; x++) {
                    walls[gY * 3 + y][gX * 3 + x] = wallPattern[y][x];
                }
            }
        }

        const getWall = (y: number, x: number) => {
            if (x >= 0 && x < 16 * 3 && y >= 0 && y < 16 * 3) {
                return walls[y][x];
            }
            return true;
        }

        for (let y = 0; y < 16 * 3; y++) {
            for (let x = 0; x < 16 * 3; x++) {
                let neighbours = 0;

                if(getWall(y - 1, x - 1)) {
                    neighbours += 1;
                }
                if(getWall(y - 1, x)) {
                    neighbours += 2;
                }
                if(getWall(y - 1, x + 1)) {
                    neighbours += 4;
                }
                if(getWall(y, x - 1)) {
                    neighbours += 8;
                }
                if(getWall(y, x + 1)) {
                    neighbours += 16;
                }
                if(getWall(y + 1, x - 1)) {
                    neighbours += 32;
                }
                if(getWall(y + 1, x)) {
                    neighbours += 64;
                }
                if(getWall(y + 1, x + 1)) {
                    neighbours += 128;
                }

                if(walls[y][x]) {
                    this.entities.push(new Wall(x * 16 + xOffset, y * 16 + yOffset, 0, 0, neighbours));
                } else {
                    this.floor.push(new StaticEntity(x * 16 + xOffset, y * 16 + yOffset, 0, 0, new Sprite("floor")));
                }
            }
        }
    }*/
}