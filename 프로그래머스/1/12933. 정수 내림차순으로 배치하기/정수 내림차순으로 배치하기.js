function solution(n) {
    n = n.toString().split('').sort((a, b) => b - a).join('');
    
    var answer = +n;
    return answer;
}