function isValidSudoku(board: string[][]): boolean {
  const rowCache = new Array(9).fill(null).map((_) => new Set());
  const colCache = new Array(9).fill(null).map((_) => new Set());
  const boxCache = new Array(9).fill(null).map((_) => new Set());

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const cell = board[row][col];
      if (cell === '.') continue;

      if (rowCache[row].has(cell)) return false;
      if (colCache[col].has(cell)) return false;
      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      if (boxCache[boxIndex].has(cell)) return false;

      rowCache[row].add(cell);
      colCache[col].add(cell);
      boxCache[boxIndex].add(cell);
    }
  }
  return true;
}

const testData = [
  {
    matrix: [
      ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ],
    ans: true,
  },
  {
    matrix: [
      ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ],
    ans: false,
  },
];

for (const data of testData) {
  console.log(data.ans === isValidSudoku(data.matrix));
}

// 05/19/2022
// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function (board) {
//   const rowSanityChkMap = createMap();
//   const colSanityChkMap = createMap();
//   const areaSanityChkMap = createMap();

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       const num = board[i][j];
//       if (num === ".") continue;
//       const rowNum = i + 1;
//       const colNum = j + 1;
//       const areaNum = Math.ceil(colNum / 3) + Math.floor((rowNum - 1) / 3) * 3;
//       if (!sanityCheck(num, rowSanityChkMap, rowNum)) return false;
//       if (!sanityCheck(num, colSanityChkMap, colNum)) return false;
//       if (!sanityCheck(num, areaSanityChkMap, areaNum)) return false;
//     }
//   }
//   return true;
// };

// /* create new map with 1 to 9 key, and each key's initial value = 0 */
// function createMap() {
//   const map = new Map();
//   /* expect to have the following map
//    * map : {1 => {1: 0, 2: 0, ...}, 2 => {} ...}
//    */
//   let obj = {};
//   for (let i = 1; i <= 9; i++) {
//     obj = { ...obj, [i.toString()]: 0 };
//   }
//   for (let i = 1; i <= 9; i++) {
//     map.set(i.toString(), new Map(Object.entries(obj)));
//   }
//   return map;
// }

// /* if the key appear over twice, return false to present sanity check fail.
//  * Otherwise, return true
//  */
// function sanityCheck(num, sanityChkMap, key) {
//   key = key.toString();
//   const currCnt = sanityChkMap.get(key).get(num) + 1;
//   if (currCnt >= 2) return false;
//   else {
//     sanityChkMap.get(key).set(num, currCnt);
//     return true;
//   }
// }
