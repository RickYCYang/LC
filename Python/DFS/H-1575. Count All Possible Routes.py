class Solution:
    @classmethod
    def countRoutes(self, locations, start, finish, fuel):
        n = len(locations)
        cache = [[-1 for j in range(fuel + 1)] for i in range(n)]
        return self.dfs(locations, start, finish, fuel, cache)

    @classmethod
    def dfs(self, locations, current, finish, rem_fuel, cache):
        if (cache[current][rem_fuel] != -1):
            return cache[current][rem_fuel]

        need_fuel = abs(locations[current] - locations[finish])
        if need_fuel > rem_fuel:
            cache[current][rem_fuel] = 0
            return 0

        n = len(locations)
        mod = 1000000007
        ttl_routes = 1 if current == finish else 0
        for i in range(n):
            if i == current:
                continue
            need_fuel = abs(locations[current] - locations[i])
            if rem_fuel >= need_fuel:
                ttl_routes += self.dfs(locations, i,
                                       finish, rem_fuel - need_fuel, cache)
                ttl_routes %= mod

        cache[current][rem_fuel] = ttl_routes
        return ttl_routes


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
