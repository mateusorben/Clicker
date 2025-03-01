let custoFrabrica = 150000;
let custoDobraEficienciaFabricas = 50000;
let countFabricas = 0;
let valorClickFabricas = 200;
let countCompradaDobraEficienciaFabricas = 0;

function adicionaFabrica() {
    if (cliques.cliquesSaldo >= custoFrabrica) {
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoFrabrica;
        cliques.cliquesSaldo -= custoFrabrica;
        document.getElementById('custoFabrica').textContent = Math.round(custoFrabrica * PORCENTAGEM_CUSTO);
        custoFrabrica = Math.round(custoFrabrica * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosFabricas();
        verificaMelhoriaDobrarEficienciaFabricas();

        setInterval(() => {
            clicou(true, valorClickFabricas);
        }, 1000);
    } 
}

function aumentaContadorCompradosFabricas() {
    document.getElementById('countFabricas').textContent = ++countFabricas;
}

function verificaMelhoriaDobrarEficienciaFabricas() {
    let count = parseInt(document.getElementById('countFabricas').textContent);
    if (count >= 10 && countCompradaDobraEficienciaFabricas == 0) {
        document.querySelector('.btnDobraEficienciaFabrica').style.display = 'block';
    } else if (count >= 30 && countCompradaDobraEficienciaFabricas == 1) {
        document.querySelector('.btnDobraEficienciaFabrica').style.display = 'block';
    }
}

function dobraEficienciaFabrica() {
    if (cliques.cliquesSaldo >= custoDobraEficienciaFabricas) {
        valorClickFabricas = valorClickFabricas * 2;
        document.getElementById('cliques').textContent = cliques.cliquesSaldo - custoDobraEficienciaFabricas;
        cliques.cliquesSaldo -= custoDobraEficienciaFabricas;
        document.getElementById('custoDobraEficienciaFabrica').textContent = Math.round(custoDobraEficienciaFabricas * 5);
        custoDobraEficienciaFabricas = Math.round(custoDobraEficienciaFabricas * 5);
        document.querySelector('.btnDobraEficienciaFabrica').style.display = 'none';
        countCompradaDobraEficienciaFabricas++;
    }
}