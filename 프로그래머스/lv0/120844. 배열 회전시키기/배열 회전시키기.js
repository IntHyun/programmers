function solution(numbers, direction) {
  if (direction === "left") {
    // 배열의 첫 번째 원소를 맨 뒤로 이동
    const first = numbers.shift();
    numbers.push(first);
  } else if (direction === "right") {
    // 배열의 마지막 원소를 맨 앞으로 이동
    const last = numbers.pop();
    numbers.unshift(last);
  }
  return numbers;
}