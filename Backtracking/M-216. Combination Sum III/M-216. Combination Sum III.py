from typing import List


class Solution:
    @classmethod
    def combinationSum3(cls, k: int, n: int) -> List[List[int]]:
        if k > n:
            return []

        combinations = []
        Solution.backtrack(k, n, combinations, 1, [])
        return combinations

    @classmethod
    def backtrack(
        cls,
        k: int,
        rem_target: int,
        combinations: List[List[int]],
        cur_idx: int,
        candidates: list[int],
    ):
        if len(candidates) > k:
            return
        if len(candidates) == k and rem_target == 0:
            combinations.append(candidates.copy())
            return

        for candidate in range(cur_idx, 10):
            updated_rem_target = rem_target - candidate
            if updated_rem_target < 0:
                break
            candidates.append(candidate)
            Solution.backtrack(
                k, updated_rem_target, combinations, candidate + 1, candidates
            )
            candidates.pop()


testData = [
    {
        "k": 3,
        "n": 7,
        "ans": [[1, 2, 4]],
    },
    {
        "k": 3,
        "n": 9,
        "ans": [
            [1, 2, 6],
            [1, 3, 5],
            [2, 3, 4],
        ],
    },
    {
        "k": 4,
        "n": 1,
        "ans": [],
    },
    {
        "k": 2,
        "n": 18,
        "ans": [],
    },
    {
        "k": 9,
        "n": 45,
        "ans": [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
    },
]

for data in testData:
    print(data["ans"] == Solution.combinationSum3(data["k"], data["n"]))
