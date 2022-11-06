function solution(n) {
    let k = n.toString().split('')
    let sum = 0
    for(let i of k) {
        sum += parseInt(i)
    }
    return sum
}