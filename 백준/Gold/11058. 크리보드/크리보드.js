
function solution(input) {
  const N = Number(input);
  const dp = Array(N + 1).fill(0);

  // i번 버튼을 누를때
  // i = 현재 버튼 누른 횟수
  // j = 복사를 시작할 시점 (j번 누른 후의 상태)
  for (let i = 1; i <= N; i++) {
    dp[i] = dp[i-1] + 1;  // A를 출력하는 경우

    // 과거시점 j에서 복붙 시작 - Ctrl-A, Ctrl-C, Ctrl-V 버튼을 누르는 경우
    for (let j = i - 3; j >= 1; j--) {
      // dp[i] 갱신
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }

  return dp[N];
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));