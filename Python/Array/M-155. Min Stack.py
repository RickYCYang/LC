class MinStack:

    def __init__(self):
        self.val_stack = []
        self.min_val_stack = []

    def push(self, val: int) -> None:
        # val_stack
        self.val_stack.append(val)

        # min_val_stack
        n = len(self.min_val_stack)
        if n == 0 or val < self.min_val_stack[n - 1]:
            self.min_val_stack.append(val)
        else:
            self.min_val_stack.append(self.min_val_stack[n-1])

    def pop(self) -> None:
        self.val_stack.pop()
        self.min_val_stack.pop()

    def top(self) -> int:
        return self.val_stack[len(self.val_stack) - 1]

    def getMin(self) -> int:
        return self.min_val_stack[len(self.min_val_stack) - 1]

        # Your MinStack object will be instantiated and called as such:
        # obj = MinStack()
        # obj.push(val)
        # obj.pop()
        # param_3 = obj.top()
        # param_4 = obj.getMin()
