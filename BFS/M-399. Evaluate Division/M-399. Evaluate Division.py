from collections import defaultdict, deque


class Solution:
    @classmethod
    def calcEquation(
        self, equations: list[list[str]], values: list[float], queries: list[list[str]]
    ) -> list[float]:
        div_map = defaultdict(lambda: defaultdict(int))
        for i in range(len(equations)):
            dividend, divisor = equations[i]
            div_map[dividend][divisor] = values[i]
            div_map[divisor][dividend] = 1 / values[i]

        def bfs(dividend: str, divisor: str):
            if dividend not in div_map or divisor not in div_map:
                return -1

            visited = set([dividend])
            queue = deque([[dividend, 1]])
            while queue:
                cur_dividend, product = queue.popleft()
                if cur_dividend == divisor:
                    return product
                cur_divisors = div_map[cur_dividend]
                for cur_divisor, weight in cur_divisors.items():
                    if cur_divisor in visited:
                        continue
                    visited.add(cur_divisor)
                    queue.append([cur_divisor, product * weight])
            return -1

        result = []
        for dividend, divisor in queries:
            result.append(bfs(dividend, divisor))
        return result


testData = [
    {
        "equations": [
            ["a", "b"],
            ["b", "c"],
        ],
        "values": [2.0, 3.0],
        "queries": [
            ["a", "c"],
            ["b", "a"],
            ["a", "e"],
            ["a", "a"],
            ["x", "x"],
        ],
        "ans": [6.0, 0.5, -1.0, 1.0, -1.0],
    },
    {
        "equations": [
            ["a", "b"],
            ["b", "c"],
            ["bc", "cd"],
        ],
        "values": [1.5, 2.5, 5.0],
        "queries": [
            ["a", "c"],
            ["c", "b"],
            ["bc", "cd"],
            ["cd", "bc"],
        ],
        "ans": [3.75, 0.4, 5.0, 0.2],
    },
    {
        "equations": [["a", "b"]],
        "values": [0.5],
        "queries": [
            ["a", "b"],
            ["b", "a"],
            ["a", "c"],
            ["x", "y"],
        ],
        "ans": [0.5, 2.0, -1.0, -1.0],
    },
]

for data in testData:
    print(
        data["ans"]
        == Solution.calcEquation(data["equations"], data["values"], data["queries"])
    )
