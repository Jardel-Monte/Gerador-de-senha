function gerarSenha() {
    // Obter valores dos campos
    const comprimento = document.getElementById('comprimentoSenha').value;
    const numSenhas = document.getElementById('numSenhas').value;
    const permitirEspecial = document.getElementById('permitirEspecial').checked;
    const permitirNumeros = document.getElementById('permitirNumeros').checked;
    const permitirMaiuscula = document.getElementById('permitirMaiuscula').checked;

    // Validar comprimento da senha e número de senhas
    if (comprimento <= 0 || comprimento > 20 || numSenhas <= 0 || numSenhas > 10) {
    alert('Por favor, insira valores válidos para comprimento e número de senhas.');
    return;
    }

    // Caracteres permitidos
    const CharsEspeciais = "!@#$%&*()+=-*./";
    const numeros = "0123456789";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Gerar senha(s)
    let senhas = '';
    for (let i = 0; i < numSenhas; i++) {
    let chars = '';
    // Adicionar caracteres especiais se permitido
    chars += permitirEspecial ? pegarCaractereAleatorio(CharsEspeciais) : '';
    // Adicionar números se permitido
    chars += permitirNumeros ? pegarCaractereAleatorio(numeros) : '';
    // Adicionar letras maiúsculas se permitido
    chars += permitirMaiuscula ? pegarCaractereAleatorio(letrasMaiusculas) : '';

    // Preencher o restante da senha com caracteres aleatórios
    while (chars.length < comprimento) {
        chars += pegarCaractereAleatorio("abcdefghijklmnopqrstuvwxyz");
    }

    // Embaralhar os caracteres
    chars = chars.split('').sort(() => Math.random() - 0.5).join('');

    senhas += `${i + 1}. ${chars}\n`;
    }

    // Exibir senhas geradas na área de texto
    document.getElementById('senhasGeradas').value = senhas;
}

function pegarCaractereAleatorio(caracteres) {
    // Obter um caractere aleatório da string fornecida
    return caracteres[Math.floor(Math.random() * caracteres.length)];
}

function limparInputs() {
    // Limpar todos os campos
    document.getElementById('comprimentoSenha').value = '';
    document.getElementById('numSenhas').value = '';
    document.getElementById('permitirEspecial').checked = false;
    document.getElementById('permitirNumeros').checked = false;
    document.getElementById('permitirMaiuscula').checked = false;
    document.getElementById('senhasGeradas').value = '';
}
