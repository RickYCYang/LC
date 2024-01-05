class Solution:
    @classmethod
    def largestAltitude(self, gain: list[int]) -> int:
        max_altitude, altitude = 0, 0
        for g in gain:
            altitude += g
            max_altitude = max(max_altitude, altitude)
        return max_altitude


testData = [
    {
        "nums": [-5, 1, 5, 0, -7],
        "ans": 1,
    },
    {
        "nums": [-4, -3, -2, -1, 4, 3, 2],
        "ans": 0,
    },
]

for data in testData:
    print(data["ans"] == Solution.largestAltitude(data["nums"]))
