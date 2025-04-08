class Solution:
    @classmethod
    def minFlips(self, a: int, b: int, c: int) -> int:
        bin_a = list(reversed(bin(a)[2:]))
        bin_b = list(reversed(bin(b)[2:]))
        bin_c = list(reversed(bin(c)[2:]))

        max_len = max(len(bin_a), len(bin_b), len(bin_c))
        flip = 0
        for i in range(max_len):
            num_a = int(bin_a[i]) if i < len(bin_a) else 0
            num_b = int(bin_b[i]) if i < len(bin_b) else 0
            num_c = int(bin_c[i]) if i < len(bin_c) else 0
            if num_a | num_b != num_c:
                flip += 1 + (num_a & num_b)
        return flip


testData = [
    {"a": 2, "b": 6, "c": 5, "ans": 3},
    {"a": 4, "b": 2, "c": 7, "ans": 1},
    {"a": 1, "b": 2, "c": 3, "ans": 0},
    {"a": 8, "b": 3, "c": 5, "ans": 3},
]

for data in testData:
    print(data["ans"] == Solution.minFlips(data["a"], data["b"], data["c"]))
