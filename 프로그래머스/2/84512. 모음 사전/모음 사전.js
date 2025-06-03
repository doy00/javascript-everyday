function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 0;  // 사전 순서
    
    function dfs(current) {
        // 비어있지 않으면 카운트 증가
        if (current.length > 0) {
            count++;
            // 목표단어(word)를 찾으면 현재 순서를 반환
            if (current === word) {
                return count;
            }
        }
        
        // 최대길이 5에 도달했을때 중단
        if (current.length >= 5) {
            return -1;
        }
        
        // 재귀 호출 - 각 문자를 추가해서 다음 단어들 생성
        for (let vowel of vowels) {
            const result = dfs(current + vowel);
            if (result !== -1) {
                return result;
            }
        }
        
        return -1;
    }
    
    return dfs('');
}


// 단어의 길이별로 탐색한 풀이 - count가 누적됨
// function solution(word) {
//     let vowels = ['A', 'E', 'I', 'O', 'U'];
//     let count = 0;
    
//     function dfs (current, maxLength) {
//         // 현재 상태 처리 - 빈 문자열이 아니면 출력
//         if (current.length > 0) {
//             count++;
//             console.log(current)
//             if (current === word) {
//                 return count;
//             }
//         }
        
//         // 최대길이에 도달하면 더이상 생성하지않음
//         if (current.length === maxLength) {
//             return -1;  
//         }
        
//         // 재귀 호출 - 각 문자를 추가해서 다음 단어들 생성
//         for (let vowel of vowels) {
//             const result = dfs(current + vowel, maxLength);
//             if (result !== -1) {
//                 return result;
//             }
//         }
        
//         return -1;
    
//     }
//         // 길이 1부터 5까지 모든 조합 생성
//     for (let length = 1; length <= 5; length++) {
//         const result = dfs('', length);
//         if (result !== -1) {
//             return result;
//         }
//     }
//     return -1;
// }