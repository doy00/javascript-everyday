function solution(tickets) {
    tickets.sort();   // 알파벳순 정렬
    const visited = new Array(tickets.length).fill(false);
    // const result = ["ICN"];
    
    // dfs 함수
    function dfs(current, path) {
        // 모든 티켓을 사용했다면 경로 완성 (티켓수 + 1 = 도시 수)
        if (path.length === tickets.length + 1) {
            return path;
        }
        
        // 현재 위치에서 갈수있는 모든 티켓을 알파벳 순으로 시도
        for (let i = 0; i < tickets.length; i++) {
            const [start, end] = tickets[i];
            
            // 아직 사용하지 않은 티켓이고, 현재 위치에서 출발하는 티켓인지 확인
            if (!visited[i] && start === current) {
                visited[i] = true;  // 티켓 사용 표시
                // result.push(end);
                
                // 재귀 호출
                const result = dfs(end, [...path, end]);
                
                // 경로를 완성했다면 반환
                if (result) {
                    return result;
                }
                
                visited[i] = false;   // 백트래킹
            }
        }
        // 유효한 경로를 찾지 못하면 null
        return null;
    }
    
    return dfs("ICN", ["ICN"]);
}