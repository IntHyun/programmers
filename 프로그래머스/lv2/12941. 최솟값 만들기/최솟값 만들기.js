    function solution(A, B) {
      let answer = 0;
      let length = A.length

      let test = A.sort((a, b) => a - b)
      let test2 = B.sort((a, b) => b - a)

      for (let i = 0; i < length; i++) {
        answer += test.shift() * test2.shift()
      }

      return answer
    }