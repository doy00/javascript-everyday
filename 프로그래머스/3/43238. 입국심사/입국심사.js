// n: 입국심사를 기다리는 사람 수
// times: 각 심사관이 한명을 심사하는데 걸리는 시간

function solution(n, times) {
    // 이분 탐색 범위 설정
    let left = 1; // 최소 시간
    let right = Math.max(...times) * n; // 최대 시간 = 가장 느린 심사관이 모든 사람을 심사할 때
    
    // 특정 시간 T 안에 n명을 심사할 수 있는지 확인하는 함수
    function isPossible(time) {
        let totalPeople = 0;
        
        for (let i = 0; i < times.length; i++) {
            totalPeople += Math.floor(time / times[i]);
            // 이미 n명 이상 처리 가능하면 더 계산할 필요 없음
            if (totalPeople >= n) return true;
        }
        
        return totalPeople >= n;
    }
    
    // 이분 탐색으로 최소 시간 찾기
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (isPossible(mid)) {
            right = mid; // 가능하면 right 범위를 줄임
        } else {
            left = mid + 1; // 불가능하면 mid 범위를 늘려 (mid+1)부터 다시 탐색
        }
    }
    
    return left;
}