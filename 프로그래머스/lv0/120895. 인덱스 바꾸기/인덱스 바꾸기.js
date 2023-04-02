function solution(my_string, num1, num2) {
  // 문자열을 배열로 변환하여 인덱스 num1과 num2에 해당하는 문자를 서로 바꿉니다.
  let my_array = my_string.split("");
  let temp = my_array[num1];
  my_array[num1] = my_array[num2];
  my_array[num2] = temp;

  // 바뀐 문자열 배열을 다시 문자열로 변환하여 반환합니다.
  let result = my_array.join("");
  return result;
}