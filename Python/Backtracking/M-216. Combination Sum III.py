from typing import List


class Solution:
    @classmethod
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        result = []

        def backtracking(cur_idx: int, rem_target: int, cur_candidates: list[int]):
            if len(cur_candidates) > k or rem_target < 0:
                return

            if len(cur_candidates) == k and rem_target == 0:
                result.append(cur_candidates.copy())
                return

            for candidate in range(cur_idx, 10):
                if candidate > 9 or candidate > n:
                    return
                cur_candidates.append(candidate)
                backtracking(
                    cur_idx=candidate+1,
                    rem_target=rem_target-candidate,
                    cur_candidates=cur_candidates
                )
                cur_candidates.pop()

        backtracking(1, n, [])
        return result


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
    print(
        data["ans"] == Solution.combinationSum3(data["k"], data["n"])
    )
