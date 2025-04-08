class Solution:
    @classmethod
    def findRadius(self, houses: list[int], heaters: list[int]) -> int:
        heaters.sort()
        min_houses_radius = []
        for house in houses:
            min_houses_radius.append(Solution.find_min_distance(house, heaters))
        return max(min_houses_radius)

    @classmethod
    def find_min_distance(self, house: int, heaters: list[int]):
        n = len(heaters)
        l, r = 0, n - 1

        while l <= r:
            mid = (l + r) // 2
            if house >= heaters[mid] and mid + 1 < n and house <= heaters[mid + 1]:
                return min(house - heaters[mid], heaters[mid + 1] - house)

            if house >= heaters[mid]:
                l = mid + 1
            else:
                r = mid - 1

        if l == 0:
            return heaters[0] - house  # house is smaller than all heaters
        if l == n:
            return house - heaters[n - 1]  # house is larger than all heaters


testData = [
    {
        "houses": [1, 2, 3],
        "heaters": [2],
        "ans": 1,
    },
    {
        "houses": [1, 2, 3, 4],
        "heaters": [1, 4],
        "ans": 1,
    },
    {
        "houses": [1, 5],
        "heaters": [2],
        "ans": 3,
    },
]

for data in testData:
    print(data["ans"] == Solution.findRadius(data["houses"], data["heaters"]))
