let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

// 오름차순 정렬 수행
arr.sort(function(a, b) {
    return a - b;
})

// 앞에서부터 k번째 수를 출력
console.log(arr[k - 1]);