let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
// let input = ['1 2'];

let line = input[0].split(" ");

function solution(line) {
    let a = parseInt(line[0]); // 1
    let b = parseInt(line[1]); // 2
    let count = a + b;
    return count;
}

console.log(solution(line));