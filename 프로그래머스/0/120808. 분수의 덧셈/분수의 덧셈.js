function solution(numer1, denom1, numer2, denom2) {
    // 분수 더하기
    let numerator = numer1*denom2 + denom1*numer2;
    let denominator = denom1 * denom2;
    // 최대공약수
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        } 
        return a;
    }

    let commonDivisor = gcd(numerator, denominator);
    numerator = numerator / commonDivisor;
    denominator = denominator / commonDivisor;
    
    return [numerator, denominator];
    
}