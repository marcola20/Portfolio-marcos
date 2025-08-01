let idiomaAtual = "pt"; 

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
      nav: ["Home", "Conhecimentos", "Projetos", "Experiência"],
      conhecimentosTitulo: "CONHECIMENTOS",
      heroTexto: `Atuo como desenvolvedor full-stack com foco principal em backend C# e integração de sistemas. No frontend, trabalho com interfaces modernas em WinForms usando DevExpress, além de Angular, React e JavaScript para aplicações web. Tenho experiência em toda a jornada do projeto — da arquitetura à entrega — sempre buscando criar soluções robustas, funcionais e com boa usabilidade.`,
      heroBotaoContato: "Entre em Contato",
      heroBotaoCV: "Download CV",
      projetosTitulo: "PROJETOS"
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
      heroBotaoCV: "Download CV",
      projetosTitulo: "PROJECTS"
    }
  };

  function aplicarIdioma(lang) {
    idiomaAtual = lang;

    const navItems = document.querySelectorAll("nav a");
    textos[lang].nav.forEach((text, i) => {
      if (navItems[i]) navItems[i].textContent = text;
    });

    const titulo = document.querySelector("#conhecimentos h2");
    if (titulo) titulo.textContent = textos[lang].conhecimentosTitulo;

    const tituloProjetos = document.querySelector("#projetos h2");
    if (tituloProjetos) tituloProjetos.textContent = textos[lang].projetosTitulo;

    document.querySelector("#home p").innerHTML = textos[lang].heroTexto;

    document.querySelectorAll("#home a")[0].textContent = textos[lang].heroBotaoContato;
    document.querySelectorAll("#home a")[1].textContent = textos[lang].heroBotaoCV;

    const ativo = document.querySelector(".conhecimento-card.ativo");
    const key = ativo?.dataset?.tecnologia || "html";
    texto.innerHTML = textos[lang][key] + `<br><br><span class="text-sm text-gray-400">${textos[lang].legenda}</span>`;

    document.getElementById("currentFlag").src = lang === "pt" ? "https://flagcdn.com/16x12/br.png" : "https://flagcdn.com/16x12/gb.png";
    document.getElementById("currentLang").textContent = lang.toUpperCase();

    const tituloExp = document.getElementById("experienciasTitulo");
    if (tituloExp) tituloExp.textContent = lang === "pt" ? "EXPERIÊNCIA" : "EXPERIENCE";
    renderizarExperiencias(lang);

    traduzirFooter(lang);
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

        langMenu.classList.add("hidden");
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
const wrapper = document.getElementById("projetosWrapper");
const cards = wrapper.querySelectorAll("div[data-id]");
const isMobile = window.innerWidth < 768;
const cardsPorTela = isMobile ? 1 : 2;
const cardWidthPercent = 100 / cardsPorTela;

let slideIndex = cardsPorTela; 

for (let i = 0; i < cardsPorTela; i++) {
  const cloneInicio = cards[i].cloneNode(true);
  const cloneFim = cards[cards.length - 1 - i].cloneNode(true);
  wrapper.appendChild(cloneInicio);
  wrapper.insertBefore(cloneFim, wrapper.firstChild);
}

const todosCards = wrapper.querySelectorAll("div[data-id]");
const totalCards = todosCards.length;

wrapper.style.transform = `translateX(-${slideIndex * cardWidthPercent}%)`;


function updateSlider(animate = true) {
  if (!animate) wrapper.style.transition = "none";
  else wrapper.style.transition = "transform 0.5s ease-in-out";

  wrapper.style.transform = `translateX(-${slideIndex * cardWidthPercent}%)`;
}

document.getElementById("nextProjeto").addEventListener("click", () => {
  slideIndex++;
  updateSlider();

  if (slideIndex >= totalCards - cardsPorTela) {
    setTimeout(() => {
      slideIndex = cardsPorTela;
      updateSlider(false);
    }, 500); 
  }
});



// script para o modal de projetos
const modal = document.getElementById("modalProjeto");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalData = document.getElementById("modalData");
const modalVideo = document.getElementById("modalVideo");
const modalBotoes = document.getElementById("modalBotoes");

const projetos = [
  {
    id: "bitbeak",
    titulo_pt: "BitBeak",
    titulo_en: "BitBeak",
    data_pt: "25 de novembro de 2024",
    data_en: "November 25, 2024",
    descricao_pt: "BitBeak é uma ferramenta gamificada criada para apoiar o ensino de programação. Inspirado em plataformas como o Duolingo, o projeto busca tornar o aprendizado mais leve, acessível e progressivo, especialmente para iniciantes que enfrentam dificuldades nas primeiras disciplinas de programação.<br><br>A plataforma oferece um ambiente interativo onde os usuários podem se cadastrar, fazer login e iniciar uma trilha de aprendizagem dividida em níveis. Cada nível conta com quizzes interativos, desafios para jogar com amigos, e um diferencial visual: mangás educativos que explicam os conceitos de forma contextualizada e envolvente. O sistema de progresso é baseado em experiência e ranking, promovendo engajamento contínuo.<br><br>No backend, foi utilizado C# com .NET e Entity Framework, escolhidos pela robustez, tipagem forte e facilidade de manter regras de negócio complexas com segurança e performance. Já no frontend, o React foi adotado pela sua flexibilidade, componentização e excelente desempenho em interfaces ricas e dinâmicas.",
    descricao_en: "BitBeak is a gamified tool designed to support programming education. Inspired by platforms like Duolingo, the project aims to make learning more accessible, progressive, and enjoyable—especially for beginners struggling with early programming subjects.<br><br>The platform provides an interactive environment where users can register, log in, and follow a structured learning path divided into levels. Each level features interactive quizzes, friend challenges, and a visual highlight: educational manga that explains programming concepts through engaging storytelling. Progress is based on experience points and ranking, encouraging ongoing engagement.<br><br>The backend was built using C# with .NET and Entity Framework, chosen for their robustness, strong typing, and ability to enforce complex business rules with reliability and performance. On the frontend, React was used for its flexibility, component-based architecture, and high performance in dynamic UIs.",
    video: "https://www.youtube.com/embed/EVYuPaON3WM",
    botoes: [
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/orgs/BitBeak/repositories" },
      { label_pt: "Mangás", label_en: "Mangas", href: "assets/Bit_Beak_Mangas.pdf", download: true  },
      { label_pt: "Figma", label_en: "Figma", url: "https://www.figma.com/proto/YJ1eG3DorMAs232tWcoe26/BitBeak?node-id=768-65&p=f&t=GUEUXawIudNkuFAy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
      { label_pt: "Post LinkedIn", label_en: "LinkedIn Post", url: "https://www.linkedin.com/posts/marcosviniciussa_h%C3%A1-cerca-de-um-m%C3%AAs-realizei-a-%C3%BAltima-apresenta%C3%A7%C3%A3o-activity-7275892876104880128-HLgd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-148oBRSguSUWgqHnMYqdzwLz5oxvMhnQ" },
      { label_pt: "Artigo", label_en: "Paper", tooltip_pt: "O artigo do projeto está em fase de revisão", tooltip_en: "The paper is currently under review" }
    ]
  },
  {
    id: "jmh",
    titulo_pt: "JMH Caçambas",
    titulo_en: "JMH Caçambas",
    data_pt: "16 de junho de 2025",
    data_en: "June 16, 2025",
    descricao_pt: "Site institucional desenvolvido para a empresa de aluguel de caçambas JMH, com o objetivo de modernizar sua presença digital. Participei de todo o processo — desde a pesquisa e prototipação até o desenvolvimento final. <br><br>O site foi construído com HTML, Tailwind CSS e JavaScript, garantindo um visual responsivo e moderno. Um dos destaques é a integração de um modelo 3D personalizado criado no Blender, trazendo um diferencial visual à apresentação dos serviços.",
    descricao_en: "Institutional website developed for JMH, a dumpster rental company, aiming to modernize its digital presence. I was involved in the entire process — from research and prototyping to final development. <br><br>The site was built using HTML, Tailwind CSS, and JavaScript, ensuring a modern and responsive interface. A key highlight is the integration of a custom 3D model created in Blender, adding a unique visual element to the service presentation.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label_pt: "Site", label_en: "Site", url: "https://www.jmhengenharia.com.br/" },
      { label_pt: "Figma", label_en: "Figma", url: "https://www.figma.com/proto/yoB88blJrnHpzuB2fGO9h0/JMH-Ca%C3%A7ambas?node-id=1-4&t=cU6ujcqQ4jieejy4-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4" }
    ]
  },
  {
    id: "oasis",
    titulo_pt: "Oásis Beauty Academy",
    titulo_en: "Oásis Beauty Academy",
    data_pt: "01 de julho de 2024",
    data_en: "July 01, 2024",
    descricao_pt: "Participei de toda a criação do site institucional do Oásis Beauty Academy. Desde a pesquisa inicial e conversas com a nova proprietária, o projeto foi pensado para dar uma nova identidade ao estúdio, que passava por um processo de transição de gestão. A proposta foi construir algo único, que representasse essa nova fase da empresa.<br><br>Um dos diferenciais do site é a seção “Dia da Noiva”, onde as noivas podem montar sua experiência personalizada, escolhendo serviços como maquiagem, cabelo, estética, nail art e lash design — tudo em um só lugar.<br><br>O site foi desenvolvido com Svelte, uma tecnologia moderna e performática que oferece excelente responsividade e simplicidade no desenvolvimento, ideal para um projeto leve e dinâmico. Também utilizei JavaScript e CSS puro para complementar interações e estilo.",
    descricao_en: "I was involved in the full development of the institutional website for Oásis Beauty Academy. From early research and client conversations to the final delivery, the project was designed to give the studio a fresh identity, reflecting its transition to new ownership and a unique vision for the future.<br><br>One of the standout features is the “Bride’s Day” section, where brides can personalize their special day by selecting services like makeup, hair, aesthetics, nail art, and lash design — all in one place.<br><br>The site was built using Svelte, a modern and performant framework that provides excellent responsiveness and a smooth development experience — perfect for a lightweight, dynamic site. JavaScript and plain CSS were also used to enhance interactions and styling.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label_pt: "Site", label_en: "Site", url: "https://oasisbeautyacademy.com/" },
      { label_pt: "Figma", label_en: "Figma", url: "https://www.figma.com/proto/aRhJufXs2lF4Jp1YrUUP3O/Oasis-Studio?node-id=26-45545&p=f&t=o3MrnQojOrPQvQbq-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A45545" }
    ]
  },
  {
    id: "inspire",
    titulo_pt: "Inspire Tech Company",
    titulo_en: "Inspire Tech Company",
    data_pt: "02 de setembro de 2024",
    data_en: "September 02, 2024",
    descricao_pt: "Site institucional criado para a Inspire Tech Company, uma empresa focada em marketing e publicidade. Durante minha atuação na equipe, fui responsável por desenvolver todo o site do zero, incluindo layout, identidade visual e estrutura funcional.<br><br>O objetivo era transmitir inovação, confiança e profissionalismo para potenciais clientes. Para isso, utilizei uma paleta escura contrastando com tons vibrantes de roxo, reforçando modernidade e criatividade. A página principal foi pensada para causar impacto logo de início, com mensagens diretas, destaques de serviços e cases de sucesso.<br><br>O desenvolvimento foi feito com HTML, CSS e TypeScript, garantindo código limpo, organizado e performático. Cada seção foi desenhada para entregar clareza na navegação e destacar os diferenciais da empresa de forma objetiva e visualmente marcante.",
    descricao_en: "Institutional website created for Inspire Tech Company, a business focused on marketing and advertising. While working with the team, I was responsible for developing the entire site from scratch — including layout, visual identity, and functional structure.<br><br>The goal was to convey innovation, trust, and professionalism to potential clients. A dark color palette combined with vibrant purple accents was used to reflect modernity and creativity. The homepage was designed to make an immediate impact, with direct messages, highlighted services, and success stories.<br><br>The development was done using HTML, CSS, and TypeScript, ensuring clean, organized, and high-performance code. Each section was built to deliver intuitive navigation and clearly showcase the company’s strengths in a visually compelling way.",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    botoes: [
      { label_pt: "Repositório", label_en: "Repository", url: "https://github.com/Inspire-Tech-Company/inspire-tech" },
      { label_pt: "Figma", label_en: "Figma", url: "https://www.figma.com/proto/B6LStoR4BA6HSCLwl3VcQV/Inspire-Tech?node-id=1-2&t=r4nXK6dE3SUr5QyT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=149%3A4&show-proto-sidebar=1" },
      { label_pt: "Site", label_en: "Site", tooltip_pt: "O site atualmente está fora do ar.", tooltip_en: "The website is currently offline." }
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
    modalDescricao.innerHTML = idiomaAtual === "pt" ? projeto.descricao_pt : projeto.descricao_en;
    modalData.textContent = idiomaAtual === "pt" ? projeto.data_pt : projeto.data_en;
    modalVideo.src = projeto.video;
    modalBotoes.innerHTML = "";

    projeto.botoes.forEach(botao => {
      const btn = document.createElement("a");
      btn.className = "bg-[#F0A500] text-black px-4 py-2 rounded font-medium text-sm hover:bg-[#F0B433] transition";
      btn.textContent = idiomaAtual === "pt" ? botao.label_pt : botao.label_en;

      if (botao.url) {
        btn.href = botao.url;
        btn.target = "_blank";
      } else if (botao.href) {
        btn.href = botao.href;
        if (botao.download) {
          btn.setAttribute("download", "");
        }
      } else if (botao.tooltip_pt || botao.tooltip_en) {
        btn.classList.add("cursor-not-allowed", "opacity-60", "relative");
        btn.setAttribute("title", idiomaAtual === "pt" ? botao.tooltip_pt : botao.tooltip_en);
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

const experiencias = [
  {
    id: "magware",
    empresa: "MAG.WARE",
    icon: "icons/magware_logo.png",
    cargo_pt: "Engenheiro de Software na ",
    cargo_en: "Software Engineer at ",
    data_pt: "Dez 2024 — Atualmente",
    data_en: "Dec 2024 — Present",
    descricao_pt: `Atuo como engenheiro de software especializado em aplicações desktop desenvolvidas com C#, WinForms e DevExpress, criando soluções robustas, escaláveis e de alta performance voltadas ao setor financeiro. Sou responsável por projetar arquiteturas eficientes, modernizar sistemas legados, otimizar fluxos internos e integrar serviços via WebServices (REST/SOAP). Também colaboro na criação de interfaces ricas com componentes personalizados, sempre aplicando boas práticas de codificação e metodologias ágeis para garantir qualidade, manutenção e evolução contínua dos projetos.`,
    descricao_en: `I work as a software engineer specialized in desktop applications using C#, WinForms, and DevExpress, building robust, scalable, and high-performance solutions for the financial sector. I’m responsible for designing efficient architectures, modernizing legacy systems, optimizing internal workflows, and integrating services through WebServices (REST/SOAP). I also contribute to the development of rich interfaces with custom components, applying clean code practices and agile methodologies to ensure quality, maintainability, and continuous improvement.`
  },
  {
    id: "inspire",
    empresa: "Inspire Tech Company",
    icon: "icons/inspire_logo.png",
    cargo_pt: "Engenheiro de Software na ",
    cargo_en: "Software Engineer at ",
    data_pt: "Abr 2024 — Dez 2024",
    data_en: "Apr 2024 — Dec 2024",
    descricao_pt: `Atuei como desenvolvedor full stack em todo o ciclo de vida dos projetos, desde a análise inicial e definição de requisitos até o design, desenvolvimento e entrega final. Trabalhei com tecnologias modernas de front-end e back-end, contribuindo na construção de sistemas web responsivos, eficientes e alinhados aos objetivos estratégicos da empresa. Tive participação ativa na criação de interfaces intuitivas, integração com APIs e aplicação de boas práticas de desenvolvimento para garantir escalabilidade e manutenibilidade dos produtos.`,
    descricao_en: `Worked as a full-stack developer throughout the entire project lifecycle — from initial analysis and requirement gathering to design, development, and final delivery. Used modern front-end and back-end technologies to build responsive and efficient web systems aligned with the company's strategic goals. Actively contributed to creating intuitive interfaces, integrating APIs, and applying best development practices to ensure scalability and maintainability.`
  },
  {
    id: "spro",
    empresa: "Spro IT Solutions",
    icon: "icons/spro_logo.png",
    cargo_pt: "Desenvolvedor Back-End na ",
    cargo_en: "Back-End Developer at ",
    data_pt: "Jul 2022 — Abr 2024",
    data_en: "Jul 2022 — Apr 2024",
    descricao_pt: `Atuei no desenvolvimento de APIs robustas em C# .NET integradas a bancos de dados PostgreSQL para um sistema de IoT voltado à telemetria agrícola. Participei da implantação de soluções em ambiente Docker, garantindo escalabilidade e portabilidade. Também fui responsável pela integração dos dados com plataformas web (React + Next.js) e aplicações mobile (React Native), promovendo a visualização eficiente das informações em tempo real.`,
    descricao_en: `Worked on the development of robust APIs in C# .NET integrated with PostgreSQL databases for an IoT system focused on agricultural telemetry. Contributed to deploying scalable and portable solutions using Docker. Also handled data integration with web platforms (React + Next.js) and mobile applications (React Native), enabling real-time and efficient data visualization.`
  }
];

function renderizarExperiencias(lang) {
  const wrapper = document.getElementById("experienciasWrapper");
  if (!wrapper) return;

  wrapper.innerHTML = experiencias.map(exp => `
    <div class="flex flex-row md:flex-row gap-4 sm:gap-6 items-start">
      <img src="${exp.icon}" alt="${exp.empresa}" class="w-6 h-6 sm:w-12 sm:h-12 object-contain mt-1"/>
      <div class="flex-1">
        <div class="flex justify-between flex-wrap items-center gap-x-2">
          <h3 class="text-base sm:text-2xl font-bold text-white">
            ${lang === "pt" ? exp.cargo_pt : exp.cargo_en}
            <span class="bg-gradient-to-r from-[#F0A500] to-[#CF7500] text-transparent bg-clip-text">
              ${exp.empresa}
            </span>
          </h3>
          <p class="text-xs sm:text-sm text-[#8491A0]">${lang === "pt" ? exp.data_pt : exp.data_en}</p>
        </div>
        <p class="text-[#C5C5C5] mt-3 text-xs sm:text-sm leading-relaxed text-justify">${lang === "pt" ? exp.descricao_pt : exp.descricao_en}</p>
      </div>
    </div>
  `).join("");
}

 function traduzirFooter(lang) {
  const contatoTitulo = document.getElementById("contatoTitulo");
  if (contatoTitulo) {
    contatoTitulo.textContent = lang === "pt" ? "ENTRE EM CONTATO" : "GET IN TOUCH";
  }
}
