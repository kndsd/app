
function gerartabuada() {
    // 1. Pegamos os elementos pelos IDs corretos do seu HTML
    const numeroInput = document.getElementById("numeroInput");
    const resultadoDiv = document.getElementById("resultadoTabuada");

    // 2. Convertemos o valor para número
    let numero = parseInt(numeroInput.value);

    // 3. Limpamos o resultado anterior
    resultadoDiv.innerHTML = "";

    // 4. Validação: verifica se o que foi digitado é um número válido
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return;
    }

    // 5. Criamos o título da tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // 6. O laço de repetição para calcular
    for (let i = 1; i <= 10; i++) {
        let calculo = numero * i;
        // Usamos += para ir adicionando as linhas sem apagar as anteriores
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${calculo}</p>`;
    }
}

// 7. Configuração do botão (ID: btnGerar, Evento: 'click')
const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerartabuada);