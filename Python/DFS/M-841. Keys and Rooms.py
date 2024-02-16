class Solution:
    @classmethod
    def canVisitAllRooms(self, rooms: list[list[int]]) -> bool:
        keys = set([0])

        def dfs(room: int) -> None:
            for key in rooms[room]:
                if key in keys:
                    continue
                keys.add(key)
                dfs(key)

        dfs(0)
        return len(keys) == len(rooms)


testData = [
    {
        "rooms": [[1], [2], [3], []],
        "ans": True,
    },
    {
        "rooms": [[1, 3], [3, 0, 1], [2], [0]],
        "ans": False,
    },
]

for data in testData:
    print(data["ans"] == Solution.canVisitAllRooms(data["rooms"]))
