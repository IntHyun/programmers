function solution(s1, s2) {
    var answer = 0;
    for (let item of s1) {
    for (let item2 of s2) {
        if(item === item2) {
            answer += 1
        }
    }
}
    
    return answer;
}