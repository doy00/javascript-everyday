function solution(n) {
    let arr = [];
    for (let i = 0; i < 1000; i++){
        if (i % 3 != 0 && !i.toString().split('').includes('3')) {
            arr.push(i)
        }
    }
    return arr[n-1];
}