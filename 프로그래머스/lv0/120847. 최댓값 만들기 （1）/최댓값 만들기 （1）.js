function solution(numbers) {
    var answer = []
    let s = 1
    answer.push(numbers.sort((a,b) => a-b).pop())
    answer.push(numbers.sort((a,b) => a-b).pop())
    for (let i of answer) {
      s *= i 
    }
    return s
}