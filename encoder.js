import { caesarCipher, symbolCipher, reverseCipher } from './encryptors.js';

//Declare the functions to encript and decript the message:
const encodeMessage = (str) => {
    return caesarCipher(reverseCipher(symbolCipher(str)), 3);
};

const decodeMessage = (str) => {
    return symbolCipher(reverseCipher(caesarCipher(str, -3)));
};

//Declare the HTML elements:
var mensagemACriptografar = document.getElementById("mens-a-criptografar");
var mensagemCriptografada = document.getElementById("mens-cripto");
const botaoCriptografar = document.getElementById("cripto-mens");
const botaoDescriptografar = document.getElementById("decript-mens");
var mensRecomendacao = document.getElementById("recomendacao");

//Add event listeners and make the website functional:
botaoCriptografar.addEventListener('click', () => {
    let cipheredMessage = encodeMessage((mensagemACriptografar.value));
    mensagemCriptografada.innerHTML = cipheredMessage;
    mensRecomendacao.style.display = 'block';
});

botaoDescriptografar.addEventListener('click', () => {
    let decipheredMessage = decodeMessage(mensagemACriptografar.value);
    mensagemCriptografada.innerHTML = decipheredMessage;
    mensRecomendacao.innerHTML = 'Mensagem acima descriptografada! 🔓';
    mensRecomendacao.style.display = 'block';
});