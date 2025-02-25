let custoIA = 1000000;
let custoDobraEficienciaIA = 500000;
let countIA = 0;
let valorClickIA = 1000;
let countCompradaDobraEficienciaIA = 0;

function adicionaIA() {
    if (cliques.cliquesSaldo >= custoIA) {
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoIA;
        cliques.cliquesSaldo -= custoIA;
        document.getElementById('custoIA').textContent = Math.round(custoIA * PORCENTAGEM_CUSTO);
        custoIA = Math.round(custoIA * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosIA();
        verificaMelhoriaDobrarEficienciaIA();

        setInterval(() => {
            clicou(true, valorClickIA);
        }, 1000);
    } 
}

function aumentaContadorCompradosIA() {
    document.getElementById('countIA').textContent = ++countIA;
}

function verificaMelhoriaDobrarEficienciaIA() {
    let count = parseInt(document.getElementById('countIA').textContent);
    if (count >= 10 && countCompradaDobraEficienciaIA == 0) {
        document.querySelector('.btnDobraEficienciaIA').style.display = 'block';
    } else if (count >= 30 && countCompradaDobraEficienciaIA == 1) {
        document.querySelector('.btnDobraEficienciaIA').style.display = 'block';
    }
}

function dobraEficienciaIA() {
    if (cliques.cliquesSaldo >= custoDobraEficienciaIA) {
        valorClickIA = valorClickIA * 2;
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoDobraEficienciaIA;
        cliques.cliquesSaldo -= custoDobraEficienciaIA;
        document.getElementById('custoDobraEficienciaIA').textContent = Math.round(custoDobraEficienciaIA * 5);
        custoDobraEficienciaIA = Math.round(custoDobraEficienciaIA * 5);
        document.querySelector('.btnDobraEficienciaIA').style.display = 'none';
        countCompradaDobraEficienciaIA++;
    }
}