import heapq


class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        max_heap = []
        for i, s in enumerate(score):
            heapq.heappush(max_heap, (-s, i))

        rank = 1
        result = [None] * len(score)
        while len(max_heap):
            _, idx = heapq.heappop(max_heap)
            if rank == 1:
                result[idx] = "Gold Medal"
            elif rank == 2:
                result[idx] = "Silver Medal"
            elif rank == 3:
                result[idx] = "Bronze Medal"
            else:
                result[idx] = str(rank)
            rank += 1

        return result
