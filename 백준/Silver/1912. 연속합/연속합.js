
function solution(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);
  const numbers = lines[1].split(' ').map(Number);

  let currentSum = numbers[0];
  let result = numbers[0];

  for (let i = 1; i < n; i++) {
    currentSum = Math.max(currentSum + numbers[i], numbers[i]);
    result = Math.max(result, currentSum);
  }

  return result;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));