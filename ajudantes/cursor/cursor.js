let custoCursorAutomatico = 25;
let cursorIdCounter = 0;
let countCursorAutomatico = 0;

function adicionaCursorAutomatico() {
    if (cliques.cliquesSaldo >= custoCursorAutomatico) {
        document.getElementById('cliques').textContent = nomeiaValoresGrandes(cliques.cliquesSaldo - custoCursorAutomatico);
        cliques.cliquesSaldo -= custoCursorAutomatico
        document.getElementById('custoCursorAutomatico').textContent = nomeiaValoresGrandes(Math.round(custoCursorAutomatico * PORCENTAGEM_CUSTO));
        custoCursorAutomatico = Math.round(custoCursorAutomatico * PORCENTAGEM_CUSTO);
        adicionaCursorNaTela();
        aumentaContadorCompradosCursor();
    }    
}

function adicionaCursorNaTela() {
    cursorIdCounter++;
    const cursorId = `cursor-${cursorIdCounter}`;

    document.querySelector('.container-cursores').innerHTML += `
        <img src="imagens/ponto-de-mao.png" alt="" id="${cursorId}" class="cursor">
    `;

    iniciarMovimentoCursor(cursorId);
}

function iniciarMovimentoCursor(cursorId) {
    setInterval(() => {
        movimentacaoCursor(cursorId);
        clicou(false, 1);
    }, 10000);
}

function movimentacaoCursor(cursorId) {
    const cursor = document.getElementById(cursorId);

    if (cursor) {
        cursor.style.transform = "translateY(-10px)";
        setTimeout(() => {
            cursor.style.transform = "translateY(0px)";
        }, 200);
    }
}

function aumentaContadorCompradosCursor() {
    document.getElementById('countCursorAutomatico').textContent = ++countCursorAutomatico;
}