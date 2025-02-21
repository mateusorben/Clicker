let custoAutoClick = 10000;
let countAutoClick = 0;

function adcionaAutoClick() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoAutoClick) {
        document.getElementById('cliques').textContent = cliques - custoAutoClick;
        document.getElementById('custoAutoClick').textContent = Math.round(custoAutoClick * PORCENTAGEM_CUSTO);
        custoAutoClick = Math.round(custoAutoClick * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosAutoClick(); 

        setInterval(() => {
            clicou(true, 50);
        }, 1000);
    } 
}

function aumentaContadorCompradosAutoClick() {
    document.getElementById('countAutoClick').textContent = ++countAutoClick;
}