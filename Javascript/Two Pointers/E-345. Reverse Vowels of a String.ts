function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const isVowel = (char: string) => vowels.has(char.toLowerCase());
  const arr = s.split('');
  let [l, r] = [0, arr.length - 1];

  while (l < r) {
    if (isVowel(arr[l]) && isVowel(arr[r])) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++, r--;
    } else if (isVowel(arr[l])) r--;
    else l++;
  }

  return arr.join('');
}
const testData = [
  {
    s: 'hello',
    ans: 'holle',
  },
  {
    s: 'leetcode',
    ans: 'leotcede',
  },
  { s: 'a.', ans: 'a.' },
  { s: 'race car', ans: 'race car' },
  {
    s: 'Marge, let\'s "went." I await news telegram.',
    ans: 'Marge, let\'s "went." i awaIt news telegram.',
  },
  {
    s: "u'o;B,vKO\"?,.;?fGI 9;`9T`Z,;iqsn4A.:;'H3s8E9. B4TxfOiB'wvM?q'k:Q`J\"E1T7lo e7c!?glI66?JZh\"6 !C,aK! 1J?f9'`SX4Q!Q4XS`'9f?J1 !Ka,C! 6\"hZJ?66Ilg?!c7e ol7T1E\"J`Q:k'q?Mvw'BiOfxT4B .9E8s3H';:.A4nsqi;,Z`To`;o IGf?;.,?\"OKv,B;o'u",
    ans: "u'o;B,vKO\"?,.;?fGI 9;`9T`Z,;oqsn4o.:;'H3s8i9. B4TxfAEB'wvM?q'k:Q`J\"O1T7li E7c!?glo66?JZh\"6 !C,eK! 1J?f9'`SX4Q!Q4XS`'9f?J1 !KI,C! 6\"hZJ?66alg?!c7a Il7T1e\"J`Q:k'q?Mvw'BoEfxT4B .9i8s3H';:.O4nsqE;,Z`TA`;i IGf?;.,?\"OKv,B;o'u",
  },
];

for (const data of testData) {
  console.log(data['ans'] === reverseVowels(data['s']));
}
