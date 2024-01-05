class Robot {
  width: number;
  height: number;
  curPosition: number[];
  curDirection: string;
  round: number;
  ttlSteps: number;
  static directions: string[] = ['East', 'North', 'West', 'South'];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.round = (this.width - 1) * 2 + (this.height - 1) * 2;
    this.curPosition = [0, 0];
    this.curDirection = Robot.directions[0];
    this.ttlSteps = 0;
  }

  step(num: number): void {
    this.ttlSteps += num;
    this.ttlSteps %= this.round;

    /* on the bottom */
    if (this.ttlSteps <= this.width - 1) {
      this.curPosition = [this.ttlSteps, 0];
      this.curDirection =
        this.ttlSteps === 0 ? Robot.directions[3] : Robot.directions[0];
      return;
    }

    /* on the right */
    if (this.ttlSteps <= this.width - 1 + (this.height - 1)) {
      this.curPosition = [this.width - 1, this.ttlSteps - (this.width - 1)];
      this.curDirection = Robot.directions[1];
      return;
    }

    /* on the top */
    if (this.ttlSteps <= (this.width - 1) * 2 + (this.height - 1)) {
      this.curPosition = [
        this.width - 1 - (this.ttlSteps - (this.height - 1) - (this.width - 1)),
        this.height - 1,
      ];
      this.curDirection = Robot.directions[2];
      return;
    }

    /* on the right */
    this.curPosition = [
      0,
      this.height -
        1 -
        (this.ttlSteps - 2 * (this.width - 1) - (this.height - 1)),
    ];
    this.curDirection = Robot.directions[3];
  }

  getPos(): number[] {
    return this.curPosition;
  }

  getDir(): string {
    return this.curDirection;
  }
}

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
const robot = new Robot(6, 3); // Initialize the grid and the robot at (0, 0) facing East.
robot.step(2); // It moves two steps East to (2, 0), and faces East.
robot.step(2); // It moves two steps East to (4, 0), and faces East.
console.log(robot.getDir()); // return "East"
console.log(robot.getPos()); // return [4, 0]
robot.step(2); // It moves one step East to (5, 0), and faces East.
// Moving the next step East would be out of bounds, so it turns and faces North.
// Then, it moves one step North to (5, 1), and faces North.
robot.step(1); // It moves one step North to (5, 2), and faces North (not West).
robot.step(4); // Moving the next step North would be out of bounds, so it turns and faces West.
// Then, it moves four steps West to (1, 2), and faces West.
console.log(robot.getPos()); // return [1, 2]
console.log(robot.getDir()); // return "West"
