function solution(num_list) {
    var answer = [];
    let s = 0
    let k = 0
    for(i of num_list) {
        if(i % 2 ===0) {
            s += 1
        } else if(i % 2 ===1) {
            k += 1
        }
    }
    answer.push(s)
    answer.push(k)
    return answer;
}