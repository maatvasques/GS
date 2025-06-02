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
        <h4>Mas o que é o Inverno Amazônico? É mais ou menos quando começa o verão no Hemisfério Sul, no final do ano, que as chuvas ganham força na região Norte - e duram até maio. O fenômeno é causado pela Zona de Convergência Intertropical (ZCIT), uma faixa de nuvens que se forma na região equatorial do planeta a partir dos ventos alísios, que sopram dos hemisférios Norte e Sul. Quanto mais intenso for esse sistema meteorológico, maior é o volume de chuva.</h4>
        <iframe src="https://g1.globo.com/937180d3-6944-4876-95c1-452f5a0891b1" alt="">
        `;
        break;
      case "no":
        conteudo = `<h1>Boa calabreso!!!!</h1>
        <h3>Conteudo base</h3>
        <h4></h4>
        <img src="" alt="">
        `;
        break;
      case "co":
        conteudo = `<h1>Boa calabreso!!!!</h1>
        <h3>Conteudo base</h3>
        <h4></h4>
        <img src="" alt="">
        `;
        break;
      case "sud":
        conteudo = `<h1>Boa calabreso!!!!</h1>
        <h3>Conteudo base</h3>
        <h4></h4>
        <img src="" alt="">
        `;
        break;
      case "sul":
        conteudo = `<h1>Boa calabreso!!!!</h1>
        <h3>Conteudo base</h3>
        <h4></h4>
        <img src="" alt="">
        `;
        break;
    }
    regiaoEnchente.innerHTML = conteudo;
    sctProblema.append(regiaoEnchente);
  });
});
