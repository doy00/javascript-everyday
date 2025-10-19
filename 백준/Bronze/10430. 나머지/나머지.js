function solution(input) {
  const [a, b, c] = input.trim().split(' ').map(Number);

  const answer1 = (a + b)%c;
  const answer2 = ((a%c)+(b%c))%c;
  const answer3 = (a*b)%c;
  const answer4 = ((a%c) * (b%c))%c;
  const result = [answer1, answer2, answer3, answer4];

  return result.join('\n');
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));