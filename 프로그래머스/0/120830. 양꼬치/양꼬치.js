function solution(n, k) {
    const totalPrice = 12000 * n + 2000 * (k - Math.floor(n/10))
    return totalPrice;
}