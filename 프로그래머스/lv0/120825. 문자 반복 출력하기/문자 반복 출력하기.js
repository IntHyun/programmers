function solution(my_string, n) {
    var arr = [];
    var answer = ''
    for (let item of my_string){
        arr.push(item.repeat(n))
    }
    answer = arr.join('')

    
    return answer
}