class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index / 2);

    while (parentIndex >= 1 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = 
        [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
  }

  bubbleDown() {
    let index = 1;
    const length = this.heap.length;

    while (index * 2 < length) {  // 왼쪽 자식이 있는지 확인
      let leftChild = index * 2;
      let rightChild = index * 2 + 1;
      let largerChild = leftChild;

      // 오른쪽 자식이 존재하고 더 크면
      if (rightChild < length && this.heap[rightChild] > this.heap[leftChild]) {
        largerChild = rightChild;
      }

      // ✅ 수정: largerChild가 유효한지 다시 확인 (사실 while 조건으로 보장되지만 명시적으로)
      if (largerChild >= length) break;  // 추가 안전장치
      
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