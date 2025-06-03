function solution(numbers) {
    numSet = new Set();  // 중복 제거
    const visited = new Array(numbers.length).fill(false);  // 이미 사용한 숫자는 제거
    
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;  // 1은 소수가 아님
        if (num === 2) return true;  // 2는 소수
        if (num % 2 === 0) return false;  // 2로 나눠지면 소수가 아님
        
        // n보다 작은 모든 자연수로 나누어 떨어지는지 확인해야함
        // 제곱근까지만 확인하면 됨
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // DFS로 모든 숫자 조합 생성
    function dfs(currentNum) {
        // 현재 숫자가 유효하면 Set에 추가
        if (currentNum !== '') {    
            const num = parseInt(currentNum);
            numSet.add(num);
        }
        
        // 각 자릿수를 하나씩 추가해보며 재귀 탐색
        for (let i = 0; i < numbers.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(currentNum + numbers[i]);
                visited[i] = false; // 백트래킹
            }
        }
    }
    
    dfs('');
    
    // Set에 있는 모든 숫자 중 소수 개수 세기
    let primeCount = 0;
    for (let num of numSet) {
        if (isPrime(num)) {
            primeCount++;
        }
    }
    return primeCount;
}