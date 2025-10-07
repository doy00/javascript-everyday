// 바닥장식 - DFS

function solution(input) {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const board = lines.slice(1).map(line => line.trim());

  // 방문 배열 초기화
  let visited = Array(n).fill().map(() => Array(m).fill(false));
  let count = 0;
  
  // DFS 함수 정의
  function dfs(x, y) {
      // 현재 위치 방문 처리
      visited[x][y] = true;
      
      // 현재 문자 확인
      const currentChar = board[x][y];
      
      // 문자에 따라 다음 탐색 방향 결정
      if (currentChar === '-') {
          // '-'는 가로 방향(같은 행)으로만 연결
          // 오른쪽 탐색
          if (y + 1 < m && !visited[x][y + 1] && board[x][y + 1] === '-') {
              dfs(x, y + 1);
          }
          // 왼쪽 탐색
          if (y - 1 >= 0 && !visited[x][y - 1] && board[x][y - 1] === '-') {
              dfs(x, y - 1);
          }
      } else if (currentChar === '|') {
          // '|'는 세로 방향(같은 열)으로만 연결
          // 아래쪽 탐색
          if (x + 1 < n && !visited[x + 1][y] && board[x + 1][y] === '|') {
              dfs(x + 1, y);
          }
          // 위쪽 탐색
          if (x - 1 >= 0 && !visited[x - 1][y] && board[x - 1][y] === '|') {
              dfs(x - 1, y);
          }
      }
  }
  
  // 모든 칸 탐색
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (!visited[i][j]) {
              // DFS 시작
              dfs(i, j);
              // 하나의 연결 컴포넌트(판자) 발견, 개수 증가
              count++;
          }
      }

  }
  
  return count;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));