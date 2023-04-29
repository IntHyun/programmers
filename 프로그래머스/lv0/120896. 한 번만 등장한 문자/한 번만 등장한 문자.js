function solution(s) {
  let res = [];
  for (let t of s) if (s.indexOf(t) === s.lastIndexOf(t)) res.push(t);
  return res.sort().join('');
}