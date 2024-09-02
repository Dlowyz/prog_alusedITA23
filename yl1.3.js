const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`alus?`, alus => {
    rl.question('astendaja?', astendaja =>{ 
  console.log(alus**astendaja);
  rl.close();
    }) 
  
});
