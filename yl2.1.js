const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Temperatuur? `, nimi => {
     
    
        

    
  console.log(nimi);
  if (parseFloat(nimi) > 4.0) {
    console.log("Jäätumis ohtu pole!")

  } else if (parseFloat(nimi) < 4.0){
    console.log("Jäätumis oht on!")

  } 
  rl.close();
     

});