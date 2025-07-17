function solution(array, height) {
    let count = 0;
    for (i of array) {
        if (i > height) {
            count += 1
        }
    }
    return count;
}