function solution(my_string) {
    var str = my_string;
    let arr = []
    
    for(let i of str) {
    if(i.toUpperCase() !== i) {
        arr.push(i.toUpperCase())
    }
    if(i.toLowerCase() !== i) {
        arr.push(i.toLowerCase())
    }
}
    return arr.join('')
    

}