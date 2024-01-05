class Solution:
    @classmethod
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False

        word1_map = {}
        word2_map = {}
        for char in word1:
            word1_map[char] = (word1_map.get(char) or 0) + 1
        for char in word2:
            word2_map[char] = (word2_map.get(char) or 0) + 1

        # compare chars
        word1_dist_chars = list(word1_map.keys())
        word2_dist_chars = list(word2_map.keys())
        word1_dist_chars.sort()
        word2_dist_chars.sort()

        if word1_dist_chars != word2_dist_chars:
            return False

        # compare occurrence
        word1_char_cnt = list(word1_map.values())
        word2_char_cnt = list(word2_map.values())
        word1_char_cnt.sort()
        word2_char_cnt.sort()
        return word1_char_cnt == word2_char_cnt


testData = [
    {
        "word1": "abc",
        "word2": "bca",
        "ans": True,
    },
    {
        "word1": "a",
        "word2": "aa",
        "ans": False,
    },
    {
        "word1": "cabbba",
        "word2": "abbccc",
        "ans": True,
    },
]

for data in testData:
    print(data["ans"] == Solution.closeStrings(data["word1"], data["word2"]))
