let custoCursorAutomatico = 50;
let cursorIdCounter = 0;
let countCursorAutomatico = 0;
let diminuirTempoCursor = false;
let custoDiminuiTempoCursor = 555;
let intervalos = {};
let countCompradoDiminuiTempoCursor = 0;

function adicionaCursorAutomatico() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoCursorAutomatico) {
        document.getElementById('cliques').textContent = cliques - custoCursorAutomatico;
        document.getElementById('custoCursorAutomatico').textContent = Math.round(custoCursorAutomatico * PORCENTAGEM_CUSTO);
        custoCursorAutomatico = Math.round(custoCursorAutomatico * PORCENTAGEM_CUSTO);
        adicionaCursorNaTela();
        aumentaContadorCompradosCursor();
        verificaMelhoriaDimuiTempoCursor(); 
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
    if (intervalos[cursorId]) clearInterval(intervalos[cursorId]);

    intervalos[cursorId] = setInterval(() => {
        movimentacaoCursor(cursorId);
        clicou(false, 1);
    }, diminuirTempoCursor ? 5000 : 10000);
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

function verificaMelhoriaDimuiTempoCursor() {
    let count = parseInt(document.getElementById('countCursorAutomatico').textContent)

    if (count >= 10 && countCompradoDiminuiTempoCursor == 0) {
        document.querySelector('.btnDiminuiTempoCursor').style.display = 'block';
    }
}

function diminuiTempoCursor() {
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoDiminuiTempoCursor) {
        document.getElementById('cliques').textContent = cliques - custoDiminuiTempoCursor;
        document.querySelector('.btnDiminuiTempoCursor').style.display = 'none';
        diminuirTempoCursor = true;
        countCompradoDiminuiTempoCursor++

        for (let cursorId in intervalos) {
            iniciarMovimentoCursor(cursorId);
        }
    }
}
