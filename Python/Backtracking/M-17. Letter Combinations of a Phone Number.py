
class Solution:
    @classmethod
    def letterCombinations(self, digits: str):
        digits_length = len(digits)
        combinations = []
        if digits_length == 0:
            return combinations

        num_letter_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }
        self.backtrack(
            digits,
            num_letter_map,
            combinations,
            0,
            digits_length,
            ""
        )
        return combinations

    @classmethod
    def backtrack(self, digits, num_letter_map, combinations, current_position, digits_length, current_string):
        if (current_position == digits_length):
            combinations.append(current_string)
            return
        letters = num_letter_map[digits[current_position]]
        for letter in letters:
            self.backtrack(
                digits,
                num_letter_map,
                combinations,
                current_position + 1,
                digits_length,
                current_string + letter
            )


test_data = [
    {
        "digits": '23',
        "ans": ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
    },
    {
        "digits": '',
        "ans": [],
    },
    {
        "digits": '2',
        "ans": ['a', 'b', 'c'],
    },
]

for data in test_data:
    print((data["ans"]) == Solution.letterCombinations(data["digits"]))
