function solution(my_string) {
    let strNum = my_string
    let garbage = []
    let sortNum = []

    for (const i of strNum) {
        if(isNaN(parseInt(i))) {
            garbage.push(i)
        } else {
            sortNum.push(parseInt(i))
            sortNum.sort((a,b) => a-b)
        }
    }

    return sortNum
}