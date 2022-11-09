function solution(n) {
    let arr = new Array(n)
    let arr2 = arr.fill(0).map((_,index) => index + 1 )
    let arr3 = []
    for(let i = 1; i <= arr2.length; i++) {
    for(let k = 2; k < i; k++) {
        if(i % k === 0) {
            arr3.push(i)
        }
    }
}

let set = new Set(arr3)
return set.size
}