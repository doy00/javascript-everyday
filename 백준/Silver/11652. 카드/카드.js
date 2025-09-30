
function solution(input) {
  const lines = input.trim().split('\n');
  const N = parseInt(lines[0]);
  const map = new Map();
  const numbers = lines.slice(1).map(line => BigInt(line));

  // 각 카드의 개수 저장
  for (let number of numbers) {
    map.set(number, (map.get(number) || 0) + 1);
  }

  // 가장 많이 가진 숫자 찾기
  let max = 0;
  let result = null;

  for (let [number, count] of map) {
    if (count > max || (count === max && number < result)) {
      max = count;
      result = number;
    }
  }
  return result.toString();
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));