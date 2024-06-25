class Solution:
    @classmethod
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        stack = []
        result = [0] * len(temperatures)
        for i in range(len(temperatures) - 1, -1, -1):
            while len(stack) and temperatures[i] >= temperatures[stack[len(stack) - 1]]:
                stack.pop()
            if not len(stack):
                result[i] = 0
            else:
                result[i] = stack[len(stack) - 1] - i
            stack.append(i)
        return result


testData = [
    {
        "temperatures": [73, 74, 75, 71, 69, 72, 76, 73],
        "ans": [1, 1, 4, 2, 1, 1, 0, 0],
    },
    {
        "temperatures": [30, 40, 50, 60],
        "ans": [1, 1, 1, 0],
    },
    {
        "temperatures": [30, 60, 90],
        "ans": [1, 1, 0],
    },
]

for data in testData:
    print(data["ans"] == Solution.dailyTemperatures(data["temperatures"]))
