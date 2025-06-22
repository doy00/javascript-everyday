function solution(s){
    s = s.toLowerCase().split('');
    console.log(s);
    let countP = 0;
    let countY = 0;
    
    for (let char of s) {
        if (char === 'p') {
            countP++;
        } else if (char === 'y') {
            countY++;
        }
    }
    
    if (countP === countY || (countP === 0 && countY === 0)) {
        answer = true;
        } else if (countP !== countY) {
        answer = false;
        }

    return answer;
}