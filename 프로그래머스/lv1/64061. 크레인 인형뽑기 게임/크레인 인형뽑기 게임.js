    function solution(board, moves) {
      let answer = 0;
      let stack = [];

      moves.forEach((pos) => {
        for (let i = 0; i < board.length; i++) {
          if (board[i][pos - 1] !== 0) {
            let tmp = board[i][pos - 1]
            board[i][pos - 1] = 0
            // stack[stack.length - 1] 은 스택에서의 제일 뒤에있는 원소가 됩니다.
            if (tmp === stack[stack.length - 1]) {
              stack.pop()
              answer += 2
            } else stack.push(tmp)
            break;
          }
        }
      })

      return answer;
    }