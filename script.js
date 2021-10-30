const calcular = document.getElementById('calcular')
function imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')
    if (altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        var classificacao = '';
        if (valorIMC < 17){
            classificacao = 'muito abaixo do peso.';
        }else if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso normal.';
        }else if (valorIMC < 30){
            classificacao = 'acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com Obesidade Grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III.';
        }
        resultado.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}
calcular.addEventListener('click', imc)