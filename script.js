// Corações animados
function criarCoração() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
  setInterval(criarCoração, 300);
  
  // Mostrar surpresa
  function mostrarSurpresa() {
    alert("Você merece ganhar o mundo! Muito orgulho de você 💞");
  
    // Mostrar o botão de presente
    document.getElementById('btnPresente').classList.remove('invisivel');
  }

  // Transição entre telas
  function mostrarConteudo() {
    document.getElementById('boasVindas').classList.add('escondido');
    const conteudo = document.getElementById('conteudoPrincipal');
    conteudo.classList.remove('escondido');
    conteudo.style.opacity = 1;
    conteudo.style.transform = "translateY(0)";
  
    // ⬅️ Mostra a primeira imagem do carrossel ao entrar
    trocarFoto(0);
  }
  
  function baixarPresente() {
    const link = document.createElement('a');
    link.href = 'Penneys1.pdf'; // PDF deve estar na raiz do projeto
    link.download = 'Presente_Dia_dos_Namorados.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Carrossel de fotos
  // Gera automaticamente o array com os nomes de 001.jpg até 050.jpg
const fotos = [];
for (let i = 1; i <= 50; i++) {
  const nome = String(i).padStart(3, '0') + '.jpg';
  fotos.push('fotos/' + nome);
}
  let indice = 0;
  
  function trocarFoto(direcao) {
    indice = (indice + direcao + fotos.length) % fotos.length;
    document.getElementById('fotoCarrossel').src = fotos[indice];
  }