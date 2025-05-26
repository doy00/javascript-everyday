function solution(s)
{
    const stack = [];
    
    for (const c of s) {
        // 왼쪽부터 탐색해 짝을 찾아 제거
        let i = 0;
        if (stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();  // 같은 알파벳이면 제거
        } else {
            stack.push(c);  // 같은 알파벳이 아니면 스택에 현재 문자 추가
        }
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return stack.length === 0 ? 1 : 0;
}