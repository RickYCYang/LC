class Solution:
    @classmethod
    def asteroidCollision(self, asteroids: list[int]) -> list[int]:
        stack = []
        i = 0
        while i < len(asteroids):
            if not len(stack):
                stack.append(asteroids[i])
                i += 1
                continue

            # no explode happened,
            # same direction or last goes left and current goes right
            last_asteroid = stack[len(stack) - 1]
            if last_asteroid * asteroids[i] > 0 or (
                last_asteroid < 0 and asteroids[i] > 0
            ):
                stack.append(asteroids[i])
                i += 1
                continue

            # explode happened
            if abs(last_asteroid) > abs(asteroids[i]):
                i += 1
                continue
            stack.pop()
            if abs(last_asteroid) == abs(asteroids[i]):
                i += 1
        return stack


testData = [
    {
        "asteroids": [5, 10, -5],
        "ans": [5, 10],
    },
    {
        "asteroids": [8, -8],
        "ans": [],
    },
    {
        "asteroids": [10, 2, -5],
        "ans": [10],
    },
    {"asteroids": [-2, -1, 1, 2], "ans": [-2, -1, 1, 2]},
]

for data in testData:
    print(data["ans"] == Solution.asteroidCollision(data["asteroids"]))
