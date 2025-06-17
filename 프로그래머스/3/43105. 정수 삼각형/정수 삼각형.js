/**
각 숫자가 꼭대기라고 생각하면 Bottom-up 방식이 효율적
부분의 최적해를 구하면 전체의 최적해를 구할수 있음
현재까지 거쳐간 숫자의 최대 합 = 현재값 + 아래 두 경로중 최대값
1. i, j 위치에서 바닥까지 최대 합: dp[i][j]
2. 종료 조건: 마지막행에 도달했을때 dp[n-1][j] = triangle[n-1][j]
3. 점화식(현재값 + 아래 두 경로중 최대값): triangle[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1]) 
*/

function solution(triangle) {
    const depth = triangle.length;
    
    // dp 테이블 초기화
    const dp = Array.from(Array(depth), () => Array(depth).fill(0));
    
    // dp 테이블의 맨 아래 행 (depth-1) 초기화💥 
    for (let i =0; i < depth; i++) {
        dp[depth-1][i] = triangle[depth-1][i];
    }
    
    // 아래에서 위로 점화식 적용
    for (let i = depth-2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 점화식
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]) 
        }
    }
    
    return triangle[0][0];
}