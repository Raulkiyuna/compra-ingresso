function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value; 
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo == 'pista') {
        comprarPista(qtd);
    } else if (tipo == 'superior') {
        comprarSuperior(qtd);
    } else {comprarInferior(qtd);}
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('quantidade de ingressos insufieceintes!')
    } else {
    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista
    alert('compra realizada com sucesso!');}
}   

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('quantidade de ingressos insufieceintes!')
    } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior
    alert('compra realizada com sucesso!');}
}   

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('quantidade de ingressos insufieceintes!')
    } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior
    alert('compra realizada com sucesso!');}
}   