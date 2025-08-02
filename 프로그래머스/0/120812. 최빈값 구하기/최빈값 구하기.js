function solution(array) {
    // 1단계: 각 숫자의 개수 세기
    const count = {};
    for (let num of array) {
        count[num] = (count[num] || 0) + 1;
    }
    
    // 2단계: 최대 빈도수 찾기
    const maxCount = Math.max(...Object.values(count));
    
    // 3단계: 최빈값들 찾기
    const modes = [];
    for (let num in count) {
        if (count[num] === maxCount) {
            modes.push(Number(num));
        }
    }
    
    // 4단계: 결과 반환
    return modes.length > 1 ? -1 : modes[0];
}

// 테스트
console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1 (최빈값이 여러 개)
console.log(solution([1])); // 1