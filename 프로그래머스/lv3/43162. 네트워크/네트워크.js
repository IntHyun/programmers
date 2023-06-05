function dfs(computers, visited, node) {
  visited[node] = true;

  for (let i = 0; i < computers.length; i++) {
    if (computers[node][i] === 1 && !visited[i]) {
      dfs(computers, visited, i);
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++;
    }
  }

  return answer;
}