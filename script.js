document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".conhecimento-card");
  const texto = document.getElementById("texto-conhecimento");

  const textos = {
    pt: {
      csharp: `C# é uma linguagem moderna, tipada e orientada a objetos, amplamente utilizada no desenvolvimento de aplicações desktop e backends robustos.<br><br><strong>Minha experiência:</strong> Trabalho com C# desde o início da carreira, construindo sistemas empresariais sólidos, especialmente no setor financeiro. Uso intensivo de arquitetura em camadas, princípios SOLID e integração com APIs, sempre com foco em performance e manutenção. No projeto BitBeak, utilizei Entity Framework para persistência com foco em produtividade e manutenção limpa.`,
      netcore: `.NET Core é a plataforma ideal para criar APIs RESTful, aplicações cross-platform e serviços leves com alta performance.<br><br><strong>Na prática:</strong> Utilizo em projetos backend modernos, com foco em arquitetura limpa, microsserviços e integração contínua. Aproveito seu desempenho e flexibilidade para entregar soluções escaláveis e seguras.`,
      dotnet: `O .NET Framework é a base de muitos sistemas legados robustos, com amplo suporte a bibliotecas e ferramentas Windows.<br><br><strong>Minha atuação:</strong> Mantenho e evoluo aplicações WinForms integradas ao backend em C#, garantindo estabilidade e atualizações sem comprometer a base existente.`,
      figma: `Figma é a ferramenta que uso para prototipação e design de interfaces web responsivas e bem estruturadas.`,
      html: `HTML é a espinha dorsal da web, responsável pela estruturação semântica do conteúdo.<br><br><strong>Meu domínio:</strong> Escrevo HTML limpo e organizado, priorizando acessibilidade e SEO, além de facilitar o trabalho em equipe no frontend.`,
      css: `CSS é a linguagem que dá estilo e identidade visual às páginas web.<br><br><strong>Na prática:</strong> Uso CSS moderno com foco em responsividade, animações suaves e integração com pré-processadores ou frameworks como Tailwind.`,
      js: `JavaScript permite criar interatividade e lógica no frontend, sendo essencial para qualquer aplicação web moderna.<br><br><strong>Minha experiência:</strong> Desenvolvo SPAs, componentes dinâmicos e interações personalizadas tanto com JS puro quanto com frameworks como React e Angular.`,
      tailwind: `Tailwind é um framework utilitário que acelera o desenvolvimento de interfaces com consistência e responsividade.<br><br><strong>Na prática:</strong> Uso para construir layouts rápidos, limpos e escaláveis, com foco em produtividade e design padronizado.`,
      angular: `Angular é um framework completo para criação de aplicações SPA com arquitetura baseada em componentes, rotas e serviços.<br><br><strong>Como aplico:</strong> Desenvolvo interfaces ricas e modulares com Angular, utilizando TypeScript, RxJS e boas práticas de escalabilidade.`,
      react: `React é uma biblioteca JavaScript para construção de interfaces reativas e performáticas.<br><br><strong>Utilização:</strong> Crio componentes reutilizáveis e dinâmicos em aplicações com foco em experiência do usuário e integração com APIs externas.`,
      next: `Next.js é um framework para React com renderização híbrida, performance otimizada e excelente suporte a SEO.<br><br><strong>Quando uso:</strong> Para aplicações com foco em tempo de carregamento e visibilidade orgânica, aproveitando recursos como SSR e rotas dinâmicas.`,
      svelte: `Svelte é um framework reativo que compila o código para JavaScript puro, sem virtual DOM, oferecendo desempenho excepcional.<br><br><strong>Meu interesse:</strong> Tenho estudado Svelte por sua simplicidade e leveza, sendo promissor para projetos modernos e responsivos.`,
      legenda: `Passe o mouse sobre os cards para saber mais.`,
      nav: ["Home", "Conhecimentos", "Projetos", "Experiências"],
      conhecimentosTitulo: "CONHECIMENTOS",
      heroTexto: `Atuo como desenvolvedor full-stack com foco principal em backend C# e integração de sistemas. No frontend, trabalho com interfaces modernas em WinForms usando DevExpress, além de Angular, React e JavaScript para aplicações web. Tenho experiência em toda a jornada do projeto — da arquitetura à entrega — sempre buscando criar soluções robustas, funcionais e com boa usabilidade.`,
      heroBotaoContato: "Entre em Contato",
      heroBotaoCV: "Download CV"
    },
    en: {
      csharp: `C# is a modern, statically-typed, object-oriented language widely used in building robust desktop and backend applications.<br><br><strong>My experience:</strong> I've worked with C# since the beginning of my career, building solid enterprise systems — especially in the financial sector — using layered architecture, SOLID principles, and API integrations. In the BitBeak project, I used Entity Framework for clean and efficient persistence.`,
      netcore: `.NET Core is the ideal platform for building high-performance RESTful APIs, cross-platform apps, and lightweight services.<br><br><strong>In practice:</strong> I use it for modern backend projects, focusing on clean architecture, microservices, and CI/CD. I take advantage of its performance and flexibility to deliver scalable and secure solutions.`,
      dotnet: `.NET Framework is the backbone of many robust legacy systems, with broad support for Windows libraries and tools.<br><br><strong>My work:</strong> I maintain and evolve WinForms apps integrated with C# backends, ensuring stability and updates without compromising existing infrastructure.`,
      figma: `Figma is the tool I use to prototype and design responsive and well-structured web interfaces.`,
      html: `HTML is the backbone of the web, responsible for semantic structuring of content.<br><br><strong>My approach:</strong> I write clean and accessible HTML, focusing on SEO and maintainability for team collaboration.`,
      css: `CSS brings style and identity to web pages.<br><br><strong>In practice:</strong> I use modern CSS with a focus on responsiveness, smooth animations, and integration with preprocessors or frameworks like Tailwind.`,
      js: `JavaScript enables interactivity and logic in the frontend, essential for any modern web application.<br><br><strong>My experience:</strong> I build SPAs, dynamic components, and personalized interactions with vanilla JS or frameworks like React and Angular.`,
      tailwind: `Tailwind is a utility-first framework that speeds up UI development with consistency and responsiveness.<br><br><strong>In practice:</strong> I use it to create clean, scalable layouts with a focus on productivity and visual consistency.`,
      angular: `Angular is a complete framework for building SPAs with a component-based and service-oriented architecture.<br><br><strong>How I use it:</strong> I create rich, modular UIs using TypeScript, RxJS, and scalable design patterns.`,
      react: `React is a JavaScript library for building reactive and high-performance user interfaces.<br><br><strong>How I apply it:</strong> I create reusable and dynamic components with great user experience and API integration.`,
      next: `Next.js is a React framework with hybrid rendering, optimized performance, and excellent SEO support.<br><br><strong>Use cases:</strong> I build fast-loading apps with dynamic routing and server-side rendering for organic visibility.`,
      svelte: `Svelte is a reactive framework that compiles down to pure JavaScript, offering exceptional performance without a virtual DOM.<br><br><strong>Why I like it:</strong> I study Svelte for its simplicity and lightweight nature, ideal for modern responsive projects.`,
      legenda: `Hover over the cards to learn more.`,
      nav: ["Home", "Skills", "Projects", "Experience"],
      conhecimentosTitulo: "SKILLS",
      heroTexto: `I'm a full-stack developer focused on backend with C# and system integration. On the frontend, I work with modern WinForms (DevExpress), Angular, React and JavaScript. I have experience across the entire project lifecycle — from architecture to delivery — always aiming for robust, functional and user-friendly solutions.`,
      heroBotaoContato: "Contact Me",
      heroBotaoCV: "Download CV"
    }
  };

  let idiomaAtual = "pt";

  function aplicarIdioma(lang) {
    idiomaAtual = lang;

    const navItems = document.querySelectorAll("nav a");
    textos[lang].nav.forEach((text, i) => {
      if (navItems[i]) navItems[i].textContent = text;
    });

    const titulo = document.querySelector("#conhecimentos h2");
    if (titulo) titulo.textContent = textos[lang].conhecimentosTitulo;

    document.querySelector("#home p").innerHTML = textos[lang].heroTexto;

    document.querySelectorAll("#home a")[0].textContent = textos[lang].heroBotaoContato;
    document.querySelectorAll("#home a")[1].textContent = textos[lang].heroBotaoCV;

    const ativo = document.querySelector(".conhecimento-card.ativo");
    const key = ativo?.dataset?.tecnologia || "html";
    texto.innerHTML = textos[lang][key] + `<br><br><span class="text-sm text-gray-400">${textos[lang].legenda}</span>`;

    document.getElementById("currentFlag").src = lang === "pt"
      ? "https://flagcdn.com/16x12/br.png"
      : "https://flagcdn.com/16x12/gb.png";

    document.getElementById("currentLang").textContent = lang.toUpperCase();
  }

  let typed1 = null;
  let typed2 = null;
  let typed3 = null;


  function iniciarTyped(lang) {
  const frases = {
    pt: [
      "Olá, sou Marcos Vinicius,",
      `<span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>Eng. de Software</span> com experiência`,
      `em desenvolvimento <span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>full-stack!</span>`
    ],
    en: [
      "Hi, I'm Marcos Vinicius,",
      `<span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>Software Engineer</span> with experience`,
      `in <span class='text-transparent bg-clip-text inline-block' style='background-image: linear-gradient(90deg, #CF7500, #F0A500);'>full-stack development!</span>`
    ]
  };

  if (typed1) { typed1.destroy(); typed1 = null; }
  if (typed2) { typed2.destroy(); typed2 = null; }
  if (typed3) { typed3.destroy(); typed3 = null; }

  const h1 = document.querySelector("h1");
  h1.innerHTML = `
    <div id="linha1" class="hidden"></div>
    <div id="linha2" class="hidden"></div>
    <div id="linha3" class="hidden"></div>
  `;

  const l1 = document.getElementById("linha1");
  const l2 = document.getElementById("linha2");
  const l3 = document.getElementById("linha3");

  l1.classList.remove("hidden");
  typed1 = new Typed("#linha1", {
    strings: [frases[lang][0]],
    typeSpeed: 45,
    showCursor: false,
    onComplete: () => {
      setTimeout(() => {
        l2.classList.remove("hidden");
        typed2 = new Typed("#linha2", {
          strings: [frases[lang][1]],
          typeSpeed: 40,
          showCursor: false,
          onComplete: () => {
            setTimeout(() => {
              l3.classList.remove("hidden");
              typed3 = new Typed("#linha3", {
                strings: [frases[lang][2]],
                typeSpeed: 40,
                showCursor: false
              });
            }, 150);
          }
        });
      }, 100);
    }
  });
 } 


  let ultimoCard = null;
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      cards.forEach(c => c.classList.remove("hovering", "ativo"));
      card.classList.add("hovering");
      ultimoCard = card;
      const key = card.dataset.tecnologia;
      texto.innerHTML = textos[idiomaAtual][key] + `<br><br><span class="text-sm text-gray-400">${textos[idiomaAtual].legenda}</span>`;
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

  const langMenu = document.getElementById("langMenu");
  if (langMenu) {
    langMenu.querySelectorAll("[data-lang]").forEach(item => {
      item.addEventListener("click", () => {
        const lang = item.dataset.lang;
        aplicarIdioma(lang);
        iniciarTyped(lang);
      });
    });
  }

  const langToggle = document.getElementById("langToggle");

  langToggle.addEventListener("click", () => {
    langMenu.classList.toggle("hidden");
  });


  aplicarIdioma("pt");
  iniciarTyped("pt");
});

// script para o slider de projetos
let slideIndex = 0;
const wrapper = document.getElementById("projetosWrapper");
const totalCards = 5;
const cardsPorTela = 2;
const maxIndex = totalCards - cardsPorTela;

document.getElementById("prevProjeto").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
  wrapper.style.transform = `translateX(-${slideIndex * 50}%)`;
});

document.getElementById("nextProjeto").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % (maxIndex + 1);
  wrapper.style.transform = `translateX(-${slideIndex * 50}%)`;
});

// script para o modal de projetos
const modal = document.getElementById("modalProjeto");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalAno = document.getElementById("modalAno");
const modalVideo = document.getElementById("modalVideo");
const modalBotoes = document.getElementById("modalBotoes");

const projetos = [
  {
    id: "bitbeak",
    titulo_pt: "BitBeak",
    titulo_en: "BitBeak",
    ano: "2024",
    descricao_pt: "Ferramenta gamificada de ensino de programação desenvolvida como TCC.",
    descricao_en: "Ferramenta gamificada de ensino de programação desenvolvida como TCC.",
    video: "https://www.youtube.com/watch?v=EVYuPaON3WM",
    botoes: [
      { label: "Repositório", url: "https://github.com/orgs/BitBeak/repositories" },
      { label: "Mangás", url: "https://bitbeak.com/mangas" },
      { label: "Figma", url: "https://www.figma.com/proto/YJ1eG3DorMAs232tWcoe26/BitBeak?node-id=768-65&p=f&t=GUEUXawIudNkuFAy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
      { label: "Post LinkedIn", url: "https://www.linkedin.com/posts/marcosviniciussa_h%C3%A1-cerca-de-um-m%C3%AAs-realizei-a-%C3%BAltima-apresenta%C3%A7%C3%A3o-activity-7275892876104880128-HLgd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-148oBRSguSUWgqHnMYqdzwLz5oxvMhnQ" },
      { label: "Artigo", tooltip: "O artigo do projeto está em fase de revisão" }
    ]
  },
  {
    id: "jmh",
    titulo_pt: "JMH Caçambas",
    titulo_en: "JMH Caçambas",
    ano: "2025",
    descricao_pt: "Site institucional para empresa de aluguel de caçambas.",
    descricao_en: "Ferramenta gamificada de ensino de programação desenvolvida como TCC.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label: "Site", url: "https://jmh.com.br" },
      { label: "Figma", url: "https://figma.com" }
    ]
  },
  {
    id: "oasis",
    titulo_pt: "Oásis Studio Academy",
    titulo_en: "Oásis Studio Academy",
    ano: "2024",
    descricao_pt: "Site institucional para empresa de aluguel de caçambas.",
    descricao_en: "Ferramenta gamificada de ensino de programação desenvolvida como TCC.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label: "Site", url: "https://jmh.com.br" },
      { label: "Figma", url: "https://figma.com" }
    ]
  },
  {
    id: "inspire",
    titulo_pt: "Inspire Tech Company",
    titulo_en: "Inspire Tech Company",
    ano: "2024",
    descricao_pt: "Site institucional para empresa de aluguel de caçambas.",
    descricao_en: "Site institucional para empresa de aluguel de caçambas.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label: "Repositório", url: "https://github.com/Inspire-Tech-Company/inspire-tech" },
      { label: "Figma", url: "https://figma.com" }
    ]
  },
   {
    id: "clientesApi",
    titulo_pt: "ClientesAPI",
    titulo_en: "ClientsAPI",
    ano: "2025",
    descricao_pt: "API para cadasstro de clientes",
    descricao_en: "API para cadasstro de clientes",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label: "Repositório", url: "https://github.com/Marcola20/ClientsAPI" }
    ]
  }
];

document.querySelectorAll("#projetosWrapper > div").forEach(container => {
  const card = container.querySelector(".group");
  if (!card) return;

  card.addEventListener("click", () => {
    const projetoId = container.dataset.id;
    const projeto = projetos.find(p => p.id === projetoId);

    if (!projeto) return;

    modalTitulo.textContent = idiomaAtual === "pt" ? projeto.titulo_pt : projeto.titulo_en;
    modalDescricao.textContent = idiomaAtual === "pt" ? projeto.descricao_pt : projeto.descricao_en;
    modalAno.textContent = projeto.ano;
    modalVideo.src = projeto.video;
    modalBotoes.innerHTML = "";

    projeto.botoes.forEach(botao => {
      const btn = document.createElement("a");
      btn.className = "bg-[#F0A500] text-black px-4 py-2 rounded font-medium text-sm hover:bg-[#F0B433] transition";
      btn.textContent = botao.label;

      if (botao.url) {
        btn.href = botao.url;
        btn.target = "_blank";
      } else if (botao.tooltip) {
        btn.classList.add("cursor-not-allowed", "opacity-60", "relative");
        btn.setAttribute("title", botao.tooltip);
      }

      modalBotoes.appendChild(btn);
    });

    modal.classList.remove("hidden");
  });
});

document.getElementById("fecharModal").addEventListener("click", () => {
  modal.classList.add("hidden");
  modalVideo.src = "";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modalVideo.src = "";
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    modalVideo.src = "";
  }
});

