class Solution:
    @classmethod
    def compress(self, chars: list[str]) -> int:
        l, r = 0, 0

        while r < len(chars):
            cur_char = chars[r]
            count = 0

            # find the end position of char_char
            while r < len(chars) and cur_char == chars[r]:
                r += 1
                count += 1

            # add current char
            chars[l] = cur_char
            l += 1

            # add count
            if count > 1:
                for digit in str(count):
                    chars[l] = digit
                    l += 1

        return l


testData = [
    {
        "chars": ["a", "a", "b", "b", "c", "c", "c"],
        "ans": 6,
    },
    {
        "chars": ["a"],
        "ans": 1,
    },
    {
        "chars": ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
        "ans": 4,
    },
]

for data in testData:
    print(data["ans"] == Solution.compress(data["chars"]))
