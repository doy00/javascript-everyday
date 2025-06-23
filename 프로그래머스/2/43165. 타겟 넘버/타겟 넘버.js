function solution(numbers, target) {
    // var answer = 0;
    
    // DFS 함수
    function dfs(index, currentSum) {
        // 종료 조건: 모든 숫자를 다 사용했을 때
        if (index === numbers.length) {
            // 현재 합계가 타겟과 같으면 경우의 수 증가
            if (currentSum === target) {
                // answer++;
                return 1;
            } else {
                return 0;
            }
        }
        
        // 1. +인 경우
        const add = dfs(index + 1, currentSum + numbers[index]);
        
        // 2. -인 경우
        const remove = dfs(index + 1, currentSum - numbers[index]);
        
        return add + remove;
    }
    // DFS 시작
    return dfs(0, 0);
}
