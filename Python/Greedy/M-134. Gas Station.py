class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        pos = 0
        cur_tank = 0
        ttl_tank = 0
        for i in range(len(gas)):
            cur_tank += gas[i] - cost[i]
            ttl_tank += gas[i] - cost[i]
            if cur_tank < 0:
                cur_tank = 0
                pos = i + 1

        return pos if ttl_tank >= 0 else -1
