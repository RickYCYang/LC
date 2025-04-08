class Solution:
    @classmethod
    def reverseWords(self, s: str) -> str:
        arr = list(filter(lambda char: char != "", s.split(" ")))
        arr.reverse()
        reversed_str = " ".join(arr)

        return reversed_str


testData = [
    {
        "s": "the sky is blue",
        "ans": "blue is sky the",
    },
    {
        "s": "  hello world  ",
        "ans": "world hello",
    },
    {
        "s": "a good   example",
        "ans": "example good a",
    },
]

for data in testData:
    print(data["ans"] == Solution.reverseWords(data["s"]))
