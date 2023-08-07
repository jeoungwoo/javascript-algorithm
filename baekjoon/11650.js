// 좌표 정렬하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

let n = Number(input[0]);
let data = [];
for (let i = 1; i <=n; i++) {
    let [x, y] = input[u].split(' ').map(Number);
    data.push([x, y]);
}

function compare (a, b) {
    if(a[0] != b[0]) return a[0] - b[0]; // x 좌표 기준 오름차순
    else return a[1] - b[1];             // x 좌표가 같을 시 y 좌표 기준 오름차순
}
data.sort(compare); // 정렬 수행

let answer = "";
for (let point of data) {
    answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);