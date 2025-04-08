class Solution:
    @classmethod
    def lengthOfLastWord(self, s: str) -> int:
        trim_s = s.strip()
        n = len(trim_s)

        for i in range(n - 1, 0, -1):
            if trim_s[i] == " ":
                return n - i - 1

        return n


testData = [
    {
        "s": "Hello World",
        "ans": 5,
    },
    {
        "s": "   fly me   to   the moon  ",
        "ans": 4,
    },
    {"s": "luffy is still joyboy", "ans": 6},
]

for data in testData:
    print(data["ans"] == Solution.lengthOfLastWord(data["s"]))
