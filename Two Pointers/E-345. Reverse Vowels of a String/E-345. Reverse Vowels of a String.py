class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = {"a", "e", "i", "o", "u"}

        def is_vowel(char: str) -> bool:
            return char.lower() in vowels

        arr = list(s)
        l, r = 0, len(arr) - 1

        while l < r:
            if is_vowel(arr[l]) and is_vowel(arr[r]):
                arr[l], arr[r] = arr[r], arr[l]
                l += 1
                r -= 1
            elif is_vowel(arr[l]):
                r -= 1
            else:
                l += 1

        return "".join(arr)
