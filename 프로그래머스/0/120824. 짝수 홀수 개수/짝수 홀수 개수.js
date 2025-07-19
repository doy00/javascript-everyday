function solution(num_list) {
    let count = [0,0];
    for (num of num_list) {
        if (num % 2 === 0) {
        count[0] += 1  
        } else {
            count[1] +=1;
        }
    }
        return count;
    
}