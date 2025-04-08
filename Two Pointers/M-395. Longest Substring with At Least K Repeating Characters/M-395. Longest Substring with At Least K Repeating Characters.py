class Solution:
    @classmethod
    def longestSubstring(self, s: str, k: int) -> int:
        max_unique_char_cnt = len(set(s))
        result = 0

        for allowed_unique_char_cnt in range(1, max_unique_char_cnt + 1):
            freq_k_char_cnt, unique_char_cnt = 0, 0
            left, right = 0, 0
            char_map = {}

            while right < len(s):
                char_right = s[right]
                char_map[char_right] = (char_map.get(char_right) or 0) + 1
                if char_map[char_right] == k:
                    freq_k_char_cnt += 1
                if char_map[char_right] == 1:
                    unique_char_cnt += 1

                while unique_char_cnt > allowed_unique_char_cnt:
                    char_left = s[left]
                    char_map[char_left] = char_map[char_left] - 1
                    if char_map[char_left] == k - 1:
                        freq_k_char_cnt -= 1
                    if char_map[char_left] == 0:
                        unique_char_cnt -= 1
                    left += 1

                if unique_char_cnt == allowed_unique_char_cnt and unique_char_cnt == freq_k_char_cnt:
                    result = max(result, right - left + 1)

                right += 1

        return result


test_data = [
    {
        "s": 'aaabb',
        "k": 3,
        "ans": 3,
    },
    {
        "s": 'ababbc',
        "k": 2,
        "ans": 5,
    },
    {
        "s": 'aaabbb',
        "k": 3,
        "ans": 6,
    },
    {
        "s": 'aaaaaaaaabbbcccccddddd',
        "k": 5,
        "ans": 10,
    },
]

for data in test_data:
    print(data["ans"] == Solution.longestSubstring(data["s"], data["k"]))
