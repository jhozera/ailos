function buscarCPF() {
    const cpfInput = document.getElementById("cpfInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const loading = document.getElementById("loading");
    const pagamentoSection = document.getElementById("main-content");
    const buscaSection = document.querySelector(".container");

    // Validação simples de CPF
    // if (cpfInput === "" || cpfInput.length < 11) {
    //     errorMessage.style.display = "block";
    //     return;
    // }
    errorMessage.style.display = "none";

    // Esconde a tela de busca
    buscaSection.style.display = "none";

    // Mostra a tela de loading
    loading.style.display = "flex";

    // Simulação de carregamento (2 segundos)
    setTimeout(() => {
        // Esconde o loading
        loading.style.display = "none";
        
        // Mostra a seção de pagamento
        pagamentoSection.style.display = "block";
    }, 2000); // Tempo de carregamento em milissegundos
}
