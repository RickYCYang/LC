class Solution:
    @classmethod
    def generateParenthesis(self, n: int) -> list[str]:
        result = []

        def dfs(s: str, l: int, r: int):
            if len(s) == n * 2:
                result.append(s)
                return

            if l < n:
                dfs(s + "(", l + 1, r)

            if r < l:
                dfs(s + ")", l, r + 1)

        dfs("", 0, 0)
        return result


test_data = [
    {
        "n": 3,
        "ans": ["((()))", "(()())", "(())()", "()(())", "()()()"],
    },
    {
        "n": 1,
        "ans": ["()"],
    },
]

for data in test_data:
    print(data["ans"] == Solution.generateParenthesis(data["n"]))
