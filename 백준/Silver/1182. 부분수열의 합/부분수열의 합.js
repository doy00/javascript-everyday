/**
 * 부분수열의 합
 * N개의 정수로 이루어진 수열이 있을 때, 크기가 양수인 부분수열 중에서 그 수열의 원소를 다 더한 값이 S가 되는 경우의 수를 구하는 프로그램을 작성하시오.
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
.readFileSync(filePath)
.toString()
.trim()
.split("\n")

// 수열을 순회하며 원소를 다 더한값이 S가 되는지 확인
// 선택한 원소는 한개이상 N개 이하
  const [N, S] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number);

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

recursive(0, 0, 0)
console.log(count);
