    function solution(s) {
      let answer = ""

      let stringToArray = s.split(" ")
      let loop = stringToArray.length

      let arr = []

      for (let i = 0; i < loop; i++) {
        arr.push(Math.min.apply(null, stringToArray))
        arr.push(Math.max.apply(null, stringToArray))
        return arr.join(" ")
      }
    }