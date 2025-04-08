
val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
rom = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
]


class Solution:
    @classmethod
    def intToRoman(self, num: int) -> str:
        ans = ""
        for i in range(len(val)):
            while num >= val[i]:
                num -= val[i]
                ans += rom[i]

        return ans


test_data = [
    {
        "num": 58,
        "ans": 'LVIII',
    },
    {
        "num": 3,
        "ans": 'III',
    },
    {"num": 1994, "ans": 'MCMXCIV'},
]

for data in test_data:
    print(data["ans"] == Solution.intToRoman(data["num"]))
