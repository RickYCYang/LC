import re


class Solution:
    @classmethod
    def myAtoi(self, s: str) -> int:
        n = len(s)
        idx = 0

        while idx < n and s[idx] == " ":
            idx = idx + 1

        if idx == n:
            return 0

        sign = 1
        if s[idx] == "-":
            sign = -1
            idx = idx + 1
        elif s[idx] == "+":
            idx = idx + 1
        elif not self.is_digit(s[idx]):
            return 0

        ans = 0
        while idx < n and self.is_digit(s[idx]):
            ans = ans * 10 + int(s[idx])
            idx = idx + 1

        ans = ans * sign
        ans = max(min(ans, pow(2, 31) - 1), -pow(2, 31))
        return ans

    @classmethod
    def is_digit(self, s):
        pattern = r'^\d+$'  # This pattern matches strings containing only digits
        return re.match(pattern, s) is not None


test_data = [
    {
        "s": '42',
        "ans": 42,
    },
    {
        "s": '   -42',
        "ans": -42,
    },
    {
        "s": '4193 with words',
        "ans": 4193,
    },
    {
        "s": '',
        "ans": 0,
    },
    {
        "s": " ",
        "ans": 0
    }
]

for data in test_data:
    print(data["ans"] == Solution.myAtoi(data["s"]))
