const novosAlunos = ["Samuel", "Giovane", "Catarina"];
const darBoasVindas = (nomeAluno)=>{
    console.log(`Seja Bem Vindo ${nomeAluno}`);
}
for (const aluno of novosAlunos){
    darBoasVindas(aluno);
}