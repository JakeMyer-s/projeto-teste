const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[index].classList.add("selecionado");
  });
});

const personagens = document.querySelectorAll(".personagem");
function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
