

function solution(m, n, puddles) {
    // dp 배열 초기화
    const dp = Array.from({length: n+1}, () => new Array(m+1).fill(0));

    // 물웅덩이 표시
    for (const [x, y] of puddles) {
        dp[y][x] = -1; // 물웅덩이 표시
    }
    
    // 시작점 표시
    dp[1][1] = 1;

    // DP를 이용한 경로의 개수 계산
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (dp[i][j] === -1) {
                dp[i][j] = 0; // 물웅덩이 -1을 0으로 처리
            } else if (!(i === 1 && j === 1)) {
                // 위에서 + 왼쪽에서
                dp[i][j] = ((dp[i-1][j]) + (dp[i][j-1] || 0)) % 1000000007;
            }
        }
    }
    
    return dp[n][m] ;
}



    //     Array(n + 1).fill(0).map(function() {
    //     return Array(m + 1).fill(0);
    // });