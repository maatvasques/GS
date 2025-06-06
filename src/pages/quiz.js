document.getElementById("icone").style.filter = "brightness(0) invert(1)";
document.getElementById("arrow__right").style.filter =
  "brightness(0) invert(1)";

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  let currentTheme = savedTheme || "light";

  function setTheme(theme) {
    body.classList.remove("light-mode", "dark-mode", "eclipse-mode");
    body.classList.add(`${theme}-mode`);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      themeIcon.src = "./src/assets/images/simbulo-lua.png";
      themeIcon.alt = "Modo Escuro";
    } else if (theme === "eclipse") {
      themeIcon.src = "./src/assets/images/simbulo-eclipse.png";
      themeIcon.alt = "Modo Eclipse";
    } else {
      themeIcon.src = "./src/assets/images/simbulo-sol.png";
      themeIcon.alt = "Modo Claro";
    }
    currentTheme = theme;
  }

  setTheme(currentTheme);

  darkModeToggle.addEventListener("click", function () {
    if (currentTheme === "light") {
      setTheme("dark");
    } else if (currentTheme === "dark") {
      setTheme("eclipse");
    } else {
      setTheme("light");
    }
  });

  const perguntas = [
    {
      pergunta:
        "O que pode contribuir para o aumento de enchentes nas cidades?",
      opcoes: [
        "Plantio de árvores em encostas",
        "Uso de pavimentos permeáveis",
        "Descarte de lixo em vias públicas",
        "Preservação de áreas verdes",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual prática ajuda a prevenir enchentes?",
      opcoes: [
        "Desmatamento de áreas verdes",
        "Construção de prédios em áreas de mananciais",
        "Preservação de matas ciliares",
        "Canalização de rios sem controle",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é um sistema de drenagem urbana?",
      opcoes: [
        "Rede de esgotos domésticos",
        "Sistema de coleta e escoamento de águas pluviais",
        "Canal de irrigação para agricultura",
        "Rede elétrica subterrânea",
      ],
      correta: 1,
    },
    {
      pergunta:
        "Qual material é mais recomendado para pisos que evitam enchentes?",
      opcoes: [
        "Concreto convencional",
        "Asfalto",
        "Pavimento permeável",
        "Madeira tratada",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é uma bacia de retenção?",
      opcoes: [
        "Piscina pública",
        "Área destinada a acumular água da chuva temporariamente",
        "Reservatório de água potável",
        "Depósito de lixo reciclável",
      ],
      correta: 1,
    },
    {
      pergunta: "Como o lixo contribui para enchentes?",
      opcoes: [
        "Aumenta a biodiversidade dos rios",
        "Obstrui bueiros e impede o escoamento da água",
        "Facilita a infiltração da água no solo",
        "Melhora o sistema de drenagem urbana",
      ],
      correta: 1,
    },
    {
      pergunta: "O que são matas ciliares?",
      opcoes: [
        "Florestas nas montanhas",
        "Vegetação às margens dos rios",
        "Árvores em praças públicas",
        "Áreas destinadas à agricultura",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual ação cidadã ajuda a reduzir enchentes?",
      opcoes: [
        "Jogar lixo nas ruas",
        "Plantar árvores e preservar áreas verdes",
        "Construir casas nas margens de rios",
        "Desmatar áreas urbanas",
      ],
      correta: 1,
    },
    {
      pergunta: "O que são áreas de risco de enchentes?",
      opcoes: [
        "Locais elevados e afastados de rios",
        "Regiões próximas a rios e encostas suscetíveis a alagamentos",
        "Praias e regiões litorâneas",
        "Parques e praças públicas",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual destes fatores mais agrava os impactos das enchentes?",
      opcoes: [
        "Planejamento urbano adequado",
        "Preservação de áreas verdes",
        "Impermeabilização excessiva do solo",
        "Construção de parques lineares",
      ],
      correta: 2,
    },
  ];

  let perguntaAtual = 0;
  let pontuacao = 0;
  let respondeu = false;

  const quizForm = document.getElementById("quizForm");
  const perguntaEl = document.querySelector(".pergunta");
  const opcoesEl = document.querySelector(".opcoes");
  const proximaBtn = document.querySelector(".proxima");
  const resultadoEl = document.getElementById("resultado");

  // Criação do contador
  const contadorProgresso = document.createElement("div");
  contadorProgresso.id = "contador";
  contadorProgresso.style.textAlign = "center";
  contadorProgresso.style.marginBottom = "20px";
  contadorProgresso.style.fontSize = "1.2rem";
  contadorProgresso.style.fontWeight = "bold";
  quizForm.prepend(contadorProgresso);

  function atualizarContador() {
    const numeroQuestao = (perguntaAtual + 1).toString().padStart(2, "0");
    const totalQuestoes = perguntas.length.toString().padStart(2, "0");
    contadorProgresso.textContent = `${numeroQuestao}/${totalQuestoes}`;
  }

  function carregarPergunta() {
    respondeu = false;
    atualizarContador();
    perguntaEl.textContent = perguntas[perguntaAtual].pergunta;
    opcoesEl.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {
      const label = document.createElement("label");
      label.className = "opcao";
      label.innerHTML = `<input type="radio" name="q${perguntaAtual}" value="${index}"> <span>${opcao}</span>`;
      label.addEventListener("click", () => selecionarOpcao(label));
      opcoesEl.appendChild(label);
    });
  }

  function mostrarResposta() {
    const selecionado = document.querySelector(
      `input[name="q${perguntaAtual}"]:checked`
    );
    if (!selecionado) {
      alert("Por favor, selecione uma resposta!");
      return false;
    }

    const resposta = parseInt(selecionado.value);
    const opcoesLabels = document.querySelectorAll(".opcao");

    opcoesLabels.forEach((label, index) => {
      const input = label.querySelector("input");
      if (index === perguntas[perguntaAtual].correta) {
        label.style.backgroundColor = "#4CAF50";
        label.style.color = "white";
      } else if (input.checked) {
        label.style.backgroundColor = "#FF4C4C";
        label.style.color = "white";
      }
      input.disabled = true;
    });

    if (resposta === perguntas[perguntaAtual].correta) {
      pontuacao++;
    }

    respondeu = true;
    return true;
  }

  proximaBtn.addEventListener("click", () => {
    if (!respondeu) {
      if (!mostrarResposta()) return;
      proximaBtn.querySelector(".texto__proxima").innerText =
        "Próxima pergunta";
    } else {
      perguntaAtual++;
      if (perguntaAtual < perguntas.length) {
        carregarPergunta();
        proximaBtn.querySelector(".texto__proxima").innerText = "Responder";
      } else {
        mostrarResultado();
      }
    }
  });

  function mostrarResultado() {
    contadorProgresso.textContent = `${perguntas.length}/${perguntas.length}`;
    quizForm.style.display = "none";
    resultadoEl.style.display = "block";
    resultadoEl.innerHTML = `
            <h2 style="color: black;">Quiz Concluído!</h2>
            <p style="color: black;">Você acertou ${pontuacao} de ${perguntas.length} perguntas!</p>
        `;
    resultadoEl.style.textAlign = "center";
  }

  function selecionarOpcao(labelSelecionado) {
    const todasOpcoes = document.querySelectorAll(".opcao");
    todasOpcoes.forEach((opcao) => {
      opcao.classList.remove("selecionada");
    });
    labelSelecionado.classList.add("selecionada");
  }

  carregarPergunta();
});
