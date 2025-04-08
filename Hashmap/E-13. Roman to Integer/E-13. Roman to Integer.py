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
        i, result, n = 0, 0, len(s)
        while i < n:
            if i == n - 1:
                result += roman_map[s[i]]
            elif roman_map[s[i + 1]] > roman_map[s[i]]:
                result += roman_map[s[i + 1]] - roman_map[s[i]]
                i += 1
            else:
                result += roman_map[s[i]]
            i += 1
        return result
