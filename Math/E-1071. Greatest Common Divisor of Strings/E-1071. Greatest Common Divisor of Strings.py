class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""

        return str1[: Solution.gcd(len(str1), len(str2))]

    def gcd(self, num1: int, num2: int) -> int:
        if not num2:
            return num1
        return Solution.gcd(num2, num1 % num2)
