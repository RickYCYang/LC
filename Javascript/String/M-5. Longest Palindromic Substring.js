/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    // odd palindrome
    let l = i - 1;
    let r = i + 1;
    let palindrome = getPalindrome(s, l, r);
    if (ans.length < palindrome.length) ans = palindrome;

    // even palindrome
    l = i - 1;
    r = i;
    palindrome = getPalindrome(s, l, r);
    if (ans.length < palindrome.length) ans = palindrome;
  }
  return ans;
};

const getPalindrome = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
};
const testData = [
  {
    s: 'babad',
    ans: 'bab',
  },
  {
    s: 'cbbd',
    ans: 'bb',
  },
  { s: 'aaaa', ans: 'aaaa' },
];

for (const data of testData) {
  console.log(data.ans === longestPalindrome(data.s));
}
