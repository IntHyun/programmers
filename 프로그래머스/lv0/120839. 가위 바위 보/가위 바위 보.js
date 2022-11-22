function solution(rsp) {
    var answer = '';
    var str = rsp
    for (let item of str) {
    switch(item) {
        case '2':
            answer += '0'
            break;
        case '0':
            answer += '5'
            break;
        case '5':
            answer += '2'
            break;
    }
}
    
    return answer;
}