function canVisitAllRooms(rooms: number[][]): boolean {
  const keys = new Set<number>([0]);

  const dfs = (room: number) => {
    for (const key of rooms[room]) {
      if (keys.has(key)) continue;
      keys.add(key);
      dfs(key);
    }
  };

  dfs(0);
  return keys.size === rooms.length;
}

const testData = [
  {
    rooms: [[1], [2], [3], []],
    ans: true,
  },
  {
    rooms: [[1, 3], [3, 0, 1], [2], [0]],
    ans: false,
  },
];

for (const data of testData) {
  console.log(data['ans'] === canVisitAllRooms(data['rooms']));
}
