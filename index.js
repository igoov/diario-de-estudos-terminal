const materias = [];

const readline = require('node:readline'); // Função de entrada e saída de dados

const rl = readline.createInterface({
    input: process.stdin, // Entrada do teclado
    output: process.stdout, // Saída do terminal
});

function menu() {
    console.log("=========================");
    console.log("DIARIO DE ESTUDOS");
    console.log("=========================");
    console.log("1 - Adicionar materias");
    console.log("2 - Listar materias");
    console.log("3 - Pesquisar materias");
    console.log("4 - Calcular o total de horas");
    console.log("5 - Sair\n");

    rl.question(`Escolha uma opcao: `, opcao => {

        switch (opcao) {

            case "1":
                console.clear();

                rl.question("Materia: ", materia => {

                    rl.question("Horas estudadas (em h): ", horas_estudadas => {

                        const Vhoras_estudadas = horas_estudadas;

                        console.log("-------------------------");
                        console.log("Qual a dificuldade:");
                        console.log("Escolha: 1 - facil");
                        console.log("Escolha: 2 - medio");
                        console.log("Escolha: 3 - dificil");

                        rl.question("=> ", dificuldade => {

                            switch (dificuldade) {

                                case "1":
                                    const facil = 1;
                                    dificuldade = facil;
                                    console.log("-------------------------");
                                    break;

                                case "2":
                                    const medio = 2;
                                    dificuldade = medio;
                                    console.log("-------------------------");
                                    break;

                                case "3":
                                    const dificil = 3;
                                    dificuldade = dificil;
                                    console.log("-------------------------");
                                    break;
                            }

                            console.log("Observacao");
                            console.log("1 - Sim");
                            console.log("2 - Nao");

                            rl.question("=> ", obs => {

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
                                            console.log("-------------------------");
                                            console.log("Observação e materia armazenada com sucesso!");
                                            console.log("-------------------------");

                                            menu();
                                        });

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

                                        break;
                                }
                            });
                        });
                    });
                });

                break;


            case "2":

                console.clear();

                for (const materia of materias) {

                    console.log("Matéria:", materia.nome);
                    console.log("Horas:", materia.horas);
                    console.log("Dificuldade:", materia.dificuldade);
                    console.log("Observação:", materia.observacao);
                    console.log("-------------------------");
                }

                rl.question("Aperte 1 para voltar: ", voltar => {

                    switch (voltar) {

                        case "1":
                            console.clear();
                            menu();
                            break;

                        default:
                            break;
                    }
                });

                break;


            case "3":

                console.clear();

                rl.question("Digite a materia que deseja pesquisar: ", pesquisa => {

                    let encontrada = false;

                    for (const materia of materias) {

                        if (materia.nome == pesquisa) {

                            console.log("-------------------------");
                            console.log("Matéria:", materia.nome);
                            console.log("Horas:", materia.horas);
                            console.log("Dificuldade:", materia.dificuldade);
                            console.log("Observação:", materia.observacao);
                            console.log("-------------------------");

                            encontrada = true;
                        }
                    }

                    if (!encontrada) {
                        console.log("Materia nao encontrada.");
                    }

                    rl.question("Aperte 1 para voltar: ", voltar => {

                        switch (voltar) {

                            case "1":
                                console.clear();
                                menu();
                                break;

                            default:
                                break;
                        }
                    });
                });

                break;


            case "4":

                console.clear();

                let totalHoras = 0;

                for (const materia of materias) {

                    totalHoras += Number(materia.horas);
                }

                console.log("Total de horas estudadas:", totalHoras);

                rl.question("Aperte 1 para voltar: ", voltar => {

                    switch (voltar) {

                        case "1":
                            console.clear();
                            menu();
                            break;

                        default:
                            break;
                    }
                });

                break;


            case "5":

                rl.close();

                break;


            default:
                break;
        }
    });
}

menu();
