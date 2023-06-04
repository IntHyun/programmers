    function solution(numbers, target) {
      let length = numbers.length
      let x = 0

      function bfs(count, sum) {
        if (count === length) {
          if (sum === target) {
            x += 1
          }
          return
        }

        bfs(count + 1, sum + numbers[count])
        bfs(count + 1, sum - numbers[count])
      }

      bfs(0, 0)
        
        return x
        
    
    }