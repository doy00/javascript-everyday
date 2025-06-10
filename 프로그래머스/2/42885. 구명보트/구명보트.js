function solution(people, limit) {
    // 
    people.sort((a, b) => a - b);
    let count = 0;
    
    //
    let i = 0;  // 가장 가벼운 사람 인덱스
    let j = people.length - 1;  // 가장 무거운 사람 인덱스
    
    while (i <= j) {
        // 가장 가벼운 사람과 가장 무거운 사람을 함께 보트에 태움
        if (people[i] + people[j] <= limit) {
            i++;
        }
        
        // 무거운 사람만 태울 수 있으면 무거운 사람만 태움
        j--;
        count++
    }
    return count;
}