function solution(array, n) {
    let s = 0
    for (let i of array) {
        if (n === i) {
            s += 1
        }
    }
    return s
}