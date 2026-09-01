const materias = [];

const readline = require('node:readline'); //funcao da entrada e saida de dados e cria uma vez, utilizadno o rl.question consegue digitar de boa

    const rl = readline.createInterface({
    input: process.stdin, //input é a entrada, e process.stdin biblioteca do teclado 
    output: process.stdout, //output é a saida, process.stdout biblioteca de saida do terminak
});

function menu() {
            console.log ("=========================");
            console.log ("DIARIO DE ESTUDOS"); 
            console.log ("========================="); 
            console.log ("1 - Adicionar materias"); 
            console.log ("2 - Listar materias"); 
            console.log ("3 - Pesquisar materias"); 
            console.log ("4 - Calcular o total de horas"); 
            console.log ("5 - Sair\n"); 

            rl.question(`Escolha uma opcao: `, opcao => {
            
                switch (opcao) {
                    case "1":
                        console.clear();

                        rl.question("Materia: ", materia => {
                            
                            rl.question("Horas estudadas (em h): ", horas_estudadas => {

                                const Vhoras_estudadas = horas_estudadas;

                                    console.log("-------------------------")
                                    console.log ("Qual a dificuldade:");                    
                                    console.log ("Escolha: 1 - facil");
                                    console.log ("Escolha: 2 - medio");
                                    console.log ("Escolha: 3 - dificil");

                                        rl.question("=> ", dificuldade => {

                                            switch (dificuldade) {
                                                case "1":
                        
                                                    const facil = 1;
                                                    dificuldade = facil;
                                                    console.log ("-------------------------");

                                                    break;
                                            
                                                case "2":

                                                    const medio = 2;

                                                    dificuldade = medio;
                                                    console.log ("-------------------------");

                                                    break;
                                                
                                                case "3":

                                                    const dificil = 3;
                                                    dificuldade = dificil;
                                                    console.log ("-------------------------");

                                                    break;

                                            }      

                                                console.log("Observacao");
                                                console.log("1 - Sim");
                                                console.log("2 - Nao");

                                                rl.question("=> ", obs =>{

                                                    switch (obs) {
                                                        case "1":
                                                            rl.question("Digite: ", escrita => {

                                                                materias.push({
                                                                    nome: materia,
                                                                    horas: horas_estudadas,
                                                                    dificuldade: dificuldade,
                                                                    observacao: escrita
                                                                });

                                                                console.clear();
                                                                console.log ("-------------------------");
                                                                console.log("Observação e materia armazenada com sucesso!")
                                                                console.log ("-------------------------");
                                                                menu();
                                                                
                                                            })
                                                            break;
                                                        
                                                        case "2": 
                                                            
                                                            materias.push({
                                                                nome: materia,
                                                                horas: horas_estudadas,
                                                                dificuldade: dificuldade,
                                                                observacao: "Nenhuma"
                                                            });
    

                                                            console.clear();
                                                                console.log("-------------------------");
                                                                console.log("Matéria armazenada com sucesso!");
                                                                console.log("-------------------------");

                                                            menu();
                                                    }
                                                });

                                        });         
                            })
                        });


                        break;
                
                    case "2":

                        console.clear();

                        for (const materia of materias){

                                console.log("Matéria:", materia.nome);
                                console.log("Horas:", materia.horas);
                                console.log("Dificuldade:", materia.dificuldade);
                                console.log("Observação:", materia.observacao);
                                console.log("-------------------------");

                        }
                        rl.question("Aperte 1 para voltar: ", voltar =>{

                        switch (voltar) {
                            case "1":
                                
                                console.clear();
                                menu();
                        
                            default:
                                break;
                        }
                    });

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
        }
menu ();