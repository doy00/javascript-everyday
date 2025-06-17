function solution(N, number) {
    // N이 한번만 사용됐을 때
    if (N === number) return 1;
    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        // N을 i번 연속으로 사용한 숫자
        const repeated = Number(String(N).repeat(i));
        dp[i].add(repeated);
        
        // i번 -> j번과 (i-j)번으로 분할
        for (let j = 1; j < i; j++) {
            for (let a of dp[j]) {
                for (let b of dp[i-j]) {
                    // 사칙연산으로 새로운 숫자들 생성
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(b - a);
                    dp[i].add(a * b);
                    if (b !== 0) dp[i].add(Math.floor(a / b));
                    if (a !== 0) dp[i].add(Math.floor(b / a));
                }
            }
        }
        // 목표 숫자를 찾으면 즉시 반환
        if (dp[i].has(number)) return i;
    }
    return -1;
}