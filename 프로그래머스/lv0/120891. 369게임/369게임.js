function solution(order) {
    var answer = 0;
    
    for(let i of String(order)) {
        if (i === '3' || i === '6' || i === '9') {
            answer += 1
        }
    }
    
    return answer;
}