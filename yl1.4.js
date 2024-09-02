const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`nimi?`, nimi => {
    rl.question('Lubatud kiirus?', lubKiirus =>{ 
        rl.question('Tegelik kiirus?', tegKiirus =>{ 

    
  console.log(nimi);
  let trahv = (tegKiirus-lubKiirus)*3
  console.log("Trahv = "+trahv);
  rl.close();
    }) 
}) 
});