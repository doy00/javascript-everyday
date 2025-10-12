function solution(input) {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  
  // 그래프 초기화 (1번부터 N번까지 사용)
  const graph = Array.from({ length: N + 1 }, () => new Set());
  
  // 간선 입력 처리 (양방향)
  for (let i = 1; i <= M; i++) {  // ← 수정: i는 1부터 M까지
    const [A, B] = lines[i].split(' ').map(Number);
    graph[A].add(B);
    graph[B].add(A);
  }
  
  // 각 사람의 친구 수 미리 계산
  const degree = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    degree[i] = graph[i].size;
  }
  
  let minSum = Infinity;
  let found = false;
  
  // 4. 핵심 포인트
  // - a < b < c 순서를 유지하여 중복 방지
  // - 삼각형 조건: a-b, b-c, a-c 모두 연결
  // - 친구 수 계산 시 선택된 3명은 제외 (각자 -2)
  
  // 모든 삼각형 찾기
  for (let a = 1; a <= N; a++) {
    for (const b of graph[a]) {
      if (b <= a) continue;  // 중복 방지: a < b
      
      // a와 b의 공통 친구 c 찾기
      for (const c of graph[a]) {
        if (c <= b) continue;  // 중복 방지: b < c
        if (!graph[b].has(c)) continue;  // b-c 연결 확인
        
        // (a, b, c)는 삼각형을 이룸
        found = true;
        
        // 각자의 외부 친구 수 계산
        // a의 친구 중 b, c 제외 → degree[a] - 2
        // b의 친구 중 a, c 제외 → degree[b] - 2  
        // c의 친구 중 a, b 제외 → degree[c] - 2
        const sum = (degree[a] - 2) + (degree[b] - 2) + (degree[c] - 2);
        minSum = Math.min(minSum, sum);
      }
    }
  }
  
  // 결과 반환
  return found ? minSum : -1;
}

// 백준 제출용 코드
const fs = require('fs');
const path = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, 'input.txt');
const input = fs.readFileSync(filePath).toString();
console.log(solution(input));