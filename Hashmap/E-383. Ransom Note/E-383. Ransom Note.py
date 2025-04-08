class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        map = {}
        for s in magazine:
            map[s] = (map.get(s) or 0) + 1

        for s in ransomNote:
            count = (map.get(s) or 0) - 1
            if count < 0:
                return False
            map[s] = count

        return True


s = Solution()
print(s.canConstruct("aa", "aaab"))
