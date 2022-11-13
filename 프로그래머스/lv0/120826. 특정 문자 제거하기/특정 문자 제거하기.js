function solution(my_string, letter) {
    var answer = ''
    for (let item of my_string) {
    if(item !== letter){
        answer += item
    }
    answer.toString()
}
    return answer;
}