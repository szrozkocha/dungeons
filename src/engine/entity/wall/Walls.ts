import Wall from "./Wall";
import StaticEntity from "../StaticEntity";
import Sprite from "../../webgl/Sprite";
import Collisionable from "../../Collisionable";

export default class Walls implements Collisionable {
  public readonly walls: Wall[] = [];
  public readonly floors: StaticEntity[] = [];

  constructor(public readonly offsetX: number, public readonly offsetY: number, private wallsArray: boolean[][]) {
    for (let x = 0; x < wallsArray[0].length; x++) {
      for (let y = 0; y < wallsArray.length; y++) {
        if(wallsArray[y][x]) {
          this.walls.push(new Wall(offsetX + x * 16, offsetY + y * 16, 0, 0, this.getNeighbours(y, x)));
        } else {
          this.floors.push(new StaticEntity(offsetX + x * 16, offsetY + y * 16, -1, 0, new Sprite("floor")));
        }

      }
    }
  }

  private getNeighbours(y: number, x: number): number {
    let neighbours = 0;

    if(this.getWall(y - 1, x - 1)) {
      neighbours += 1;
    }
    if(this.getWall(y - 1, x)) {
      neighbours += 2;
    }
    if(this.getWall(y - 1, x + 1)) {
      neighbours += 4;
    }
    if(this.getWall(y, x - 1)) {
      neighbours += 8;
    }
    if(this.getWall(y, x + 1)) {
      neighbours += 16;
    }
    if(this.getWall(y + 1, x - 1)) {
      neighbours += 32;
    }
    if(this.getWall(y + 1, x)) {
      neighbours += 64;
    }
    if(this.getWall(y + 1, x + 1)) {
      neighbours += 128;
    }

    return neighbours;
  }

  public getWall(y: number, x: number): boolean {
    if (x >= 0 && x < this.wallsArray[0].length && y >= 0 && y < this.wallsArray.length) {
      try {
        return this.wallsArray[y][x];
      } catch (e) {
        console.log("data", e, x, y);
      }
    }
    return true;
  }

  processCollision(): void {
  }

}