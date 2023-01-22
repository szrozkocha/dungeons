export default interface Collisionable {
  processCollision(collisionable: Collisionable): void;
}