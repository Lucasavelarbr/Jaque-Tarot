    // ===== Tema Dark/Light =====
    const themeToggleBtn = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');

    if (themeToggleBtn && moonIcon) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            moonIcon.classList.remove('bi-moon');
            moonIcon.classList.add('bi-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark');
            if (isDark) {
                moonIcon.classList.remove('bi-moon');
                moonIcon.classList.add('bi-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                moonIcon.classList.add('bi-moon');
                moonIcon.classList.remove('bi-sun');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // ====== Menu Mobile
    
    const toggleMenu = document.getElementById("toggle-menu")
    const menu = document.querySelector(".menu-mobile")

    toggleMenu.addEventListener("click", () =>{
        menu.classList.toggle("open")
    })

    //  ==== Fecha o menu ao clicar em algum ítem

    document.querySelectorAll("a").forEach(link =>{
       link.addEventListener("click", () =>{
        menu.classList.remove("open")
       }) 
    })

    // === Fecha ao clicar fora
    document.addEventListener("click", (e) =>{
        const ClicksideMenu = menu.contains(e.target)
        const ClickButton = toggleMenu.contains(e.target)

        if (!ClickButton && !ClicksideMenu){
            menu.classList.remove("open")
        }
    })

    // Fecha ao clicar com o "ESC" do teclado
    document.addEventListener("keydown", (e) =>{
        if(e.key === "Escape"){
            menu.classList.remove("open")
        }
    })

    // ===== Cards de Signos/Tarot =====
    const zodiacCards = document.querySelectorAll('.card-container');
    if (zodiacCards.length > 0) {
        zodiacCards.forEach(card => {
            card.addEventListener('click', () => card.classList.toggle('flipped'));
        });
    }

    // ===== Numerologia =====
    const numerologyData = {
        1: "O Pioneiro: Você é um líder nato, criativo e independente...",
        2: "O Diplomata: Você é cooperativo, empático e busca a harmonia...",
        3: "O Comunicador: Você é expressivo, sociável e otimista...",
        4: "O Construtor: Você é prático, organizado e trabalhador...",
        5: "O Aventureiro: Você é dinâmico, livre e adaptável...",
        6: "O Cuidador: Você é responsável, amoroso e protetor...",
        7: "O Sábio: Você é introspectivo, analítico e busca a verdade...",
        8: "O Gerente: Você é ambicioso, poderoso e busca sucesso material...",
        9: "O Humanitário: Você é compassivo, idealista e generoso...",
        11: "O Mestre Espiritual: O 11 é um número mestre...",
        22: "O Construtor Mestre: O 22 é o número da construção em larga escala..."
    };

    const calculateBtn = document.getElementById('calculate-btn');
    const birthdateInput = document.getElementById('birthdate');
    const numerologyResultDiv = document.getElementById('numerology-result');
    const numerologyNumberH3 = document.getElementById('numerology-number');
    const numerologyMeaningP = document.getElementById('numerology-meaning');

    if (calculateBtn && birthdateInput && numerologyResultDiv && numerologyNumberH3 && numerologyMeaningP) {
        calculateBtn.addEventListener('click', () => {
            const birthdate = birthdateInput.value;
            if (!birthdate) return alert('Por favor, insira sua data de nascimento.');

            const sumDigits = (num) => {
                let sum = 0;
                while (num > 0 || sum > 9) {
                    if (num === 0) { num = sum; sum = 0; }
                    sum += num % 10;
                    num = Math.floor(num / 10);
                }
                return sum;
            };

            const [year, month, day] = birthdate.split('-').map(Number);
            let lifePath = sumDigits(day) + sumDigits(month) + sumDigits(year);
            if (lifePath !== 11 && lifePath !== 22) lifePath = sumDigits(lifePath);

            const meaning = numerologyData[lifePath] || "Não foi possível calcular. Verifique a data.";
            numerologyNumberH3.textContent = `Seu Número é: ${lifePath}`;
            numerologyMeaningP.textContent = meaning;
            numerologyResultDiv.classList.add('visible');
        });
    }

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