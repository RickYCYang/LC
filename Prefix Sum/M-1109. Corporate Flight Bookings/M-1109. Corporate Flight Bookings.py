class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        result = [0] * (n + 1)

        for l, r, seats in bookings:
            result[l - 1] += seats
            result[r] -= seats

        result.pop()
        prev = result[0]

        for i in range(1, n):
            prev = result[i] = result[i] + prev

        return result
