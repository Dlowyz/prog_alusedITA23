const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 14
let o = 0
rl.question(`mitu poialpoissi? (1-7): `, x => {
    while (o < parseInt(x)){
        o++
        let x = Math.floor(Math.random()*2+1)
        i -= x
        console.log(x);
        
    } 
     
  console.log("Lumivalgekesele jäi "+i)
  rl.close();
    
  
});