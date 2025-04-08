class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        position = 0
        cur_tank, ttl_tank = 0, 0
        for i in range(len(gas)):
            cur_tank += gas[i] - cost[i]
            ttl_tank += gas[i] - cost[i]

            if cur_tank < 0:
                cur_tank = 0
                position = i + 1

        return position if ttl_tank >= 0 else -1
