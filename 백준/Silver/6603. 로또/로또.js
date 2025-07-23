let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');  // 제출시


let lineIndex = 0;
let results = [];

while (lineIndex < input.length) {
    const line = input[lineIndex].trim();
    
    if (line === '0') break;
    
    const numbers = line.split(' ').map(Number);
    const k = numbers[0];
    const S = numbers.slice(1);
    
    const combinations = [];
    
    // 브루트포스로 조합 생성
    function generateCombinations(start, current) {
        // 6개를 모두 선택했으면 결과에 추가
        if (current.length === 6) {
            combinations.push(current.join(' '));
            return;
        }
        
        // 남은 자리수보다 선택할 수 있는 수가 적으면 중단
        const remaining = 6 - current.length;
        const available = S.length - start;
        if (available < remaining) {
            return;
        }
        
        // start부터 끝까지 각 수를 선택해보기
        for (let j = start; j < S.length; j++) {
            current.push(S[j]);
            generateCombinations(j + 1, current);
            current.pop();
        }
    }
    
    generateCombinations(0, []);
    
    results.push(combinations.join('\n'));
    lineIndex++;
}
console.log(results.join('\n\n'));
