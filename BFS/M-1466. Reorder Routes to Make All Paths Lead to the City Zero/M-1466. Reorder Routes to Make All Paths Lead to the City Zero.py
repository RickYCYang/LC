from collections import defaultdict, deque


class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        adj_city_map = defaultdict(set)
        for [from_city, to_city] in connections:
            adj_city_map[from_city].add((to_city, 1))
            adj_city_map[to_city].add((from_city, 0))

        queue = deque([0])
        visited = set([0])
        reorder = 0
        while queue:
            city = queue.popleft()
            for [adj_city, is_connected] in adj_city_map[city]:
                if adj_city not in visited:
                    reorder += is_connected
                    visited.add(adj_city)
                    queue.append(adj_city)
        return reorder


testData = [
    {
        "n": 6,
        "connections": [
            [0, 1],
            [1, 3],
            [2, 3],
            [4, 0],
            [4, 5],
        ],
        "ans": 3,
    },
    {
        "n": 5,
        "connections": [
            [1, 0],
            [1, 2],
            [3, 2],
            [3, 4],
        ],
        "ans": 2,
    },
]

for data in testData:
    print(data["ans"] == Solution.minReorder(data["n"], data["connections"]))
