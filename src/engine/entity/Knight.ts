import Entity from "./Entity";
import Render from "../webgl/Render";
import InputManager from "../input/InputManager";
import Animation from "../webgl/Animation";
import InputSignal from "../input/InputSignal";

export default class Knight extends Entity {
  private readonly bottomWalk: Animation;
  private isWalking: boolean = false;
  private facing: number = 1;


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
    const horizontal = -1 * +this.inputManager.getStatus(InputSignal.LEFT)
      + +this.inputManager.getStatus(InputSignal.RIGHT);

    const vertical = -1 * +this.inputManager.getStatus(InputSignal.DOWN)
      + +this.inputManager.getStatus(InputSignal.UP);

    this.x += horizontal;
    this.y += vertical;

    if(horizontal != 0 || vertical != 0) {
      this.isWalking = true;
      this.bottomWalk.tick();
      if(horizontal != 0) this.facing = horizontal;
    } else {
      this.isWalking = false;
    }


  }

}