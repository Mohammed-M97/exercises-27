// Draw stairs
function drawStairs(n) {
    if (n > 1){ 
        let str = ''
        for (let i = 1; i <n; i++){
          str += (`I\n${'\xa0'.repeat(i)}`)
        }
        return str + 'I';
      } else {
        return 'I';
      }
}

console.log(drawStairs(1));
