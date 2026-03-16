document.getElementById('btnCalcular').addEventListener('click', function() {
    // Pegando os valores
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const divResultado = document.getElementById('resultado');

    // Validação simples
    if (isNaN(n1) || isNaN(n2)) {
        divResultado.innerHTML = "<p style='color:red;'>Por favor, preencha ambos os campos.</p>";
        return;
    }

    // Cálculos
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    // Exibindo os resultados (uma linha para cada)
    divResultado.innerHTML = `
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Maior número:</strong> ${maior}</p>
        <p><strong>Menor número:</strong> ${menor}</p>
    `;
});