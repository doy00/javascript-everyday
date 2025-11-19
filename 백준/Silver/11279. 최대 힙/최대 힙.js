/*
week25 자료구조 - 최대 힙(https://www.acmicpc.net/problem/11279)
배열에 자연수 x를 넣는다.
배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.
프로그램은 처음에 비어있는 배열에서 시작하게 된다.
*/

class MaxHeap {
  constructor() {
    this.heap = [null];  // 0번 인덱스는 null로 채워서 사용하지 않음 - 1부터 인덱스 시작
  }
  // 0-based: parent = (i-1)/2, left = 2*i+1, right = 2*i+2 (복잡)
  // 1-based: 부모인덱스 = i/2, 왼쪽자식 = 2*i, 오른쪽자식 = 2*i+1 (간단)

  push(value) {
    this.heap.push(value);  // 배열 마지막에 새값 추가
    this.bubbleUp();        // 힙 속성 복구(아래에서 위로 교환)
  }

  pop() {
    if (this.heap.length === 1) return 0;   // 힙이 비어있을때= 인덱스 0의 null만 존재할때
    if (this.heap.length === 2) return this.heap.pop();  // 원소가 1개만 있을때

    const max = this.heap[1];  // 첫번째 최대값 max에 저장해놓고
    this.heap[1] = this.heap.pop();  // 마지막 원소를 최대값 자리로 이동
    this.bubbleDown();        // 버블다운 힙속성 복구(위에서 아래로 교환)
    return max;     // 저장했던 max 값 반환
  }

  // 힙의 마지막 원소를 올바른 위치로 올림 (아래에서 위로 교환)
  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index / 2);  // 부모 노드의 인덱스

    // 1. parentIndex가 1보다 클때 = 맨위에 아직 도달하지 않았을 때,
    // 2. 자식이 부모보다 커서 위치가 잘못됐을때 반복
    while (parentIndex >= 1 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] =  [this.heap[parentIndex], this.heap[index]];  // 두값 교환(구조분해할당)

      // 인덱스 갱신: 교환 후 현재 위치는 부모의 위치
      index = parentIndex;
      parentIndex = Math.floor(index / 2);  // 새로운 부모 인덱스 계산
    }
  }

  bubbleDown() {
    let index = 1;  // 인덱스 1(루트)에서 시작
    const length = this.heap.length;

    // while문에서 왼쪽 자식이 있는동안 반복 <- 완전이진트리 특성상 왼쪽 자식이 없으면 오른쪽 자식도 없기때문
    while (index * 2 < length) {  // 왼쪽 자식 index * 2
      let leftChild = index * 2;
      let rightChild = index * 2 + 1;
      let largerChild = leftChild;

      // 두 자식 중 더 큰 값을 가진 자식 선택
      // 오른쪽 자식이 존재하고 왼쪽보다 더 크면
      if (rightChild < length && this.heap[rightChild] > this.heap[leftChild]) {
        largerChild = rightChild;  // largerchild에 저장
      }

      // ✅ 수정: largerChild가 유효한지 다시 확인 (사실 while 조건으로 보장되지만 명시적으로)
      // if (largerChild >= length) break;  // 추가 안전장치
      
      // 부모가 자식보다 크거나 같으면 종료
      if (this.heap[index] >= this.heap[largerChild]) break;

      // 교환
      [this.heap[index], this.heap[largerChild]] = 
        [this.heap[largerChild], this.heap[index]];
      index = largerChild;
    }
  }
}

function solution(input) {
  const lines = input.trim().split('\n');
  const N = parseInt(lines[0]);
  const heap = new MaxHeap();
  const result = [];

  for (let i = 1; i <= N; i++) {
    const x = parseInt(lines[i]);

    if (x === 0) {
      result.push(heap.pop());
    } else {
      heap.push(x);
    }
  }

  return result.join('\n');
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input1.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));