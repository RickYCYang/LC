class Solution:
    @classmethod
    def reverse(self, x: int) -> int:
        sign = 1
        if x < 0:
            x = x * -1
            sign = -1

        ans = 0
        while x != 0:
            ans = ans * 10 + (x % 10)
            x = x // 10

        ans = ans * sign
        if ans > pow(2, 31) - 1 or ans < pow(-2, 31):
            return 0

        return ans


test_data = [
    {
        "x": 123,
        "ans": 321,
    },
    {
        "x": -123,
        "ans": -321,
    },
    {
        "x": 120,
        "ans": 21,
    },
    {
        "x": 900000,
        "ans": 9,
    },
]

for data in test_data:
    print(data["ans"] == Solution.reverse(data["x"]))
