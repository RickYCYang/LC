class Solution:
    @classmethod
    def tribonacci(cls, n: int) -> int:
        cache = {}
        return Solution.calc_tribonacci(n, cache)

    @classmethod
    def calc_tribonacci(cls, n: int, cache: dict):
        if n == 0:
            return 0
        if n == 1 or n == 2:
            return 1
        if n in cache:
            return cache.get(n)

        result = (
            Solution.calc_tribonacci(n - 1, cache)
            + Solution.calc_tribonacci(n - 2, cache)
            + Solution.calc_tribonacci(n - 3, cache)
        )
        cache[n] = result
        return result


testData = [
    {"n": 4, "ans": 4},
    {"n": 25, "ans": 1389537},
]

for data in testData:
    print(data["ans"] == Solution.tribonacci(data["n"]))
