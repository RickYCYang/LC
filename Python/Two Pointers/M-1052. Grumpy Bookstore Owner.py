class Solution:
    def maxSatisfied(
        self, customers: List[int], grumpy: List[int], minutes: int
    ) -> int:
        init_satisfied = 0
        for i in range(len(customers)):
            if grumpy[i] == 1:
                continue
            init_satisfied += customers[i]
            customers[i] = 0

        current, max_satisfied = 0, 0
        l, r = 0, 0
        while r < len(customers):
            current += customers[r]
            if r - l + 1 >= minutes:
                max_satisfied = max(max_satisfied, current)
                current -= customers[l]
                l += 1
            r += 1
        return init_satisfied + max_satisfied
