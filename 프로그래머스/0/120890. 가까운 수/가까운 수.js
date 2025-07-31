function solution(array, n) {
    let diff = Infinity;
    let result = 0;
    array.sort((a, b) => a - b);
    console.log(array)
    for (let number of array) {
        if (Math.abs(n - number) < diff) {
            diff = Math.abs(n - number)
            result = number
        }
    }
    return result;
}