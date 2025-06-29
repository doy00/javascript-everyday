function solution(distance, rocks, n) {
    var answer = 0;
    // rocks 정렬 후 출발점과 도착점을 push
    rocks.sort((a, b) => a - b);
    rocks.push(distance);
    
    // 이분 탐색 범위 초기화
    let left = 1;
    let right = distance;
    
    // 이분 탐색 
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // mid를 최소거리로 유지할 때의 결과
        const result = removeRocks(rocks, mid);
        console.log(`최소거리 ${mid} 시도 -> 제거: ${result.removed}개, 실제 치ㅗ소거리: ${result.actualMinDistance}`);
        
        if (result.removed <= n) {
            // 조건 만족: n개 이하로 제거 가능
            answer = result.actualMinDistance; // 실제 달성한 최소거리 저장
            left = mid + 1;  // 더 큰 거리 시도
        } else {
            // 조건 불만족: n개 초과 제거 
            right = mid - 1
        }
    }
    
    
    // 이분탐색 함수: 최소거리 minDistance를 유지하기 위해 제거해야할 바위 개수를 계산
    function removeRocks(rocks, minDistance) {
        let prev = 0;   // 이전 바위 위치
        let removed = 0;    // 제거한 바위 개수
        let actualMinDistance = Infinity;   // 최소거리
        
        for (let i = 0; i < rocks.length; i++) {
            const current = rocks[i];
            const gap = current - prev;  // 현재 구간 거리
            
            if (gap < minDistance) {
                // 거리 부족 -> 현재 바위 제거
                removed++;
            } else {
                // 거리 충분 -> 현재 바위 유지
                prev = current;
                actualMinDistance = Math.min(actualMinDistance, gap);
            }
        }
        return { removed, actualMinDistance };
        
    }
    
    return answer;
}