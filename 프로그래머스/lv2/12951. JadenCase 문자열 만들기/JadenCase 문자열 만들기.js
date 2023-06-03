function solution(s) {
  let answer = [];
  let toArr = s.split(" ");

  for (const item of toArr) {
    let toUpper = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    answer.push(toUpper);
  }

  return answer.join(" ");
}