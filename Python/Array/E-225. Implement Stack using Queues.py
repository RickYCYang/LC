class MyStack:

    def __init__(self):
        self.first_queue = []
        self.second_queue = []

    def move_items(self, source_queue: list[int], target_queue: list[int]):
        while len(source_queue):
            target_queue.append(source_queue.pop(0))

    def push(self, x: int) -> None:
        self.move_items(self.second_queue, self.first_queue)
        self.first_queue.append(x)

    def pop(self) -> int:
        while len(self.first_queue) > 1:
            self.second_queue.append(self.first_queue.pop(0))
        item = self.first_queue.pop(0)
        self.move_items(self.second_queue, self.first_queue)
        return item

    def top(self) -> int:
        return self.first_queue[len(self.first_queue) - 1]

    def empty(self) -> bool:
        return len(self.first_queue) == 0

        # Your MyStack object will be instantiated and called as such:
        # obj = MyStack()
        # obj.push(x)
        # param_2 = obj.pop()
        # param_3 = obj.top()
        # param_4 = obj.empty()
