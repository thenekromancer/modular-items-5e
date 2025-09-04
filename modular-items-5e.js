Hooks.once("ready", () => {
  console.log("Meu módulo foi carregado!");
  ChatMessage.create({ content: "Olá, mundo! Meu módulo está funcionando." });
});
