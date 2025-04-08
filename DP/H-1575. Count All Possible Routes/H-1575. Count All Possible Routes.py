class Solution:
    @classmethod
    def countRoutes(self, locations, start, finish, fuel):
        n = len(locations)
        routes = [[0 for j in range(fuel + 1)] for i in range(n)]
        mod = 1000000007

        for i in range(fuel):
            routes[finish][i] = 1

        for cur in range(fuel + 1):
            for i in range(n):
                for k in range(n):
                    if i == k:
                        continue
                    need = abs(locations[i] - locations[k])
                    if cur >= need:
                        routes[i][cur] += routes[k][cur - need]
                        routes[i][cur] %= mod

        return routes[start][fuel]


test_data = [
    {
        "locations": [2, 3, 6, 8, 4],
        "start": 1,
        "finish": 3,
        "fuel": 5,
        "ans": 4,
    },
    {
        "locations": [4, 3, 1],
        "start": 1,
        "finish": 0,
        "fuel": 6,
        "ans": 5,
    },
    {
        "locations": [5, 2, 1],
        "start": 0,
        "finish": 2,
        "fuel": 3,
        "ans": 0,
    },
]

for data in test_data:
    print(
        data["ans"] == Solution.countRoutes(
            data["locations"], data["start"], data["finish"], data["fuel"])
    )
