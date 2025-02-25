let custoAutoClick = 10000;
let custoDobraEficienciaAutoClick = 25000;
let countAutoClick = 0;
let valorClickAutoClick = 50;
let countCompradaDobraEficienciaAutoClick = 0;

function adcionaAutoClick() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoAutoClick) {
        document.getElementById('cliques').textContent = cliques - custoAutoClick;
        document.getElementById('custoAutoClick').textContent = Math.round(custoAutoClick * PORCENTAGEM_CUSTO);
        custoAutoClick = Math.round(custoAutoClick * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosAutoClick(); 
        verificaMelhoriaDobrarEficienciaAutoClick();

        setInterval(() => {
            clicou(true, valorClickAutoClick);
        }, 1000);
    } 
}

function aumentaContadorCompradosAutoClick() {
    document.getElementById('countAutoClick').textContent = ++countAutoClick;
}

function verificaMelhoriaDobrarEficienciaAutoClick() {
    let count = parseInt(document.getElementById('countAutoClick').textContent);
    if (count >= 10 && countCompradaDobraEficienciaAutoClick == 0) {
        document.querySelector('.btnDobraEficienciaAutoClick').style.display = 'block';
    } else if (count >= 30 && countCompradaDobraEficienciaAutoClick == 1) {
        document.querySelector('.btnDobraEficienciaAutoClick').style.display = 'block';
    }
}

function dobraEficienciaAutoClick() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoDobraEficienciaAutoClick) {
        valorClickAutoClick = valorClickAutoClick * 2;
        document.getElementById('cliques').textContent = cliques - custoDobraEficienciaAutoClick;
        document.getElementById('custoDobraEficienciaAutoClick').textContent = Math.round(custoDobraEficienciaAutoClick * 5);
        custoDobraEficienciaAutoClick = Math.round(custoDobraEficienciaAutoClick * 5);
        document.querySelector('.btnDobraEficienciaAutoClick').style.display = 'none';
        countCompradaDobraEficienciaAutoClick++;
    }
}