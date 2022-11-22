function solution(my_string) {
    var answer = my_string.split('');
    let arr = []
    for (let item of answer) {   
    arr.push(item.toLowerCase())
        
}
    let arr2 = arr.sort().join('')
    
    return arr2;
}