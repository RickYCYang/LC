class Solution:
    @classmethod
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False

        bracketMap = {
            "]": "[",
            "}": "{",
            ")": "("
        }
        stack = []
        for char in s:
            # open bracket
            if char not in bracketMap:
                stack.append(char)
            # close bracket
            else:
                open_bracket = stack.pop() if len(stack) > 0 else None
                if (open_bracket != bracketMap[char]):
                    return False

        return False if len(stack) > 0 else True


test_data = [
    {"s": "()", "ans": True},
    {"s": "()[]{}", "ans": True},
    {"s": "(]", "ans": False},
    {"s": "[", "ans": False},
    {"s": "]", "ans": False},
    {"s": "))", "ans": False}
]

for data in test_data:
    print(data["ans"] == Solution.isValid(data["s"]))
