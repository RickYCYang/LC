class Solution:
    @classmethod
    def isPalindrome(self, x: int) -> bool:
        reverse = 0
        orig_x = x

        while x > 0:
            reverse = reverse * 10 + x % 10
            x //= 10

        return reverse == orig_x


test_data = [
    {
        "x": 121,
        "ans": True,
    },
    {
        "x": -121,
        "ans": False,
    },
    {
        "x": 10,
        "ans": False,
    },
]

for data in test_data:
    print(data["ans"] == Solution.isPalindrome(data["x"]))
