const alunos = [
    {
        nome:'Joao',
        nota: 5,
        turma:'1B',
    },
    {
        nome:'Sofia',
        nota: 9,
        turma:'1B',   
    },
    {
        nome:'Paulo',
        nota: 6,
        turma:'2C',
    },
    {
        nome:'Nathalia',
        nota: 3,
        turma:'2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let a = 0; a < arr.length; a++){

        const {nota, nome} = arr[a];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));