    function solution(A, B) {
      let answer = 0;
      let length = A.length

      let sortA = A.sort((a, b) => a - b)
      let sortB = B.sort((a, b) => b - a)

      for (let i = 0; i < length; i++) {
        answer += sortA.shift() * sortB.shift()
      }

      return answer
    }