let custoMaisUmMouse = 150;
let custoDobraEficienciaMouseComum = 5000;
let countMaisUmMouse = 0;
let valorClickMouseComum = 1;
let countCompradaDobraEficienciaMouseComum = 0;

function adcionaMouse() {
    if (cliques.cliquesSaldo >= custoMaisUmMouse) {
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoMaisUmMouse;
        cliques.cliquesSaldo -= custoMaisUmMouse;
        document.getElementById('custoMaisUmMouse').textContent = Math.round(custoMaisUmMouse * PORCENTAGEM_CUSTO);
        custoMaisUmMouse = Math.round(custoMaisUmMouse * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosMouseComum();
        verificaMelhoriaDobrarEficienciaMouseComum();

        setInterval(() => {
            clicou(true, valorClickMouseComum);
        }, 1000);
    } 
}

function aumentaContadorCompradosMouseComum() {
    let incrementoComprado = ++countMaisUmMouse;
    document.querySelectorAll('.countMaisUmMouse').forEach(el => {
        el.textContent = incrementoComprado;
    });
}

function verificaMelhoriaDobrarEficienciaMouseComum() {
    if (countMaisUmMouse >= 10 && countCompradaDobraEficienciaMouseComum == 0) {
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'block';
    } else if (countMaisUmMouse >= 30 && countCompradaDobraEficienciaMouseComum == 1) {
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'block';
    }
}

function dobraEficienciaMouseComum() {
    if (cliques.cliquesSaldo >= custoDobraEficienciaMouseComum) {
        valorClickMouseComum = valorClickMouseComum * 2;
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoDobraEficienciaMouseComum;
        cliques.cliquesSaldo -= custoDobraEficienciaMouseComum;
        document.getElementById('custoDobraEficienciaMouseComum').textContent = Math.round(custoDobraEficienciaMouseComum * 5);
        custoDobraEficienciaMouseComum = Math.round(custoDobraEficienciaMouseComum * 5);
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'none';
        countCompradaDobraEficienciaMouseComum++;
    }
}