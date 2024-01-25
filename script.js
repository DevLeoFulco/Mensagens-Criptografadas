function ajustarAlturaTextarea() {
  var textarea = document.getElementById("texto");
  textarea.style.height = "auto"; // Redefine a altura para auto
  textarea.style.height = textarea.scrollHeight + "px"; // Ajusta a altura com base no conteúdo
}

function criptografar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function descriptografar(textoCriptografado) {
  return textoCriptografado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function executarAcao(acao) {
  var texto = document.getElementById("texto").value;
  var resultadoTexto = "";

  if (acao === "criptografar") {
    resultadoTexto = criptografar(texto);
  } else if (acao === "descriptografar") {
    resultadoTexto = descriptografar(texto);
  }

  exibirResultado(resultadoTexto);
}

function exibirResultado(resultado) {
  var resultadoTextarea = document.getElementById("resultado-texto");
  resultadoTextarea.value = resultado;
}

function copiarParaAreaTransferencia() {
  var resultadoTextarea = document.getElementById("resultado-texto");
  resultadoTextarea.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
}

function exibirResultado(resultado) {
  var resultadoTextarea = document.getElementById("resultado-texto");
  resultadoTextarea.value = resultado;

  var imagemResultado = document.getElementById("imagem-resultado");
  imagemResultado.style.display = "none"; // Oculta a imagem padrão

  var resultadoContainer = document.getElementById("resultado-texto");
  resultadoContainer.style.display = "flex"; // Exibe o contêiner do resultado

  var botaoCopiar = document.getElementById("copiar-btn");
  botaoCopiar.style.display = "block"; // Exibe o botão de copiar
}

function resetarEstado() {
  var imagemResultado = document.getElementById("imagem-resultado");
  imagemResultado.style.display = "block";
  var resultadoContainer = document.getElementById("resultado-texto");
  resultadoContainer.style.display = "none"; // Exibe a imagem padrão
  var textoTextarea = document.getElementById("texto");
  textoTextarea.value = "";
}

function copiarParaAreaTransferencia() {
  var resultadoTextarea = document.getElementById("resultado-texto");
  resultadoTextarea.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");

  resetarEstado(); // Reseta o estado após a cópia
}
