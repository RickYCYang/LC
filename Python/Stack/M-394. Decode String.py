class Solution:
    @classmethod
    def decodeString(self, s: str) -> str:
        stack = []
        for char in s:
            if char != "]":
                stack.append(char)
                continue

            cur = stack.pop()
            string = ""
            while cur != "[":
                string = cur + string
                cur = stack.pop()

            num = ""
            cur = stack.pop()
            while cur.isnumeric():
                num = cur + num
                cur = stack.pop() if len(stack) > 0 else ""

            if cur:
                stack.append(cur)
            stack.append(string * int(num))
        return "".join(stack)


testData = [
    {
        "s": "3[a]2[bc]",
        "ans": "aaabcbc",
    },
    {
        "s": "3[a2[c]]",
        "ans": "accaccacc",
    },
    {
        "s": "2[abc]3[cd]ef",
        "ans": "abcabccdcdcdef",
    },
    {
        "s": "100[leetcode]",
        "ans": "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode",
    },
]

for data in testData:
    print(data["ans"] == Solution.decodeString(data["s"]))
