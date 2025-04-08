class Solution:
    @classmethod
    def removeStars(self, s: str) -> str:
        stack = []
        for char in s:
            if len(stack) and char == "*":
                stack.pop()
            else:
                stack.append(char)
        return "".join(stack)


testData = [
    {
        "s": "leet**cod*e",
        "ans": "lecoe",
    },
    {
        "s": "erase*****",
        "ans": "",
    },
]

for data in testData:
    print(data["ans"] == Solution.removeStars(data["s"]))
