class Solution:
    @classmethod
    def longestPalindrome(self, s: str) -> str:
        ans = ""
        for i in range(len(s)):
            # odd palindrome
            l, r = i - 1, i + 1
            palindrome = self.get_palindrome(s, l, r)
            ans = palindrome if len(palindrome) > len(ans) else ans

            # even palindrome
            l, r = i - 1, i
            palindrome = self.get_palindrome(s, l, r)
            ans = palindrome if len(palindrome) > len(ans) else ans

        return ans

    @classmethod
    def get_palindrome(self, s: str, l: int, r: int):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1

        return s[l+1: r]


test_data = [
    {
        "s": 'babad',
        "ans": 'bab',
    },
    {
        "s": 'cbbd',
        "ans": 'bb',
    },
    {"s": 'aaaa', "ans": 'aaaa'},
]

for data in test_data:
    print(data["ans"] == Solution.longestPalindrome(data["s"]))
