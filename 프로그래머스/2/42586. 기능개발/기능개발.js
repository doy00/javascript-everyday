function solution(progresses, speeds) {
    // "뒤의 기능은 앞의 기능이 배포될 때 함께 배포되어야 한다" = "앞의 기능이 뒤의 기능보다 먼저 완료되어야 한다"
    // 각기능의 배포예정일을 미리 구했다가 배포일이 되었을 때 몇개의 작업이 완료되었는지 보는 방법
    
    var answer = [];
    
    // 각 기능 완료까지 필요한 일수 계산
    const days = progresses.map((progress, i) => {
        const remaining = 100 - progress;  // 남은 작업량
        return Math.ceil(remaining / speeds[i])
    });
    
    console.log('각 기능별 완료 일수:', days);

    // 💥 배포 그룹 만들기
    let i = 0;
    while (i < days.length) {
        let count = 1;  // 현재 기능 포함
        let currentDay = days[i];  // 현재 배포일
        
        // 현재 배포일까지 완료되는 뒤의 기능들 찾기
        while (i + count < days.length && days[i + count] <= currentDay) {
            count++;
        }
        
        answer.push(count);
        i += count;  // 다음 배포 그룹으로 이동
    }
    return answer;
}