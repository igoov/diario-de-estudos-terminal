console.log ("=========================");
console.log ("DIARIO DE ESTUDOS"); 
console.log ("========================="); 
console.log ("1 - Adicionar materias"); 
console.log ("2 - Listar materias"); 
console.log ("3 - Pesquisar materias"); 
console.log ("4 - Calcular o total de horas"); 
console.log ("5 - Sair\n"); 

const readline = require('node:readline'); //funcao da entrada e saida de dados e cria uma vez, utilizadno o rl.question consegue digitar de boa

const rl = readline.createInterface({
  input: process.stdin, //input é a entrada, e process.stdin biblioteca do teclado 
  output: process.stdout, //output é a saida, process.stdout biblioteca de saida do terminak
});

rl.question(`Escolha uma opcao: 
`, opcao => {
  
    switch (opcao) {
        case "1":
            
            rl.question("Materia: ", materia => {
                
                console.log("teste");
            });

            break;
    
        case "2":

            break;

        case "3":

            break;
            
        case "4":

            break;

        case "5":

            rl.close();
            
            break
        default:
            break;
    }

});


