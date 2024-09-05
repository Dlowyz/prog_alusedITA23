const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 0
rl.question(`mitu korda rollid?: `, x => {
    while (i < parseInt(x)){
        i++
        console.log(Math.floor(Math.random()*6+1));
        
    } 
     
  
  rl.close();
    
  
});