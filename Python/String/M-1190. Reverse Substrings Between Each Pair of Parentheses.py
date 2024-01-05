class Solution:
    @classmethod
    def reverseParentheses(self, s: str) -> str:
        stack = [[]]
        for c in s:
            if c == "(":
                stack.append([])
                continue

            if c == ")":
                cur = stack.pop()
                cur.reverse()
                stack[len(stack) - 1].extend(cur)
                continue

            stack[len(stack) - 1].append(c)

        return "".join(stack[0])


testData = [
    {
        "s": "(abcd)",
        "ans": "dcba",
    },
    {
        "s": "(u(love)i)",
        "ans": "iloveu",
    },
    {
        "s": "(ed(et(oc))el)",
        "ans": "leetcode",
    },
]

for data in testData:
    print(data["ans"] == Solution.reverseParentheses(data["s"]))
