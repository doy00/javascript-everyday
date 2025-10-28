function solution(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);  // 수열의 크기 n
  const numbers = lines[1].split(' ').map(Number);  // 칠판에 적은 수 N개 배열
  const m = parseInt(lines[2]);  // 질문의 개수 m
  
  const dp = Array.from({length: n}, () => Array(n).fill(false));

  // 길이가 1일 때
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // 길이가 2일 때
  for (let i = 0; i < n-1; i++) { 
    if (numbers[i] === numbers[i+1]) {
      dp[i][i+1] = true;
    }
  }

  // 길이가 3 이상일 때
  for (let length = 3; length <= n; length++) {
    for (let start = 0; start <= n - length; start++) {
      const end = start + length - 1;

      if (numbers[start] === numbers[end] && dp[start+1][end-1]) {
        dp[start][end] = true;
      }
    }
  }

  // 질문 처리
  const result = [];
  for (let i = 3; i < 3 + m; i++) {
    const [s, e] = lines[i].split(' ').map(Number);
    result.push(dp[s-1][e-1] ? 1 : 0); 
  }

  return result.join('\n');
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));