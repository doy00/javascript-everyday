function solution(s){
    // 스택 초기화
    const stack = [];
    
    // stack의 괄호를 순회하며 비교
    for (char of s) {
        // 열린 괄호인 경우 스택에 추가
        if (char === "(") {
            stack.push(char);
        } else {
            // 닫힌 괄호인 경우 마지막 문자를 꺼냄
            const lastChar = stack.pop()
            if (char === ")" && lastChar !== "("
               ){
                return false;
            }
        }
    }
    return stack.length === 0;
}

function solution2(s) {
    // '('의 개수 count
    let count = 0;
    
    for (const char of s) {
        if (char === "(") {
            // 열린 괄호인 경우 카운트 증가
            count++;
        } else if (char === ")") {
            // 닫힌 괄호인 경우 카운트 감소
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}
