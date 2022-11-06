function solution(array, height) {
    let s = 0;
    for(const i of array){
        if(i > height){
            s += 1
        }
    }
    return s
}