function solution(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);
  const numbers = lines[1].split(' ').map(Number);

  const dp = Array.from({length: n}, () => Array(21).fill(0n));  // dp[i][j] = i번째 숫자까지 사용, 현재값이 j인 경우의 수

  const resultNum = numbers[n-1];

  // 초기화
  dp[0][numbers[0]] = 1n;

  for (let i = 1; i < n - 1; i++) {
    for (let prev = 0; prev <= 20; prev++) {
      if (dp[i-1][prev] > 0n) {
        // +
        let next = prev + numbers[i];
        if (next >= 0 && next <= 20) {
          dp[i][next] += dp[i-1][prev];
        }

        // -
        next = prev - numbers[i];
        if (next >= 0 && next <= 20) {
          dp[i][next] += dp[i-1][prev];
        }
      }
    }
  }

  return dp[n-2][resultNum].toString();
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));