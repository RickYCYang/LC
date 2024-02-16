import math


class Solution:
    @classmethod
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        min_speed, max_speed = 1, max(piles)
        best_speed = max_speed

        def calc_needed_time(speed: int):
            ttl_time = 0
            for pile in piles:
                ttl_time += math.ceil(pile / speed)
            return ttl_time

        while min_speed <= max_speed:
            speed = (min_speed + max_speed) // 2
            needed_time = calc_needed_time(speed)
            if needed_time <= h:
                best_speed = speed
                max_speed = speed - 1
            else:
                min_speed = speed + 1
        return best_speed


testData = [
    {
        "piles": [3, 6, 7, 11],
        "h": 8,
        "ans": 4,
    },
    {
        "piles": [30, 11, 23, 4, 20],
        "h": 5,
        "ans": 30,
    },
    {
        "piles": [30, 11, 23, 4, 20],
        "h": 6,
        "ans": 23,
    },
]

for data in testData:
    print(data["ans"] == Solution.minEatingSpeed(data["piles"], data["h"]))
