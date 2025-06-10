function solution(n, costs) {
    // 1. 비용 순으로 오름차순 정렬 (그리디의 핵심!)
    costs.sort((a, b) => a[2] - b[2]);
    console.log("오름차순 정렬:", costs);
    
    // 2. Union-Find로 사이클 판별 전 초기화
    // const parent = Array.from({length: n}, (_, i) => i);
    const parent = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i;  // parent[0]=0, parent[1]=1, parent[2]=2, parent[3]=3
    }
    
    
    // 3. 가장 저렴한 다리부터 하나씩 검토
    let totalCost = 0;
    let edgeCount = 0;
    
    for (const [island1, island2, cost] of costs) {
        // 사이클을 만들지 않으면 선택
        if (union(parent, island1, island2)) {
            totalCost += cost;
            edgeCount++;
            
            // n-1개 다리로 모든 섬 연결 완료
            if (edgeCount === n - 1) break;
        }
    }
    
    return totalCost;
}

// Union Find 구현
// 루트 노드 찾기 (경로 압축 최적화)
function find(parent, x) {
    if (parent[x] !== x) {
        parent[x] = find(parent, parent[x]);
    }
    return parent[x];
}

// 두 집합 합치기
function union(parent, x, y) {
    const rootX = find(parent, x);
    const rootY = find(parent, y);
    
    // 이미 같은 집합이면 사이클 발생
    if (rootX === rootY) {
        console.log(`[${x}, ${y}]에서 사이클이 발생했습니다`);
        return false;
    }


    
    // 다른 집합이면 합치기
    parent[rootY] = rootX;
    return true;
}
