function solution(my_string) {
    var answer = '';
    let arr = my_string.split('')
    
    for (let item of arr) {
    if(!(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u')){
       answer += item 
    }
}
        return answer;
}
    
    

