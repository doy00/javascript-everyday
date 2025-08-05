
function solution(input) {
  const lines = input.trim().split('\n');
  const [N, S] = lines[0].split(' ').map(Number);
  const numbers = lines[1].split(' ').map(Number);
  
  let count = 0;
  
  function recursive(index, currentSum, selectedCount) {
    // 기저 조건 - 모든 원소를 모두 확인했을 때
    if (index === N) {
      // 선택한 원소가 1개 이상이고, 합이 S와 같으면 카운트
      if (selectedCount > 0 && currentSum === S) {
        count++;
      }
      return;
    }
    
    // 현재 원소를 선택하지 않는 경우
    recursive(index + 1, currentSum, selectedCount);
    
    // 현재 원소를 선택하는 경우
    recursive(index + 1, currentSum + numbers[index], selectedCount + 1);
  }
  
  recursive(0, 0, 0);
  return count;
}

// 백준 제출용 코드
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString();

console.log(solution(input));