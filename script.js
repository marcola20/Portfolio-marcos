document.addEventListener("DOMContentLoaded", function () {
  // Animação das linhas
  const l1 = document.getElementById("linha1");
  const l2 = document.getElementById("linha2");
  const l3 = document.getElementById("linha3");

  l1.classList.remove("hidden");
  new Typed("#linha1", {
    strings: ["Olá, sou Marcos Vinicius,"],
    typeSpeed: 45,
    showCursor: false,
    onComplete: () => {
      l2.classList.remove("hidden");
      new Typed("#linha2", {
        strings: [
          `<span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>Eng. de Software</span> com experiência`
        ],
        typeSpeed: 40,
        showCursor: false,
        onComplete: () => {
          l3.classList.remove("hidden");
          new Typed("#linha3", {
            strings: [
              `em desenvolvimento <span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>full-stack!</span>`
            ],
            typeSpeed: 40,
            showCursor: false
          });
        }
      });
    }
  });

    const textos = {
    html: `
        HTML é a espinha dorsal da web, responsável pela estruturação semântica do conteúdo.<br><br>
        <strong>Meu domínio:</strong> Escrevo HTML limpo e organizado, priorizando acessibilidade e SEO, além de facilitar o trabalho em equipe no frontend.
    `,

    css: `
        CSS é a linguagem que dá estilo e identidade visual às páginas web.<br><br>
        <strong>Na prática:</strong> Uso CSS moderno com foco em responsividade, animações suaves e integração com pré-processadores ou frameworks como Tailwind.
    `,

    js: `
        JavaScript permite criar interatividade e lógica no frontend, sendo essencial para qualquer aplicação web moderna.<br><br>
        <strong>Minha experiência:</strong> Desenvolvo SPAs, componentes dinâmicos e interações personalizadas tanto com JS puro quanto com frameworks como React e Angular.
    `,

    tailwind: `
        Tailwind é um framework utilitário que acelera o desenvolvimento de interfaces com consistência e responsividade.<br><br>
        <strong>Na prática:</strong> Uso para construir layouts rápidos, limpos e escaláveis, com foco em produtividade e design padronizado.
    `,

    angular: `
        Angular é um framework completo para criação de aplicações SPA com arquitetura baseada em componentes, rotas e serviços.<br><br>
        <strong>Como aplico:</strong> Desenvolvo interfaces ricas e modulares com Angular, utilizando TypeScript, RxJS e boas práticas de escalabilidade.
    `,

    react: `
        React é uma biblioteca JavaScript para construção de interfaces reativas e performáticas.<br><br>
        <strong>Utilização:</strong> Crio componentes reutilizáveis e dinâmicos em aplicações com foco em experiência do usuário e integração com APIs externas.
    `,

    next: `
        Next.js é um framework para React com renderização híbrida, performance otimizada e excelente suporte a SEO.<br><br>
        <strong>Quando uso:</strong> Para aplicações com foco em tempo de carregamento e visibilidade orgânica, aproveitando recursos como SSR e rotas dinâmicas.
    `,

    svelte: `
        Svelte é um framework reativo que compila o código para JavaScript puro, sem virtual DOM, oferecendo desempenho excepcional.<br><br>
        <strong>Meu interesse:</strong> Tenho estudado Svelte por sua simplicidade e leveza, sendo promissor para projetos modernos e responsivos.
    `
    };


  const cards = document.querySelectorAll(".conhecimento-card");
  const texto = document.getElementById("texto-conhecimento");

  let ultimoCard = null;

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      cards.forEach(c => {
        c.classList.remove("hovering", "ativo");
      });

      card.classList.add("hovering");
      ultimoCard = card;

      const key = card.dataset.tecnologia;
      texto.innerHTML = textos[key] + `<br><br><span class="text-sm text-gray-400">Passe o mouse sobre os cards para saber mais.</span>`;
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovering");

      setTimeout(() => {
        const algumCardHover = Array.from(cards).some(c => c.matches(":hover"));

        if (!algumCardHover && ultimoCard) {
          ultimoCard.classList.add("ativo");
        }
      }, 50);
    });
  });
});
