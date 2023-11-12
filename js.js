
function imc(altura, massa){

    const alt = altura
    const peso = massa
       
    const indiceMC = peso/(alt * alt)
    
    return indiceMC
}

function resultadoImc(indiceMC){
    switch (true) {
        case indiceMC > 40:
            return "Obesidade grau III";
        case indiceMC >= 35 && indiceMC <= 39.9:
            return "Obesidade grau II";
        case indiceMC >= 30 && indiceMC <= 34.9:
            return "Obesidade grau I";
        case indiceMC >= 25 && indiceMC <= 29.9:
            return "Sobrepeso";
        case indiceMC >= 18.6 && indiceMC <= 24.9:
            return "Normal";
        case indiceMC <= 18.5:
            return "Abaixo do normal";
        default:
            return "Condição não identificada";
    }
}


function obterNomeDoInput() {
    const meuPeso = parseFloat(document.getElementById('meuPeso').value);
    const minhaAltura = parseFloat(document.getElementById('minhaAltura').value);
    
    const indiceMC = imc(minhaAltura, meuPeso);
    const IMCResultado = resultadoImc(indiceMC);

    const valorDoInput = document.getElementById('meuNome').value;

    const novaDiv = document.createElement('div');

    // Criar uma tag <span> para o resultado do IMC
    const resultadoSpan = document.createElement('span');
    resultadoSpan.textContent = IMCResultado;

    // Adicionar a parte restante do texto junto com o resultado dentro da <div>
    novaDiv.innerHTML = `${valorDoInput}, seu IMC está qualificado como: `;
    novaDiv.appendChild(resultadoSpan);

    // Atribuir um ID à novaDiv
    novaDiv.id = 'minhaNovaDiv';

    // Adicionar a <div> ao corpo do documento
    document.body.appendChild(novaDiv);
}
