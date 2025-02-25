let custoMaisUmMouseGamer = 500;
let custoDobraEficienciaMouseGamer = 10000;
let countMaisUmMouseGamer = 0;
let valorClickMouseGamer = 5;
let countCompradaDobraEficienciaMouseGamer = 0;

function adcionaMouseGamer() {
    if (cliques.cliquesSaldo >= custoMaisUmMouseGamer) {
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoMaisUmMouseGamer;
        cliques.cliquesSaldo -= custoMaisUmMouseGamer;
        document.getElementById('custoMaisUmMouseGamer').textContent = Math.round(custoMaisUmMouseGamer * PORCENTAGEM_CUSTO);
        custoMaisUmMouseGamer = Math.round(custoMaisUmMouseGamer * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosMouseGamer(); 
        verificaMelhoriaDobrarEficienciaMouseGamer();

        setInterval(() => {
            clicou(true, valorClickMouseGamer);
        }, 1000);
    } 
}

function aumentaContadorCompradosMouseGamer() {
    document.getElementById('countMaisUmMouseGamer').textContent = ++countMaisUmMouseGamer;
}

function verificaMelhoriaDobrarEficienciaMouseGamer() {
    let count = parseInt(document.getElementById('countMaisUmMouseGamer').textContent);
    if (count >= 10 && countCompradaDobraEficienciaMouseGamer == 0) {
        document.querySelector('.btnDobraEficienciaMouseGamer').style.display = 'block';
    } else if (count >= 30 && countCompradaDobraEficienciaMouseGamer == 1) {
        document.querySelector('.btnDobraEficienciaMouseGamer').style.display = 'block';
    }
}

function dobraEficienciaMouseGamer() {
    if (cliques.cliquesSaldo >= custoDobraEficienciaMouseGamer) {
        valorClickMouseGamer = valorClickMouseGamer * 2;
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoDobraEficienciaMouseGamer;
        cliques.cliquesSaldo -= custoDobraEficienciaMouseGamer;
        document.getElementById('custoDobraEficienciaMouseGamer').textContent = Math.round(custoDobraEficienciaMouseGamer * 5);
        custoDobraEficienciaMouseGamer = Math.round(custoDobraEficienciaMouseGamer * 5);
        document.querySelector('.btnDobraEficienciaMouseGamer').style.display = 'none';
        countCompradaDobraEficienciaMouseGamer++;
    }
}