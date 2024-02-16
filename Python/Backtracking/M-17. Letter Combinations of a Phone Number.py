class Solution:
    @classmethod
    def letterCombinations(cls, digits: str):
        if len(digits) == 0:
            return []

        letter_map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        combinations = []
        Solution.backtrack(digits, letter_map, combinations, "")
        return combinations

    @classmethod
    def backtrack(
        cls, digits: str, letter_map: dict, combinations: list[str], letters: str
    ):
        if len(letters) == len(digits):
            combinations.append(letters)
            return

        position = len(letters)
        for char in letter_map.get(digits[position]):
            Solution.backtrack(digits, letter_map, combinations, letters + char)


test_data = [
    {
        "digits": "23",
        "ans": ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
    {
        "digits": "",
        "ans": [],
    },
    {
        "digits": "2",
        "ans": ["a", "b", "c"],
    },
]

for data in test_data:
    print((data["ans"]) == Solution.letterCombinations(data["digits"]))
