let incremento = 1;
let custoDobraClique = 100;

function clicou(melhoria, incrementoMelhoria) {
    let cliques = document.getElementById('cliques').textContent;

    if (melhoria) {
        cliques = parseInt(cliques) + incrementoMelhoria;
    } else {
        cliques = parseInt(cliques) + incremento;
    }

    document.getElementById('cliques').textContent = cliques;
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