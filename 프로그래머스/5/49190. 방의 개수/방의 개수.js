function solution(arrows) {
    let answer = 0; // 방의 개수를 저장할 변수

  // 각 방향에 따른 좌표 변화를 저장한 배열
  // prettier-ignore
  const move = [
    [-1, 0], [-1, 1], [0, 1], [1, 1],
    [1, 0], [1, -1], [0, -1], [-1, -1]
  ];

  let vertexVisited = new Map(); // 방문한 정점을 저장할 Map
  let edgeVisited = new Map(); // 방문한 간선을 저장할 Map

  // prettier-ignore
  let x = 0, y = 0; // 현재 위치
  vertexVisited.set(`${x}_${y}`, true); // 시작점을 방문한 것으로 표시

  for (let i = 0; i < arrows.length; i++) {
    for (let j = 0; j < 2; j++) {
      // 대각선 이동을 두 번의 직선 이동으로 나누어 처리
      let nx = x + move[arrows[i]][0]; // 다음 위치의 x 좌표
      let ny = y + move[arrows[i]][1]; // 다음 위치의 y 좌표

      // 다음 위치에 이미 방문했고, 그리고 해당 간선을 아직 방문하지 않았다면
      let isVertexVisited = vertexVisited.has(`${nx}_${ny}`);
      let isEdgeNotVisited = !edgeVisited.has(`${x}_${y}_${nx}_${ny}`);

      if (isVertexVisited && isEdgeNotVisited) {
        answer++; // 방의 개수를 증가
      }

      vertexVisited.set(`${nx}_${ny}`, true); // 다음 위치를 방문한 것으로 표시
      edgeVisited.set(`${x}_${y}_${nx}_${ny}`, true); // 현재 위치에서 다음 위치로 가는 간선을 방문한 것으로 표시
      edgeVisited.set(`${nx}_${ny}_${x}_${y}`, true); // 다음 위치에서 현재 위치로 가는 간선을 방문한 것으로 표시

      x = nx; // 현재 위치를 다음 위치로 이동
      y = ny; // 현재 위치를 다음 위치로 이동
    }
  }

  return answer; // 방의 개수를 반환
}
//     // 8방향 이동 좌표 (0:상, 1:상우, 2:우, 3:하우, 4:하, 5:하좌, 6:좌, 7:상좌)
//     const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//     const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
//     // 방문한 노드와 간선을 저장할 Set
//     const visitedNodes = new Set();
//     const visitedEdges = new Set();
    
//     let currentX = 0;
//     let currentY = 0;
    
//     // 시작점 방문 처리
//     visitedNodes.add(`${currentX},${currentY}`);
    
//     // 각 방향으로 이동하면서 노드와 간선 추가
//     for (let arrow of arrows) {
//         // 다음 좌표 계산
//         const nextX = currentX + dx[arrow];
//         const nextY = currentY + dy[arrow];
        
//         // 간선 문자열 생성 (양방향이므로 정렬해서 일관성 유지)
//         const edge1 = `${currentX},${currentY}-${nextX},${nextY}`;
//         const edge2 = `${nextX},${nextY}-${currentX},${currentY}`;
//         const edgeKey = edge1 < edge2 ? edge1 : edge2;
        
//         // 노드 추가
//         visitedNodes.add(`${nextX},${nextY}`);
        
//         // 간선 추가
//         visitedEdges.add(edgeKey);
        
//         // 현재 위치 업데이트
//         currentX = nextX;
//         currentY = nextY;
//     }
    
//     // 오일러 공식 적용: V - E + F = 2
//     // F = E - V + 2
//     // 방의 개수 = F - 1 (외부 무한 면적 제외)
//     const vertices = visitedNodes.size;
//     const edges = visitedEdges.size;
//     const rooms = edges - vertices + 1;
    
//     return rooms;
// }