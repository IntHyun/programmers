function solution(n) {
    var answer = Number.isInteger(Math.sqrt(n))
    if(answer) {
        return 1
    } else {
        return 2
    }
}