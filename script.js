const moon = document.getElementById("moon");

// Verifica se há um tema salvo no localStorage e aplica
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    moon.classList.remove("bi-moon");
    moon.classList.add("bi-sun");
}

// Evento de clique para alternar o modo escuro
moon.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        moon.classList.remove("bi-moon");
        moon.classList.add("bi-sun");
        localStorage.setItem("theme", "dark"); // Salva a preferência no localStorage
    } else {
        moon.classList.add("bi-moon");
        moon.classList.remove("bi-sun");
        localStorage.setItem("theme", "light"); // Salva a preferência no localStorage
    }
});

// script.js
const carrosselContainer = document.querySelector('.carrossel-container');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
const bolinhas = document.querySelectorAll('.bolinha');
const totalCards = document.querySelectorAll('.card').length;

let indiceAtual = 0;

// Função para atualizar o carrossel
function atualizarCarrossel() {
    // Move o carrossel para o card atual
    carrosselContainer.style.transform = `translateX(${-indiceAtual * 100}%)`;

    // Atualiza as bolinhas indicadoras
    atualizarBolinhas();
}

// Função para atualizar as bolinhas indicadoras
function atualizarBolinhas() {
    bolinhas.forEach((bolinha, index) => {
        if (index === indiceAtual) {
            bolinha.classList.add('ativa');
        } else {
            bolinha.classList.remove('ativa');
        }
    });
}

const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const desc = btn.nextElementSibling;
    const isOpen = !desc.hasAttribute('hidden');

    desc.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.textContent = isOpen ? 'Saiba mais' : 'Mostrar menos';
  });
});

const backToTopBtn = document.getElementById('backToTop');

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Esconde o botão se o usuário estiver no topo
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });