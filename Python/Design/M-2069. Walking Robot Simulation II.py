class Robot:
    directions = ["East", "North", "West", "South"]

    def __init__(self, width: int, height: int):
        self.width = width
        self.height = height
        self.round = (self.width - 1) * 2 + (self.height - 1) * 2
        self.cur_position = [0, 0]
        self.cur_direction = Robot.directions[0]
        self.ttl_steps = 0

    def step(self, num: int) -> None:
        self.ttl_steps += num
        self.ttl_steps %= self.round

        if self.ttl_steps <= self.width - 1:
            self.cur_position = [self.ttl_steps, 0]
            self.cur_direction = (
                Robot.directions[3] if self.ttl_steps == 0 else Robot.directions[0]
            )
            return

        if self.ttl_steps <= self.width - 1 + self.height - 1:
            self.cur_position = [self.width - 1, self.ttl_steps - (self.width - 1)]
            self.cur_direction = Robot.directions[1]
            return

        if self.ttl_steps <= (self.width - 1) * 2 + self.height - 1:
            self.cur_position = [
                (self.width - 1)
                - (self.ttl_steps - (self.width - 1) - (self.height - 1)),
                self.height - 1,
            ]
            self.cur_direction = Robot.directions[2]
            return

        self.cur_position = [
            0,
            (self.height - 1)
            - (self.ttl_steps - 2 * (self.width - 1) - (self.height - 1)),
        ]
        self.cur_direction = Robot.directions[3]

    def getPos(self) -> list[int]:
        return self.cur_position

    def getDir(self) -> str:
        return self.cur_direction


# Your Robot object will be instantiated and called as such:
# obj = Robot(width, height)
# obj.step(num)
# param_2 = obj.getPos()
# param_3 = obj.getDir()
