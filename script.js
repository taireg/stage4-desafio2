const estudantes =[ {
  nome: "Aline",
  nota1: 9,
  nota2: 8,
},

{
  nome: "Bia",
  nota1: 10,
  nota2: 9,
},

{
  nome: "Bruno",
  nota1: 7,
  nota2: 9,
},

{
  nome: "Marcelo",
  nota1: 5,
  nota2: 6,
},

{
  nome: "Otto",
  nota1: 6,
  nota2: 6,
},

{
  nome: "Val",
  nota1: 6,
  nota2: 8,
},
]

let aluno;

function calculaMedia(nota1, nota2){
  return (nota1 + nota2) / 2;
}

function validarNota(media){
  if (media >= 7){
    return "\nParabéns, " + aluno.nome + "! Você passou no concurso! :)";
  }else{
    return "\nPoxa " + aluno.nome + " não foi dessa vez, mas continue estudando.";
  }
}
for (let i = 0; i < estudantes.length; i++){
  aluno = estudantes[i];
  let media = calculaMedia(aluno.nota1, aluno.nota2);
  let passou = validarNota(media);
  
  alert("A média do(a) aluno(a) " + aluno.nome + " é: " + media + passou);
};

