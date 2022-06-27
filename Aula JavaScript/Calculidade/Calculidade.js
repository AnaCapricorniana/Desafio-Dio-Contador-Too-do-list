function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Icaro',
	idade: 23,
};

const pessoa2 = {
	nome: 'Ana',
	idade: 27,
};

const animalzinho = {
	nome: 'Alucard',
	idade: 100,
};

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(animalzinho, [4]));