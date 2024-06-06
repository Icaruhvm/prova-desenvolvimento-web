function registrarAluno(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    if (!nome || !matricula || isNaN(nota1) || isNaN(nota2)) {
        alert('Preencha todos os campos corretamente!');
        return;
    }
    
    const media = (nota1 + nota2) / 2;
    const situacao = media >= 5 ? 'Aprovado' : 'Reprovado';
    
    const linha = criarLinhaTabela(nome, matricula, nota1, nota2, media.toFixed(2), situacao);
    adicionarLinhaTabela(linha);
    
    limparCamposFormulario();
}

function criarLinhaTabela(nome, matricula, nota1, nota2, media, situacao) {
    const linha = document.createElement('tr');
    
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${matricula}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media}</td>
        <td>${situacao}</td>
    `;
    
    return linha;
}

function adicionarLinhaTabela(linha) {
    const tbody = document.querySelector('#tabela tbody');
    tbody.appendChild(linha);
}

function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}

function limparTabela() {
    const tbody = document.querySelector('#tabela tbody');
    tbody.innerHTML = '';
}

document.getElementById('formulario').addEventListener('submit', registrarAluno);
document.getElementById('clear').addEventListener('click', limparTabela);
