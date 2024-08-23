function validateInput() {
    let input = document.getElementById("inputText").value;
    let validationMessage = document.getElementById("validationMessage");

    // Verificar se o input contém letras maiúsculas ou caracteres especiais
    if (/[^a-z\s]/.test(input)) {
        validationMessage.style.display = "flex";
    } else {
        validationMessage.style.display = "none";
    }
}

function encryptText() {
    let input = document.getElementById("inputText").value;

    // Validar o input antes de criptografar
    if (/[^a-z\s]/.test(input)) {
        alert("Texto inválido. Use apenas letras minúsculas e sem caracteres especiais.");
        return;
    }

    let output = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar o texto criptografado e esconder a imagem
    showOutput(output);
}

function decryptText() {
    let input = document.getElementById("inputText").value;

    // Validar o input antes de descriptografar
    if (/[^a-z\s]/.test(input)) {
        alert("Texto inválido. Use apenas letras minúsculas e sem caracteres especiais.");
        return;
    }

    let output = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar o texto descriptografado e esconder a imagem
    showOutput(output);
}

function showOutput(output) {
    let outputText = document.getElementById("outputText");
    let placeholderImage = document.getElementById("placeholderImage");
    let copyButton = document.getElementById("copyButton");

    // Esconder a imagem e mostrar o texto criptografado/descriptografado
    placeholderImage.style.display = "none";
    outputText.style.display = "flex";
    outputText.textContent = output;

    // Mostrar o botão de copiar
    copyButton.style.display = "block";
}

function copyToClipboard() {
    let outputText = document.getElementById("outputText");
    let range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges(); // Para dispositivos móveis
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Texto copiado com sucesso!");
    resetAfterCopy(); // Chama a função de reset após copiar
}

function resetAfterCopy() {
    let inputText = document.getElementById("inputText");
    let outputText = document.getElementById("outputText");
    let placeholderImage = document.getElementById("placeholderImage");
    let copyButton = document.getElementById("copyButton");

    // Limpar o texto processado
    outputText.innerHTML = '';
    placeholderImage.style.display = "block";
    outputText.style.display = "none";
    copyButton.style.display = "none";

    // Resetar o campo de entrada
    inputText.value = '';
    inputText.focus();
}
