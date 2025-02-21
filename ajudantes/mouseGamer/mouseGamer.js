let custoMaisUmMouseGamer = 500;
let countMaisUmMouseGamer = 0;

function adcionaMouseGamer() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoMaisUmMouseGamer) {
        document.getElementById('cliques').textContent = cliques - custoMaisUmMouseGamer;
        document.getElementById('custoMaisUmMouseGamer').textContent = Math.round(custoMaisUmMouseGamer * PORCENTAGEM_CUSTO);
        custoMaisUmMouseGamer = Math.round(custoMaisUmMouseGamer * PORCENTAGEM_CUSTO);
        aumentaContadorCompradosMouseGamer(); 

        setInterval(() => {
            clicou(true, 5);
        }, 1000);
    } 
}

function aumentaContadorCompradosMouseGamer() {
    document.getElementById('countMaisUmMouseGamer').textContent = ++countMaisUmMouseGamer;
}