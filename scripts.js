let incremento = 1;
let custoDobraClique = 100;
var cliques = {
    cliquesTotais : 0
};

function clicou(melhoria, incrementoMelhoria) {
    let totalCliques = cliques.cliquesTotais;

    totalCliques = totalCliques +  melhoria ? incrementoMelhoria : incremento;

    cliques.cliquesTotais = totalCliques;
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
    let cliques = parseInt(document.getElementById('cliques').textContent);

    if (cliques >= custoDobraClique) {
        incremento *= 2;

        document.getElementById('cliques').textContent = cliques - custoDobraClique;
        document.getElementById('custoDobraClique').textContent = custoDobraClique * 5;
        custoDobraClique = custoDobraClique * 5;
    }    
}

function nomeiaValoresGrandes(valor) {
    let valorSeparado = valor.toString().split("").map(Number);

    if (valorSeparado.length >= 7 && valorSeparado.length <= 9) {
        if (valorSeparado.length == 7) {
            return valorSeparado[0] + "." + valorSeparado[1] + valorSeparado[2] + valorSeparado[3] + " Milhão";
        } else if (valorSeparado.length == 8) {
            return valorSeparado[0] + valorSeparado[1] + "." + valorSeparado[2] + valorSeparado[3] +  valorSeparado[4] + " Milhões";
        } else {
            return valorSeparado[0] + valorSeparado[1] + valorSeparado[2] + "." + valorSeparado[3] +  valorSeparado[4] + valorSeparado[5] + " Milhões";
        }
    }

    return valor;
}