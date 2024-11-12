function calcular() {
    const n1 = document.getElementById('n1');
    const resultado = document.getElementById('resultado');

    if (n1.value === "") {
        resultado.innerHTML = "Por favor, insira um valor válido.";
    } else {
        const valorCalculado = (parseFloat(n1.value) * 0.265).toFixed(2);
        resultado.innerHTML = "A projeção do CBS e IBS é de: R$ " + valorCalculado;
    }
}
