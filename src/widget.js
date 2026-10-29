export function ligarWidget(api) {
  const widget = document.querySelector("elevenlabs-convai");
  if (!widget) return false;
  if (widget.dataset.toolsBound === "true") return true;
  widget.dataset.toolsBound = "true";
  widget.addEventListener("elevenlabs-convai:call", (event) => {
    event.detail.config.clientTools = {
      ler_tela: async () => JSON.stringify(api.current.lerTela()),
      escolher_opcao: async ({ opcao }) => JSON.stringify(api.current.escolherOpcao(opcao)),
      preencher_campo: async ({ campo, valor }) => JSON.stringify(api.current.preencherCampo(campo, valor)),
      anexar_documento: async ({ documento }) => JSON.stringify(api.current.anexarDocumento(documento)),
      navegar: async ({ destino }) => JSON.stringify(api.current.navegar(destino)),
    };
  });
  return true;
}
