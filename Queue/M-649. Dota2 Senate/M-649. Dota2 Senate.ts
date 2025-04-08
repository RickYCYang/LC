function predictPartyVictory(senate) {
  const radiants: number[] = [];
  const dires: number[] = [];
  const n = senate.length;
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') radiants.push(i);
    else dires.push(i);
  }
  while (radiants.length && dires.length) {
    if (radiants[0] < dires[0]) radiants.push(n + radiants[0]);
    else dires.push(n + dires[0]);
    radiants.shift();
    dires.shift();
  }
  return radiants.length > 0 ? 'Radiant' : 'Dire';
}

const testData = [
  {
    senate: 'RD',
    ans: 'Radiant',
  },
  {
    senate: 'RDD',
    ans: 'Dire',
  },
];

for (const data of testData) {
  console.log(data['ans'] === predictPartyVictory(data['senate']));
}
