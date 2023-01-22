import Entity from "./Entity";
import Render from "../webgl/Render";
import InputManager from "../input/InputManager";
import Animation from "../webgl/Animation";
import InputSignal from "../input/InputSignal";
import Collisionable from "../Collisionable";
import Walls from "./wall/Walls";

export default class Knight extends Entity {
  private readonly bottomWalk: Animation;
  private isWalking: boolean = false;
  private facing: number = 1;
  private speedX = 0;
  private speedY = 0;


  constructor(x: number, y: number, z: number, private inputManager: InputManager) {
    super(x, y, z, 0);

    this.bottomWalk = new Animation(
      [
        "knight_down_right",
        "knight_down_left"
      ],
      10
    );
  }

  draw(render: Render): void {
    const shouldFlip = !!(this.facing - 1);

    render.push();
    render.translate(this.x, this.y, this.z);
    render.rotate(this.rotation);
    if(this.isWalking) {
      this.bottomWalk.verticalFlip = shouldFlip;
      this.bottomWalk.draw(render)
    } else {
      render.drawTexture("knight_down", shouldFlip);
    }
    render.translate(0, 16, 16);
    render.drawTexture("knight_top", shouldFlip);
    render.pop();
  }

  tick(): void {
    this.speedX = -1 * +this.inputManager.getStatus(InputSignal.LEFT)
      + +this.inputManager.getStatus(InputSignal.RIGHT);

    this.speedY = -1 * +this.inputManager.getStatus(InputSignal.DOWN)
      + +this.inputManager.getStatus(InputSignal.UP);

    this.x += this.speedX;
    this.y += this.speedY;

    if(this.speedX != 0 || this.speedY != 0) {
      this.isWalking = true;
      this.bottomWalk.tick();
      if(this.speedX != 0) this.facing = this.speedX;
    } else {
      this.isWalking = false;
    }


  }

  processCollision(collisionable: Collisionable) {
    if(collisionable instanceof Walls) {
      const walls = collisionable;

      const beforeLeftX = Math.floor((this.getX() - this.speedX + 2 - walls.offsetX) / 16);
      const afterLeftX = Math.floor((this.getX() + 2 - walls.offsetX) / 16);
      const beforeRightX = Math.floor((this.getX() - this.speedX + 13 - walls.offsetX) / 16);
      const afterRightX = Math.floor((this.getX() + 13 - walls.offsetX) / 16);
      const beforeY = Math.floor((this.getY() - this.speedY - walls.offsetY) / 16);
      const afterY = Math.floor((this.getY() - walls.offsetY) / 16);

      let wallX = false;
      let wallY = false;

      if(walls.getWall(beforeY, afterLeftX) || walls.getWall(beforeY, afterRightX)) {
        this.x -= this.speedX;
        wallX = true;
      }

      if(walls.getWall(afterY, beforeLeftX) || walls.getWall(afterY, beforeRightX)) {
        this.y -= this.speedY;
        wallY = true;
      }

      if((wallX && this.speedY == 0) || (wallY && this.speedX == 0) || (wallX && wallY)) {
        this.isWalking = false;
      }
    }
  }
}