let custoFrabrica = 150000;
let custoDobraEficienciaFabricas = 5000;
let countFabricas = 0;
let valorClickFabricas = 200;
let countCompradaDobraEficienciaFabricas = 0;

function adicionaFabrica() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoFrabrica) {
        document.getElementById('cliques').textContent = cliques - custoFrabrica;
        document.getElementById('custoFabrica').textContent = Math.round(custoFrabrica * PORCENTAGEM_CUSTO);
        custoFrabrica = Math.round(custoFrabrica * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosFabricas();
        verificaMelhoriaDobrarEficienciaFabricas();

        setInterval(() => {
            clicou(true, valorClickFabricas);
            console.log('valor do click = ' + valorClickFabricas)
        }, 1000);
    } 
}

function aumentaContadorCompradosFabricas() {
    document.getElementById('countFabricas').textContent = ++countFabricas;
}

function verificaMelhoriaDobrarEficienciaFabricas() {
    let count = parseInt(document.getElementById('countFabricas').textContent);
    if (count >= 10 && countCompradaDobraEficienciaFabricas == 0) {
        document.querySelector('.btn').style.display = 'block';
    } else if (count >= 50 && countCompradaDobraEficienciaFabricas == 1) {
        console.log('Dobrou pela segunda vez')
        document.querySelector('.btn').style.display = 'block';
    }
}

function dobraEficienciaMouseComum() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoDobraEficienciaMouseComum) {
        valorClickFabricas = valorClickFabricas * 2;
        document.getElementById('cliques').textContent = cliques - custoDobraEficienciaMouseComum;
        document.getElementById('custoDobraEficienciaMouseComum').textContent = Math.round(custoDobraEficienciaMouseComum * 5);
        custoDobraEficienciaMouseComum = Math.round(custoDobraEficienciaMouseComum * 5);
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'none';
        countCompradaDobraEficienciaFabricas++;
    }
}