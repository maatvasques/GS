const campoRegiao = document.getElementById("campoRegiao");
const btnRegiao = document.getElementById("btnRegiao");
const sctProblema = document.getElementById("problema");

btnRegiao.addEventListener("click", (event) => {
  event.preventDefault();
  campoRegiao.innerHTML = `
  <fieldset id="escolhaRegiao">
    <h2>Confira as notícias da sua região</h2>
    <h3>Escolha a região</h3>
    <select id="regiaoValor">
      <option value="" disabled selected>Selecione uma opção</option>
      <option value="n">Norte</option>
      <option value="no">Nordeste</option>
      <option value="co">Centro-Oeste</option>
      <option value="sud">Sudeste</option>
      <option value="sul">Sul</option>
    </select>
  </fieldset>
  `;

  const regiaoValor = document.getElementById("regiaoValor");
  const regiaoEnchente = document.createElement("div");
  regiaoEnchente.id = "regiaoEnchente";

  regiaoValor.addEventListener("change", () => {
    regiaoEnchente.innerHTML = ``;
    let conteudo;
    switch (regiaoValor.value) {
      case "n":
        conteudo = `<h1>Inverno Amazônico: região Norte sai de seca histórica para enchentes em menos de 6 meses</h1>
        <h3>Em menos de 6 meses, o rio Madeira saiu do menor nível da história, quando chegou a 19 centímetros de profundidade em Porto Velho (RO), em outubro do ano passado, e subiu para 16,67 metros nesta sexta-feira (4). A mudança brusca de cenário, que já afeta quase 9 mil pessoas, é resultado do Inverno Amazônico, quando as chuvas se intensificam em toda a região Norte.</h3>
        <div class="textImg">
        <h4>Mas o que é o Inverno Amazônico? É mais ou menos quando começa o verão no Hemisfério Sul, no final do ano, que as chuvas ganham força na região Norte - e duram até maio. O fenômeno é causado pela Zona de Convergência Intertropical (ZCIT), uma faixa de nuvens que se forma na região equatorial do planeta a partir dos ventos alísios, que sopram dos hemisférios Norte e Sul. Quanto mais intenso for esse sistema meteorológico, maior é o volume de chuva.</h4>
        <img src="./src/assets/images/foto-enchente-amazonica.avif" alt="Enchente na Amazônia">
        </div>
        <div class="saida"><button class="btnSaida">_________________</button></div>
        `;
        break;
      case "no":
        conteudo = `<h1>Chuvas intensas provocam alagamentos e deslizamentos em Pernambuco e Alagoas</h1>
        <h3>Em fevereiro de 2025, cidades como Recife (PE) e Maceió (AL) enfrentaram volumes de chuva superiores à média histórica para o mês, resultando em alagamentos, deslizamentos de terra e interrupções nos serviços essenciais.</h3>
        <div class="textImg">
        <h4>As fortes chuvas foram influenciadas por fenômenos meteorológicos como a Zona de Convergência Intertropical (ZCIT) e o Vórtice Ciclônico de Altos Níveis (VCAN), que aumentaram a umidade e favoreceram a formação de nuvens de tempestade na região.</h4>
        <img src="./src/assets/images/chuva-nordeste.webp" alt="Enchente na região Nordeste">
        </div>
        <div class="saida"><button class="btnSaida">_________________</button></div>
        `;
        break;
      case "co":
        conteudo = `<h1>Centro-Oeste enfrenta chuvas abaixo da média e temperaturas elevadas no outono</h1>
        <h3>Durante o outono de 2025, a Região Centro-Oeste registrou precipitações inferiores à média histórica e temperaturas acima do normal, afetando atividades agrícolas e o abastecimento de água.</h3>
        <div class="textImg">
        <h4>O Instituto Nacional de Meteorologia (Inmet) apontou que a transição do La Niña para condições neutras no Pacífico contribuiu para a redução das chuvas e o aumento das temperaturas na região.</h4>
        <img src="./src/assets/images/chuva-co.webp" alt="Enchente na região Centro-Oeste">
        </div>
        <div class="saida"><button class="btnSaida">_________________</button></div>
        `;
        break;
      case "sud":
        conteudo = `<h1>Zona de Convergência do Atlântico Sul provoca chuvas extremas no Sudeste</h1>
        <h3>Entre janeiro e fevereiro de 2025, a atuação da Zona de Convergência do Atlântico Sul (ZCAS) resultou em chuvas intensas em estados como Minas Gerais, São Paulo e Rio de Janeiro, causando alagamentos e deslizamentos de terra.</h3>
        <div class="textImg">
          <h4>O fenômeno meteorológico ZCAS favoreceu a formação de nuvens carregadas, levando a precipitações acima da média e impactos significativos em áreas urbanas e rurais da região Sudeste.</h4>
          <img src="./src/assets/images/enchente-sudeste.jpg" alt="Enchente na região Sudeste">
          </div>
          <div class="saida"><button class="btnSaida">_________________</button></div>
        `;
        break;
      case "sul":
        conteudo = `<h1>Frente fria traz temporais e queda de temperatura na Região Sul</h1>
        <h3>Em fevereiro de 2025, uma frente fria provocou chuvas intensas e queda significativa de temperatura nos estados do Sul do Brasil, com registros de ventos fortes e possibilidade de granizo.</h3>
        <div class="textImg">
          <h4>O Instituto Nacional de Meteorologia (Inmet) emitiu alertas de perigo para tempestades, destacando a atuação de sistemas frontais que causaram instabilidades atmosféricas e precipitações volumosas na região.</h4>
          <img src="./src/assets/images/rio-grande-do-sul-4.webp" alt="Enchente na região Sul">
        </div>
        <div class="saida"><button class="btnSaida">_________________</button></div>
        `;
        break;
    }
    regiaoEnchente.innerHTML = conteudo;
    sctProblema.append(regiaoEnchente);
    const btnSaida = document.getElementsByClassName("btnSaida");
    for (let btn of btnSaida) {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        regiaoEnchente.remove();
      });
    }
  });
});
