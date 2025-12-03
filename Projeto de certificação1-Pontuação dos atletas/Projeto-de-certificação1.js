function mediaAtleta(atletas){
 return atletas.map(atleta => {
   let notasOrdenadas = atleta.notas.slice().sort((a,b) => a- b); //gera uma copia do array e ordena do menor pro maior
   let notasComputadas = notasOrdenadas.slice(1, -1);		  // corta a menor nota e a maior
   let soma = notasComputadas.reduce((acc, nota)=> (acc + nota) ,0);  // soma as notas dos atletas
   let media = soma / notasComputadas.length;
   return `
  Atleta: ${atleta.nome}
  Notas Originais: ${atleta.notas}
  Media: ${media}
  `
 });
  
}


let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
console.log(mediaAtleta(atletas))