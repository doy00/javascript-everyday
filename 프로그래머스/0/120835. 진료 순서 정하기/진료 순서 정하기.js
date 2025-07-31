function solution(emergency) {
    let order = emergency.slice().sort((a, b) => b - a); // slice()로 깊은 복사
    return emergency.map(v => order.indexOf(v) + 1);
}