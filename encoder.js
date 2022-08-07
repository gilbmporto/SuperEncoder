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
const LoadingBar = document.getElementById('theInsideLoadBar');
const OutterLoadingBar = document.getElementById('theOutsideLoadBar');
var loadingTxt = document.getElementById("loadingTxt");

//A promise function to make the HTML content dynamic:
const modificarElementos = (tempo, func) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(func());
        }, tempo)
    }) 
};

//The main async function make this webapp purpose possible:
const encryptItNow = async () => {
    let firstAction = await modificarElementos(0, () => {
        OutterLoadingBar.style.display = 'block';
    });
    console.log(firstAction);
    let secondAction = await modificarElementos(500, () => {
        LoadingBar.style.width = '100%';
    });
    console.log(secondAction);
    let thirdAction = await modificarElementos(300, () => {
        loadingTxt.innerHTML = 'Loading';
    });
    console.log(thirdAction);
    let fourthAction = await modificarElementos(1300, () => {
        let cipheredMessage = encodeMessage((mensagemACriptografar.value));
        mensagemCriptografada.innerHTML = cipheredMessage;
        mensRecomendacao.style.display = 'block';
    });
    console.log(fourthAction);
    let finalAction = await modificarElementos(200, () => {
        OutterLoadingBar.style.display = 'none';
        LoadingBar.style.width = '0%';
        loadingTxt.innerHTML = '';
    });
    console.log(finalAction);
};

const decryptItNow = async () => {
    let firstAction = await modificarElementos(0, () => {
        OutterLoadingBar.style.display = 'block';
    });
    console.log(firstAction);
    let secondAction = await modificarElementos(500, () => {
        LoadingBar.style.width = '100%';
    });
    console.log(secondAction);
    let thirdAction = await modificarElementos(300, () => {
        loadingTxt.innerHTML = 'Loading';
    });
    console.log(thirdAction);
    let fourthAction = await modificarElementos(1300, () => {
        let decipheredMessage = decodeMessage(mensagemACriptografar.value);
        mensagemCriptografada.innerHTML = decipheredMessage;
        mensRecomendacao.innerHTML = 'Mensagem acima descriptografada! 🔓';
        mensRecomendacao.style.display = 'block';
    });
    console.log(fourthAction);
    let finalAction = await modificarElementos(200, () => {
        OutterLoadingBar.style.display = 'none';
        LoadingBar.style.width = '0%';
        loadingTxt.innerHTML = '';
    });
    console.log(finalAction);
};

botaoCriptografar.addEventListener('click', encryptItNow);
botaoDescriptografar.addEventListener('click', decryptItNow);

/*
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
*/