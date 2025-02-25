let incremento = 1;
let custoDobraClique = 100;
var cliques = {
    cliquesTotais : 0,
    cliquesSaldo : 0
};

function clicou(melhoria, incrementoMelhoria) {
    let totalCliques = cliques.cliquesSaldo;

    if (melhoria) {
        totalCliques = totalCliques + incrementoMelhoria;
        cliques.cliquesTotais += incrementoMelhoria;
    } else {
        totalCliques = totalCliques + incremento;
        cliques.cliquesTotais += incremento; 
        verificaMelhoriaDobraClick();
    }

    cliques.cliquesSaldo = totalCliques;
    document.getElementById('cliques').textContent = nomeiaValoresGrandes(totalCliques);
}

const button = document.getElementById('buttonClique');
const effectContainer = document.getElementById('effectContainer');

button.addEventListener('click', () => {
    clicou(false, 1);

    const effect = document.createElement('div');
    effect.className = 'effect';
    effect.textContent = `+${incremento}`;

    const rect = button.getBoundingClientRect();
    effect.style.left = `${rect.width / 2 - 15}px`;
    effect.style.top = `${rect.height / 2 - 15}px`;

    effectContainer.appendChild(effect);

    effect.addEventListener('animationend', () => {
        effectContainer.removeChild(effect);
    });
});

function dobraClique() {
    if (cliques.cliquesSaldo >= custoDobraClique) {
        incremento *= 2;

        document.getElementById('cliques').textContent = nomeiaValoresGrandes(cliques.cliquesSaldo - custoDobraClique);
        cliques.cliquesSaldo -= custoDobraClique;
        document.getElementById('custoDobraClique').textContent = nomeiaValoresGrandes(custoDobraClique * 5);
        custoDobraClique = custoDobraClique * 5;
    }    
}

function nomeiaValoresGrandes(valor) {
    let valorSeparado = valor.toString().split("").map(Number);

    if (valorSeparado.length >= 7 && valorSeparado.length <= 9) {
        if (valorSeparado.length == 7) {
            return valorSeparado[0] + "." + valorSeparado[1] + "" + valorSeparado[2] + "" + valorSeparado[3] + " Milhões";
        } else if (valorSeparado.length == 8) {
            return valorSeparado[0] + "" + valorSeparado[1] + "." + valorSeparado[2] + "" + valorSeparado[3] + "" + valorSeparado[4] + " Milhões";
        } else {
            return valorSeparado[0] + "" + valorSeparado[1] + "" + valorSeparado[2] + "." + valorSeparado[3] + "" + valorSeparado[4] + "" + valorSeparado[5] + " Milhões";
        }
    } else if (valorSeparado.length >= 10 && valorSeparado.length <= 12) {
        if (valorSeparado.length == 10) {
            return valorSeparado[0] + "." + valorSeparado[1] + "" + valorSeparado[2] + "" + valorSeparado[3] + " Bilhões";
        } else if (valorSeparado.length == 11) {
            return valorSeparado[0] + "" + valorSeparado[1] + "." + valorSeparado[2] + "" + valorSeparado[3] + "" + valorSeparado[4] + " Bilhões";
        } else {
            return valorSeparado[0] + "" + valorSeparado[1] + "" + valorSeparado[2] + "." + valorSeparado[3] + "" + valorSeparado[4] + "" + valorSeparado[5] + " Bilhões";
        }
    }

    return valor;
}

function verificaMelhoriaDobraClick() {
    if (cliques.cliquesTotais >= 10) {
        document.querySelector('.btnDobraEficienciaClick').style.display = 'block';
    }
}