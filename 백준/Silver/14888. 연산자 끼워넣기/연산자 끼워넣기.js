// 브루트포스 - 연산자 끼워넣기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
.readFileSync(filePath)
.toString()
.trim()
.split("\n")
.map(v => v.split(' ').map(Number));  // input = [[3], [3, 4, 5], [1, 0, 1, 0]] (숫자 배열의 배열)

const [[N], numbers, operators] = input;

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

// 연산자 배열 생성
const calculator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a < 0 ? -Math.floor(-a / b) : Math.floor(a / b)
];

function dfs(count, result) {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  }

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 0) continue;

    operators[i]--;
    dfs(count + 1, calculator[i](result, numbers[count+1]));
    operators[i]++;
  }
}

dfs(0, numbers[0]);

console.log(max ? max : 0);
console.log(min ? min : 0);
// console.log(max);
// console.log(min);