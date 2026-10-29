import { SINISTRO_CATALOG as catalog } from "./catalog.js";

export function estadoInicial() {
  return {
    step: "intencao",
    intencao: null,
    produto: null,
    categoria: null,
    coberturaId: null,
    dataEvento: "",
    anexos: {},
    segurado: { nome: "", nascimento: "", cpf: "", souSegurado: false },
    solicitante: { nome: "", cpf: "", email: "", celular: "", emailOk: false, dadosOk: false },
    protocolo: "",
  };
}

export function norm(value) {
  return (value || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function clonar(state) {
  return structuredClone(state);
}

export function refine(doc) {
  const name = norm(doc.nome);
  const conditional = doc.condicional || /filhos menores|uniao estavel|empresari|se houver|somente para|apenas para|em caso/.test(name);
  const requiredForm = /aviso de sinistro|autorizacao de pagamento/.test(name);
  return {
    ...doc,
    condicional: requiredForm ? false : conditional,
    obrigatorio: requiredForm ? true : !conditional,
  };
}

export function produtoTree(state) {
  if (state.produto === "previdencia") return catalog.previdencia;
  if (state.produto === "vida") return catalog.vida;
  return [];
}

export function coberturaAtual(state) {
  for (const categoria of produtoTree(state)) {
    const cobertura = categoria.coberturas.find((item) => item.id === state.coberturaId);
    if (cobertura) return { categoria, cobertura };
  }
  return null;
}

export function documentosAtuais(state) {
  if (state.intencao === "envio") {
    return [refine({
      id: "complementar",
      nome: "Documento complementar solicitado por e-mail",
      obrigatorio: true,
      condicional: false,
    })];
  }
  const atual = coberturaAtual(state);
  return atual ? atual.cobertura.documentos.map(refine) : [];
}

export function faltando(state) {
  return documentosAtuais(state).filter((doc) => doc.obrigatorio && !state.anexos[doc.id]);
}

export function condicionaisSemAnexo(state) {
  return documentosAtuais(state).filter((doc) => doc.condicional && !state.anexos[doc.id]);
}

function campoOk(value) {
  return Boolean((value || "").toString().trim());
}

export function podeAvancar(state) {
  if (state.step === "intencao") return Boolean(state.intencao);
  if (state.step === "produto") return Boolean(state.produto);
  if (state.step === "cobertura") return Boolean(state.coberturaId && state.dataEvento);
  if (state.step === "documentos" || state.step === "envio") return faltando(state).length === 0;
  if (state.step === "segurado") {
    return campoOk(state.segurado.nome) && campoOk(state.segurado.nascimento) && campoOk(state.segurado.cpf);
  }
  if (state.step === "solicitante") {
    const dados = state.solicitante;
    return campoOk(dados.nome) && campoOk(dados.cpf) && campoOk(dados.email) && campoOk(dados.celular) && dados.emailOk && dados.dadosOk;
  }
  return false;
}

export function tituloEtapa(state) {
  const mapa = {
    intencao: "Aviso de Sinistro",
    produto: "Passo 1 / 5 - Escolha de produto",
    cobertura: "Passo 2 / 5 - Identificar a cobertura",
    documentos: "Passo 3 / 5 - Adicionar documentação",
    segurado: "Passo 4 / 5 - Dados do Segurado",
    solicitante: "Passo 5 / 5 - Dados do Solicitante",
    envio: "Envio de documentação",
    como: "Entenda o processo de solicitação",
    revisao: "Revisão da solicitação",
  };
  return mapa[state.step] || "Aviso de Sinistro";
}

function valorCampo(state, campo) {
  const mapa = {
    data_evento: state.dataEvento,
    nome_segurado: state.segurado.nome,
    nascimento_segurado: state.segurado.nascimento,
    cpf_segurado: state.segurado.cpf,
    sou_segurado: state.segurado.souSegurado,
    nome_solicitante: state.solicitante.nome,
    cpf_solicitante: state.solicitante.cpf,
    email: state.solicitante.email,
    celular: state.solicitante.celular,
    autoriza_email: state.solicitante.emailOk,
    autoriza_dados: state.solicitante.dadosOk,
    protocolo: state.protocolo,
  };
  return mapa[campo];
}

export function opcoesVisiveis(state) {
  if (state.step === "intencao") return ["Nova solicitação", "Envio de documentação", "Entenda o processo"];
  if (state.step === "produto") return ["Seguro de Vida", "Previdência"];
  if (state.step === "cobertura" && !state.categoria) return produtoTree(state).map((item) => item.nome);
  if (state.step === "cobertura" && state.categoria && !state.coberturaId) {
    const categoria = produtoTree(state).find((item) => item.nome === state.categoria);
    return categoria ? categoria.coberturas.map((item) => item.nome) : [];
  }
  if (state.step === "documentos" || state.step === "envio") return faltando(state).slice(0, 8).map((doc) => doc.nome);
  return [];
}

function espelharSegurado(state) {
  if (!state.segurado.souSegurado) return;
  if (campoOk(state.segurado.nome)) state.solicitante.nome = state.segurado.nome;
  if (campoOk(state.segurado.cpf)) state.solicitante.cpf = state.segurado.cpf;
}

function camposVazios(state) {
  if (state.step === "cobertura" && !state.dataEvento) return ["data_evento"];
  if (state.step === "segurado") {
    return ["nome_segurado", "nascimento_segurado", "cpf_segurado"].filter((campo) => !campoOk(valorCampo(state, campo)));
  }
  if (state.step === "solicitante") {
    const campos = state.segurado.souSegurado
      ? ["email", "celular", "autoriza_email", "autoriza_dados"]
      : ["nome_solicitante", "cpf_solicitante", "email", "celular", "autoriza_email", "autoriza_dados"];
    return campos.filter((campo) => {
      const valor = valorCampo(state, campo);
      return valor !== true && !campoOk(valor);
    });
  }
  if (state.step === "envio" && !state.protocolo) return ["protocolo"];
  return [];
}

export function lerTela(state, pagina) {
  const atual = coberturaAtual(state);
  return {
    pagina,
    etapa: pagina === "Central de Sinistro" ? "inicio" : state.step,
    titulo: pagina === "Central de Sinistro" ? "Abertura de sinistro online" : tituloEtapa(state),
    opcoes: pagina === "Central de Sinistro"
      ? ["Solicitar Sinistro", "Seguro de Vida", "Previdência", "Documentações necessárias", "Perguntas frequentes"]
      : opcoesVisiveis(state),
    pode_avancar: pagina !== "Central de Sinistro" && podeAvancar(state),
    produto: state.produto,
    cobertura: atual ? atual.cobertura.nome : null,
    data_evento: state.dataEvento || null,
    anexados: Object.keys(state.anexos).length,
    faltando_obrigatorios: faltando(state).map((doc) => doc.nome),
    condicionais_sem_anexo: condicionaisSemAnexo(state).slice(0, 6).map((doc) => doc.nome),
    campos_vazios: camposVazios(state),
    sou_segurado: state.segurado.souSegurado,
    aviso: state.segurado.souSegurado
      ? "A pessoa é o próprio segurado. Nome e CPF do solicitante já são os do segurado. Não peça esses dados de novo. Peça só e-mail, celular e as duas autorizações. Nada é enviado à Icatu."
      : "Nada é enviado à Icatu. Na revisão, o envio permanece desativado.",
  };
}

export function escolherOpcao(state, opcao) {
  const next = clonar(state);
  const texto = norm(opcao);
  if (next.step === "intencao") {
    if (texto.includes("entenda") || texto.includes("como funciona") || texto.includes("processo de solicit")) {
      next.step = "como";
      return next;
    }
    next.intencao = texto.includes("envio") || texto.includes("penden") ? "envio" : "nova";
    next.step = next.intencao === "envio" ? "envio" : "produto";
    return next;
  }
  if (next.step === "produto") {
    next.produto = texto.includes("prev") ? "previdencia" : "vida";
    next.categoria = null;
    next.coberturaId = null;
    next.step = "cobertura";
    return next;
  }
  if (next.step === "cobertura") {
    for (const categoria of produtoTree(next)) {
      const cobertura = categoria.coberturas.find((item) => {
        const nome = norm(item.nome);
        return nome === texto || (texto.length > 10 && (nome.includes(texto) || texto.includes(nome)));
      });
      if (cobertura) {
        next.categoria = categoria.nome;
        next.coberturaId = cobertura.id;
        next.anexos = {};
        return next;
      }
    }
    const categoria = produtoTree(next).find((item) => norm(item.nome) === texto || norm(item.nome).includes(texto) || texto.includes(norm(item.nome)));
    if (!categoria) return { ...next, erro: "Opção não está na tela.", opcoes: opcoesVisiveis(next) };
    next.categoria = categoria.nome;
    next.coberturaId = null;
    return next;
  }
  return { ...next, erro: "Não há opção para escolher nesta etapa." };
}

export function preencherCampo(state, campo, valor) {
  const next = clonar(state);
  const chave = norm(campo).replace(/\s+/g, "_");
  const sim = /sim|true|1|autorizo|permito|sou/.test(norm(valor));
  const mapa = {
    data_evento: () => { next.dataEvento = valor; },
    nome_segurado: () => { next.segurado.nome = valor; },
    nascimento_segurado: () => { next.segurado.nascimento = valor; },
    cpf_segurado: () => { next.segurado.cpf = valor; },
    sou_segurado: () => { next.segurado.souSegurado = sim; },
    nome_solicitante: () => { next.solicitante.nome = valor; },
    cpf_solicitante: () => { next.solicitante.cpf = valor; },
    email: () => { next.solicitante.email = valor; },
    celular: () => { next.solicitante.celular = valor; },
    autoriza_email: () => { next.solicitante.emailOk = sim; },
    autoriza_dados: () => { next.solicitante.dadosOk = sim; },
    protocolo: () => { next.protocolo = valor; },
  };
  if (!mapa[chave]) return { ...next, erro: "Campo desconhecido." };
  mapa[chave]();
  espelharSegurado(next);
  return next;
}

export function anexarDocumento(state, documento) {
  const next = clonar(state);
  const alvo = norm(documento);
  const doc = documentosAtuais(next).find((item) => item.id === documento || norm(item.nome) === alvo || norm(item.nome).includes(alvo) || alvo.includes(norm(item.nome)));
  if (!doc) return { ...next, erro: "Documento não está na lista desta cobertura." };
  next.anexos[doc.id] = { nome: "documento-demo.pdf", demonstracao: true };
  return next;
}

export function avancar(state) {
  if (state.step === "revisao") {
    return { ...state, erro: "Envio desativado nesta demonstração. A revisão está pronta e nada foi enviado à Icatu." };
  }
  if (!podeAvancar(state)) {
    return { ...state, erro: "Ainda não dá para avançar.", faltando_obrigatorios: faltando(state).map((doc) => doc.nome), campos_vazios: camposVazios(state) };
  }
  const next = clonar(state);
  espelharSegurado(next);
  if (next.step === "envio" || next.step === "como") next.step = "revisao";
  else {
    const ordem = ["intencao", "produto", "cobertura", "documentos", "segurado", "solicitante", "revisao"];
    next.step = ordem[ordem.indexOf(next.step) + 1];
  }
  return next;
}

export function voltar(state) {
  const next = clonar(state);
  const anterior = {
    intencao: null,
    produto: "intencao",
    cobertura: "produto",
    documentos: "cobertura",
    segurado: "documentos",
    solicitante: "segurado",
    envio: "intencao",
    como: "intencao",
    revisao: next.intencao === "envio" ? "envio" : next.step === "como" ? "intencao" : "solicitante",
  }[next.step];
  if (!anterior) return { ...next, sair: true };
  next.step = anterior;
  if (anterior === "cobertura") next.coberturaId = null;
  if (anterior === "produto") next.categoria = null;
  return next;
}

export function irPara(state, destino) {
  const alvo = norm(destino);
  if (alvo === "inicio" || alvo === "home") return { ...state, sair: true };
  if (alvo === "avancar") return avancar(state);
  if (alvo === "voltar") return voltar(state);
  if (alvo === "solicitar" || alvo === "fluxo") return { ...estadoInicial(), step: "intencao" };
  if (alvo === "guia" || alvo === "perguntas" || alvo === "documentos") return { ...state, ancora: alvo === "documentos" ? "documentos" : "guia", sair: true };
  return { ...state, erro: "Destino desconhecido." };
}

export function abrirProduto(produto) {
  return {
    ...estadoInicial(),
    intencao: "nova",
    produto,
    step: "cobertura",
  };
}
