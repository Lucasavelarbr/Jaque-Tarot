document.addEventListener('DOMContentLoaded', () => {

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

    // ===== Fade-in nas seções =====
    const faders = document.querySelectorAll('.fade-in, .fade-in-right, .fade-in-up, .fade-in-left');
    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.3,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, appearOptions);

        faders.forEach(fader => appearOnScroll.observe(fader));
    }

    // ===== Cards de Signos/Tarot =====
    const zodiacCards = document.querySelectorAll('.card-container');
    if (zodiacCards.length > 0) {
        zodiacCards.forEach(card => {
            card.addEventListener('click', () => card.classList.toggle('flipped'));
        });
    }

    // ===== Botão Back to Top =====
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.style.display = 'flex';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.display = 'none';
                backToTopBtn.style.opacity = '0';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // ===== Menu Mobile =====
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');
    const navLinks = document.querySelectorAll('.menu-links a');

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', () => {
            menuLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });
        }
    }

});