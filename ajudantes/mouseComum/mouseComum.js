let custoMaisUmMouse = 150;
let custoDobraEficienciaMouseComum = 5000;
let countMaisUmMouse = 0;
let valorClickMouseComum = 1;
let countCompradaDobraEficienciaMouseComum = 0;

function adcionaMouse() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoMaisUmMouse) {
        document.getElementById('cliques').textContent = cliques - custoMaisUmMouse;
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
    document.getElementById('countMaisUmMouse').textContent = ++countMaisUmMouse;
}

function verificaMelhoriaDobrarEficienciaMouseComum() {
    let count = parseInt(document.getElementById('countMaisUmMouse').textContent);
    if (count >= 10 && countCompradaDobraEficienciaMouseComum == 0) {
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'block';
    } else if (count >= 30 && countCompradaDobraEficienciaMouseComum == 1) {
        console.log('Dobrou pela segunda vez')
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'block';
    }
}

function dobraEficienciaMouseComum() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoDobraEficienciaMouseComum) {
        valorClickMouseComum = valorClickMouseComum * 2;
        document.getElementById('cliques').textContent = cliques - custoDobraEficienciaMouseComum;
        document.getElementById('custoDobraEficienciaMouseComum').textContent = Math.round(custoDobraEficienciaMouseComum * 5);
        custoDobraEficienciaMouseComum = Math.round(custoDobraEficienciaMouseComum * 5);
        document.querySelector('.btnDobraEficienciaMouseComum').style.display = 'none';
        countCompradaDobraEficienciaMouseComum++;
    }
}