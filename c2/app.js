let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = ' Jogo do Numero Secreto';
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {  
exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1','Você Acertou!');
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou o número secreto em ${tentativa} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
    if ( chute < numeroSecreto) {
    exibirTextoNaTela('p','numero secreto é maior');
     } else {
    exibirTextoNaTela('p','numero secreto é menor');
     }
}  tentativa++;  
limparCampo();
}
function gerarNumeroAleatorio() {
let numeroLimite = 10;
let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

if (quantidadeDeNumerosSorteados == numeroLimite) { 
    listaDeNumerosSorteados = [];
}

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}
   function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
   }

   function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
   }