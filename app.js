/*function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); */
  
    let lista = [];
    let numeroLimite = 10;
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;
function exiberTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemIncial(){
    exiberTexto('h1', 'Jogo do Numero Secreto');
    exiberTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemIncial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exiberTexto('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = 'Você acertou com ' + tentativas + ' ' + palavraTentativa;
        exiberTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exiberTexto('p', 'O numero é menor que o seu chute.');
        } else{
            exiberTexto('p', 'O numero é maior do que o seu chute.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeElementos = lista.length;
    if(quantidadeElementos == numeroLimite){
        lista = [];
    }
    if(lista.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        lista.push(numeroEscolhido);
        console.log(lista);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exiberTexto('h1', 'Jogo do Numero Secreto');
    exiberTexto('p', 'Escolha um número entre 1 e 10');
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 
}
