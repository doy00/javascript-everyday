function solution(participant, completion) {
    const myMap = new Map;
    // 1. 참가자들을 세어서 저장
    for (const name of participant) {
        myMap.set(name, (myMap.get(name) || 0) + 1);
    }
    // 2. 완주자들을 뺌
    for (const name of completion) {
        myMap.set(name, myMap.get(name) - 1);
    }
    // 3. 0이 아닌 값을 가진 사람이 미완주자
    for (const [name, value] of myMap) {
        if (value > 0) {
            return name;
        }
    }
    
        
    return answer;
}



// for는 데이터를 순회하거나 특정 연산을 수행할 때 사용하며, Map은 key-value를 보다 효율적으로 관리/검색할 때 사용
// 해시 맵은 일반적으로 평균 O(1)의 시간 복잡도를 가짐
// Map은 for...of나 forEach 메서드를 사용해 효율적으로 순회할 수 있다.