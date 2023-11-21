class Solution:
    def findRepeatedDnaSequences(self, s: str) -> list[str]:
        map = {}
        result = []

        for i in range(len(s) - 9):
            substr = s[i : i + 10]
            count = (map.get(substr) or 0) + 1
            map[substr] = count

            if count == 2:
                result.append(substr)

        return result
