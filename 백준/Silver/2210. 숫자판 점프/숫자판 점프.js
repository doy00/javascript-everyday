
function solution(input) {
  const board = input.trim().split('\n').map(line => line.split(' ').map(Number));

  const result = new Set();

  // 4방향 이동
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y, depth, number) {
    if (depth === 6) {
      result.add(number);
      return;
    }

    // 이동
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        // 다음 칸의 숫자를 붙여서 재귀 호출
        dfs(nx, ny, depth +1, number + board[nx][ny]);
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(i, j, 1, String(board[i][j]));
    }
  }

  return result.size;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));