function solution(my_string) {
    var answer = 0;
    
    for (let item of my_string) {
    if(!(isNaN(Number(item)))) {
        answer += Number(item)
    }
}
    
    return answer;
}