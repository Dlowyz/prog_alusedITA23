const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 0
let porg = 0
rl.question(`mitu ringi?: `, x => {
    while (i < parseInt(x)){
        i++
        if (i%2 == 0){
            porg += i
        } 
        
        
    } 
    console.log("Porgandeid = "+porg);
  
  rl.close();
    
  
});