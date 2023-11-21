class Solution:
    @classmethod
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        needed_chars = {}
        for c in s1:
            needed_chars[c] = (needed_chars.get(c) or 0) + 1

        l, r, required_length = 0, 0, len(s1)
        while r < len(s2):
            if s2[r] in needed_chars:
                if needed_chars[s2[r]] > 0:
                    required_length -= 1
                needed_chars[s2[r]] = needed_chars[s2[r]] - 1

            if required_length == 0:
                return True

            if r - l == len(s1) - 1:
                if s2[l] in needed_chars:
                    if needed_chars[s2[l]] >= 0:
                        required_length += 1
                    needed_chars[s2[l]] += 1
                l += 1

            r += 1

        return False


test_data = [
    {
        "s1": "ab",
        "s2": "aeidbaooo",
        "ans": True,
    },
    {
        "s1": "ab",
        "s2": "eidboaoo",
        "ans": False,
    },
    {"s1": "adc", "s2": "dcda", "ans": True},
]

for data in test_data:
    print(data["ans"] == Solution.checkInclusion(data["s1"], data["s2"]))
