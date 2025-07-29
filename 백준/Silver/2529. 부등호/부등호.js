
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = parseInt(input[0]);
const inequality = input[1].split(' ');

let max = String(Number.MIN_SAFE_INTEGER);
let min = String(Number.MAX_SAFE_INTEGER);
let visited = Array(10).fill(false);

function backtrack(currentNumber, selectedCount) {
    // 기저 조건: k+1개 숫자를 모두 선택했을 때
    if (selectedCount === k + 1) {
        // 최댓값/최솟값 갱신
        if (parseInt(currentNumber) > parseInt(max)) max = currentNumber;
        if (parseInt(currentNumber) < parseInt(min)) min = currentNumber;
        return;
    }
    
    // 0~9까지 모든 숫자 시도
    for (let digit = 0; digit < 10; digit++) {
        if (!visited[digit]) { // 아직 사용하지 않은 숫자만
            // 부등호 조건 확인 (첫 번째 숫자는 조건 검사 생략)
            if (selectedCount === 0 || 
                (inequality[selectedCount - 1] === '<' && currentNumber[selectedCount - 1] < digit.toString()) ||
                (inequality[selectedCount - 1] === '>' && currentNumber[selectedCount - 1] > digit.toString())) {
                
                // 백트래킹 과정
                visited[digit] = true;                          // 숫자 사용 표시
                backtrack(currentNumber + digit, selectedCount + 1); // 재귀 호출
                visited[digit] = false;                         // 사용 표시 해제
            }
        }
    }
}

// 모든 숫자(0~9)를 시작점으로 하여 탐색
for (let startDigit = 0; startDigit < 10; startDigit++) {
    visited[startDigit] = true;
    backtrack(startDigit.toString(), 1);
    visited[startDigit] = false;
}

console.log(max);
console.log(min);