
function solution(input) {
  const lines = input.trim().split('\n');
  const n = parseInt(lines[0]);
  const points = [];

  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].split(' ').map(Number); 
    points.push([x, y]);
  }

  // 정렬
  points.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]  // x 좌표 비교
    }
    return a[1] - b[1];  // y 좌표 비교
  })

  return points.map(point => point.join(' ')).join('\n');
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));