function solution(polynomial) {
    
    const arr = polynomial.split(' + ')
    const x = arr.filter(v => v.includes('x')).map(v => parseInt(v.replace('x', '')) || 1).reduce((a, c) => a + c, 0)
    const 일반항 = arr.filter(v => !v.includes('x')).reduce((a, c) => a + parseInt(c), 0)
    const answer = [];
    if (x) {
        if (x === 1) {
            answer.push('x')
        } else {
            answer.push(`${x}x`)
        }
    }
    if (일반항) {
        answer.push(일반항)
    } 
    return answer.join(' + ');
}
