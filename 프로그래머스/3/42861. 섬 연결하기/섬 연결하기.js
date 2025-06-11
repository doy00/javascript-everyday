// Union Find 구현
// 부모 노드 찾는 함수
function find(parent, x) {
    if (parent[x] !== x) {
        parent[x] = find(parent, parent[x]);
    }
    return parent[x];
}

// 두 부모노드를 합치는 함수
function union(parent, x, y) {
    const rootX = find(parent, x);
    const rootY = find(parent, y);

    // 부모 노드가 이미 같다면 사이클 발생
    if (rootX === rootY) {
        console.log(`[${x}, ${y}]에서 사이클이 발생했습니다`);
        return false;
    }

    // 다르면 합치기
    parent[rootY] = rootX;
    return true;
}

function solution(n, costs) {
    // 1. costs 기준으로 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    console.log("오름차순 정렬:", costs);

    // 2. Union-Find로 사이클 판별 전 초기화 = 자기 자신을 부모로 가지도록 함
    const parent = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }

    // 3. 가장 저렴한 다리부터 하나씩 확인
    let totalCost = 0;
    let edgeCount = 0;

    for (const [island1, island2, cost] of costs) {
        // 사이클이 발생하지 않으면 선택
        if (union(parent, island1, island2)) {
            totalCost += cost;
            edgeCount++;

            // 다리가 n-1개가 되면 종료
            if (edgeCount === n - 1) break;
        }
    }

    return totalCost;
}