from typing import List


class Solution:
    @classmethod
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        result: list[int] = []
        candidates.sort()

        def backtracking(cur_idx: int, rem_target: int, cur_candidates: list[int]):
            if rem_target == 0:
                result.append(cur_candidates.copy())
                return

            if rem_target < 0:
                return

            for i in range(cur_idx, len(candidates)):
                candidate = candidates[i]

                if i > 0 and candidates[i - 1] == candidate:
                    continue

                cur_candidates.append(candidate)
                candidates.remove(candidate)
                backtracking(cur_idx=i,
                             rem_target=rem_target - candidate,
                             cur_candidates=cur_candidates
                             )
                candidates.insert(i, candidate)
                cur_candidates.pop()

        backtracking(cur_idx=0,
                     rem_target=target,
                     cur_candidates=[]
                     )

        return result


test_data = [
    {
        "candidates":  [10, 1, 2, 7, 6, 1, 5],
        "target": 8,
        "ans": [
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ],
    },
    {
        "candidates": [2, 5, 2, 1, 2],
        "target": 5,
        "ans": [[1, 2, 2], [5]],
    },
    {
        "candidates": [2],
        "target": 1,
        "ans": [],
    },
]

for data in test_data:
    print(
        data["ans"] == Solution.combinationSum2(
            data["candidates"], data["target"])
    )
