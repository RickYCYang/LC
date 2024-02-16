class Solution:
    @classmethod
    def findCircleNum(self, isConnected: list[list[int]]) -> int:
        n = len(isConnected)
        visited = [False for _ in range(n)]
        provinces = 0

        def dfs(city: int, isConnected: list[list[int]], visited: list[bool]) -> None:
            visited[city] = True
            for i in range(len(isConnected)):
                if isConnected[city][i] and city != i and not visited[i]:
                    dfs(i, isConnected, visited)

        for i in range(n):
            if not visited[i]:
                provinces += 1
                dfs(i, isConnected, visited)

        return provinces


testData = [
    {
        "isConnected": [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1],
        ],
        "ans": 2,
    },
    {
        "isConnected": [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
        ],
        "ans": 3,
    },
    {
        "isConnected": [
            [1, 0, 0, 1],
            [0, 1, 1, 0],
            [0, 1, 1, 1],
            [1, 0, 1, 1],
        ],
        "ans": 1,
    },
]

for data in testData:
    print(data["ans"] == Solution.findCircleNum(data["isConnected"]))
