class Solution:
    def romanToInt(self, s: str) -> int:
        roman_map = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        i = 0
        ans = 0
        while (i < len(s)):
            if (i == len(s) - 1):
                ans += roman_map[s[i]]
                break
            if (roman_map[s[i + 1]] > roman_map[s[i]]):
                ans += roman_map[s[i + 1]] - roman_map[s[i]]
                i = i + 1
            else:
                ans += roman_map[s[i]]
            i = i + 1

        return ans
