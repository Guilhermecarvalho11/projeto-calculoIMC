function pulaLinha(){
    document.write("<br></br>")
}

function mostra (frase){
    document.write(frase);
    pulaLinha();
}

var altura = prompt("INFORME SUA ALTURA");
var peso = prompt("INFORME SEU PESO");
var idade = prompt("INFORME SUA IDADE");
var nome = prompt("E POR ULTIMO, INFORME SEU NOME");

var totalImc = peso / (altura * altura);
    if( totalImc <= 18.4){
    mostra("o seu IMC é: " + totalImc);
    mostra(nome + "," + " Voce esta com índice de magreza, procure um médico");
    } if ( totalImc >= 19.5){
        if(totalImc <= 24.5){
    mostra("o seu IMC é: " + totalImc);
    mostra("Parabéns" + "," + nome + "." + " Você está saudavél!");
    }} if( totalImc >= 24.6){
    mostra("o seu IMC é: " + totalImc);
    mostra( nome + "," + "você está com sobrepeso, procure um especialista!")
        }
    


