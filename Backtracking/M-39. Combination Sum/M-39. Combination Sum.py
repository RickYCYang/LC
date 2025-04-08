from typing import List


class Solution:
    @classmethod
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        def backtracking(cur_idx, rem_target, cur_candidates: list[int]):
            if rem_target == 0:
                result.append(cur_candidates.copy())
                return

            if rem_target < 0:
                return

            for i in range(cur_idx, len(candidates)):
                cur_candidates.append(candidates[i])
                backtracking(i, rem_target - candidates[i], cur_candidates)
                cur_candidates.pop()

        backtracking(0, target, [])

        return result


test_data = [
    {
        "candidates": [2, 3, 6, 7],
        "target": 7,
        "ans": [[2, 2, 3], [7]],
    },
    {
        "candidates": [2, 3, 5],
        "target": 8,
        "ans": [
            [2, 2, 2, 2],
            [2, 3, 3],
            [3, 5],
        ],
    },
    {
        "candidates": [2],
        "target": 1,
        "ans": [],
    },
]

for data in test_data:
    print(
        data["ans"] == Solution.combinationSum(
            data["candidates"], data["target"])
    )
