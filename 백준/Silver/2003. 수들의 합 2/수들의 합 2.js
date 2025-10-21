
function solution(input) {
  const [n, m] = input.trim().split('\n')[0].split(' ').map(Number);
  const array = input.trim().split('\n')[1].split(' ').map(Number);

  let count = 0;

  // 이중 for문으로 연속 부분 탐색
  for (let i = 0; i < n; i++) {
    let sum = 0;  // i번째 수부터 j번재 수까지의 합

    // 각 i에 대해 끝 인덱스 j를 i부터 n-1까지 순회
    for (let j = i; j < n; j++) {
      sum += array[j];

      if (sum === m) {
        count++;
      } else if (sum > m) {
        break;
      }
    }
  }
  return count;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input3.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));