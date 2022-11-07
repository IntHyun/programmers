function solution(n) {
let arr = new Array(n).fill(0).map((_ , index) => index + 1).filter(e => e % 2 === 1)
    return arr
}