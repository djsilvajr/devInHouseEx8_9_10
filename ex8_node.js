const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  

readline.question('Insira o ano que nasceu' , data1 => {

    let data2 = new Date().getFullYear()
    let dif = data2 - data1

    console.log(`sua idade é ${dif} ou ${dif - 1}!`);
    readline.close();
});