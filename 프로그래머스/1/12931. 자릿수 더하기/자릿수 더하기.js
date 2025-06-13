function solution(n)
{
    const N = String(n);
    const arrayOfN = N.split('');
    let sum = 0;
    for (let i = 0; i < arrayOfN.length; i++) {
        sum += Number(arrayOfN[i]);
    }
    
    return sum;
}