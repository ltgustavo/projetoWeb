// Função para Mostrar o Nome do Aluno
function mostrarAluno() {
    const nome = document.getElementById('name').value;
    document.getElementById('nome-aluno').innerHTML = "Nome do Aluno: " + nome;
}

// Função para Calcular Média do Aluno e Dizer se foi Reprovado ou Aprovado
function calcularMedia() {
    const n1 = parseFloat(document.getElementById('nota-1').value);
    const n2 = parseFloat(document.getElementById('nota-2').value);
    const n3 = parseFloat(document.getElementById('nota-3').value);
    const media = (n1 + n2 + n3) / 3;
    document.getElementById('media-aluno').innerHTML = " Média do Aluno foi: " + media.toFixed(2);
    if (media >= 7) {
        document.getElementById('situacao').innerHTML = "Situação: Aprovado";
    } else {
        if (media <= 6.9) {
            document.getElementById('situacao').innerHTML = "Situação: Reprovado";
        }
    }
}

window.onload = function mostrarData() {
var dNow = new Date();
var localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear();
document.getElementById('hora').innerHTML = "Data: " + localdate;
}   