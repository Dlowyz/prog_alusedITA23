const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 0
rl.question(`mitu korda äratada?: `, x => {
    while (i < parseInt(x)){
        i++
        console.log("Tõuse ja sära!");
        
    } 
     
  
  rl.close();
    
  
});
