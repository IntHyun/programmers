    function solution(s) {
      let answer = []
      let toArr = s.split(" ")

      for (const item of toArr) {
        let test = item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()
        answer.push(test)
      }
        
      return answer.join(" ")
    }