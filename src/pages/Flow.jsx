import {
  coberturaAtual,
  condicionaisSemAnexo,
  documentosAtuais,
  faltando,
  podeAvancar,
  produtoTree,
  tituloEtapa,
} from "../sinistro.js";

export default function Flow({ state, onEscolher, onPreencher, onAnexar, onAvancar, onVoltar }) {
  return (
    <main className="fluxo">
      <div className="barra-passo">
        <button type="button" onClick={onVoltar} aria-label="Voltar">‹</button>
        <strong>{tituloEtapa(state)}</strong>
      </div>
      <div className="miolo">
        {state.step === "intencao" && <Intencao onEscolher={onEscolher} />}
        {state.step === "como" && <Como />}
        {state.step === "produto" && <Produto onEscolher={onEscolher} />}
        {state.step === "cobertura" && <Cobertura state={state} onEscolher={onEscolher} onPreencher={onPreencher} />}
        {(state.step === "documentos" || state.step === "envio") && (
          <Documentos state={state} onAnexar={onAnexar} onPreencher={onPreencher} />
        )}
        {state.step === "segurado" && <Segurado state={state} onPreencher={onPreencher} />}
        {state.step === "solicitante" && <Solicitante state={state} onPreencher={onPreencher} />}
        {state.step === "revisao" && <Revisao state={state} />}
        {state.step !== "intencao" && state.step !== "produto" && state.step !== "revisao" && state.step !== "como" && (
          <div className="acoes">
            <button className="btn-branco" type="button" onClick={onVoltar}>Voltar</button>
            <button className="btn-navy" type="button" disabled={!podeAvancar(state)} onClick={onAvancar}>Continuar</button>
          </div>
        )}
        {state.step === "como" && (
          <div className="acoes">
            <button className="btn-branco" type="button" onClick={onVoltar}>Voltar</button>
          </div>
        )}
      </div>
    </main>
  );
}

function Intencao({ onEscolher }) {
  return (
    <section className="inicio-fluxo">
      <h1>Aviso de Sinistro</h1>
      <h2>O que deseja fazer?</h2>
      <div className="duas">
        <article>
          <h3>Nova solicitação</h3>
          <p>Faça uma solicitação de aviso de sinistro.</p>
          <button className="btn-navy" type="button" onClick={() => onEscolher("Nova solicitação")}>Solicitar</button>
        </article>
        <article>
          <h3>Envio de documentação</h3>
          <p>Envie a documentação pendente de uma solicitação anterior.</p>
          <button className="btn-navy" type="button" onClick={() => onEscolher("Envio de documentação")}>Enviar</button>
        </article>
      </div>
      <button className="link-acao bloco-link" type="button" onClick={() => onEscolher("Entenda o processo")}>
        Entenda o processo de solicitação
      </button>
    </section>
  );
}

function Como() {
  return (
    <section className="texto-fluxo">
      <h2>Entenda o processo de solicitação</h2>
      <p>Depois de escolher o produto e a cobertura, reúna os documentos da lista e informe os dados do segurado e de quem solicita.</p>
      <p>Se a documentação estiver completa, a análise começa. O prazo é de até 30 dias corridos. Uma pendência paralisa esse prazo até o complemento.</p>
      <p>Em até 3 dias úteis após a abertura, a Icatu envia um e-mail para acompanhar. Esse e-mail confirma o recebimento, não é o resultado do sinistro.</p>
      <p>Nesta demonstração a revisão aparece, mas a solicitação não é enviada.</p>
    </section>
  );
}

function Produto({ onEscolher }) {
  return (
    <section>
      <h2>Qual produto deseja solicitar a indenização?</h2>
      <div className="duas grandes">
        <article>
          <h3>Seguro de Vida</h3>
          <p>Faça uma solicitação de indenização com Seguro de Vida.</p>
          <button className="btn-navy" type="button" onClick={() => onEscolher("Seguro de Vida")}>Começar</button>
        </article>
        <article>
          <h3>Previdência</h3>
          <p>Faça uma solicitação de indenização com Previdência.</p>
          <button className="btn-navy" type="button" onClick={() => onEscolher("Previdência")}>Começar</button>
        </article>
      </div>
    </section>
  );
}

function Cobertura({ state, onEscolher, onPreencher }) {
  const categorias = produtoTree(state);
  const categoria = categorias.find((item) => item.nome === state.categoria);
  return (
    <section className="cobertura">
      <div>
        <h2>{state.produto === "previdencia" ? "Escolha a cobertura da Previdência" : "Escolha a cobertura do Seguro de Vida"}</h2>
        <div className="tiles">
          {categorias.map((item) => (
            <button key={item.nome} type="button" className={item.nome === state.categoria ? "tile ativa" : "tile"} onClick={() => onEscolher(item.nome)}>
              {item.nome}
            </button>
          ))}
        </div>
        {categoria && (
          <>
            <h3>{categoria.nome}</h3>
            <p>Agora, escolha uma cobertura que se encaixe na situação ocorrida.</p>
            <div className="tiles">
              {categoria.coberturas.map((item) => (
                <button key={item.id} type="button" className={item.id === state.coberturaId ? "tile ativa" : "tile"} onClick={() => onEscolher(item.nome)}>
                  {item.nome}
                </button>
              ))}
            </div>
          </>
        )}
        <label className="data">
          Data do evento
          <input type="date" value={state.dataEvento} onChange={(event) => onPreencher("data_evento", event.target.value)} />
          <small>Por fim, selecione a data em que a ocorrência aconteceu.</small>
        </label>
      </div>
      <aside>
        <h3>Como identificar as coberturas que tenho direito?</h3>
        <p>Você encontra a informação das suas coberturas no certificado do seguro contratado.</p>
      </aside>
    </section>
  );
}

function Documentos({ state, onAnexar, onPreencher }) {
  const atual = coberturaAtual(state);
  const docs = documentosAtuais(state);
  const pendentes = faltando(state);
  return (
    <section className="docs">
      <div>
        <h2>{state.step === "envio" ? "Documento pendente" : atual?.cobertura.nome}</h2>
        {state.step === "envio" ? (
          <label className="data">
            Protocolo da solicitação anterior
            <input type="text" value={state.protocolo} placeholder="Digite aqui" onChange={(event) => onPreencher("protocolo", event.target.value)} />
          </label>
        ) : (
          <p className="nota">Adicione até 10 arquivos com 6MB para cada documento. Extensões permitidas no site real: jpeg, pdf, png, doc. Aqui o anexo é um marcador local.</p>
        )}
        {docs.map((doc) => {
          const anexo = state.anexos[doc.id];
          return (
            <article key={doc.id} className={anexo ? "doc ok" : "doc"}>
              <div>
                <strong>{doc.nome}</strong>
                <small>{anexo ? "Anexado na demonstração" : doc.obrigatorio ? "Obrigatório" : "Se aplicável"}</small>
              </div>
              <button type="button" onClick={() => onAnexar(doc.id)}>{anexo ? "Trocar" : "+ Adicionar"}</button>
            </article>
          );
        })}
      </div>
      <aside>
        <h3>Adicione os documentos para continuar</h3>
        <p>Faltam {pendentes.length} documentos obrigatórios. Itens condicionais, como união estável, filho menor ou seguro empresarial, não travam o avanço.</p>
        <p>Há {condicionaisSemAnexo(state).length} itens condicionais ainda sem anexo.</p>
      </aside>
    </section>
  );
}

function Segurado({ state, onPreencher }) {
  return (
    <section className="formulario">
      <h2>Inserir os dados pessoais do Segurado</h2>
      <Campo rotulo="Nome completo" valor={state.segurado.nome} onChange={(valor) => onPreencher("nome_segurado", valor)} />
      <Campo rotulo="Data de nascimento" tipo="date" valor={state.segurado.nascimento} onChange={(valor) => onPreencher("nascimento_segurado", valor)} />
      <Campo rotulo="CPF" valor={state.segurado.cpf} placeholder="000.000.000-00" onChange={(valor) => onPreencher("cpf_segurado", valor)} />
      <label className="check">
        <input type="checkbox" checked={state.segurado.souSegurado} onChange={(event) => onPreencher("sou_segurado", event.target.checked ? "sim" : "nao")} />
        Sou o segurado
      </label>
    </section>
  );
}

function Solicitante({ state, onPreencher }) {
  return (
    <section className="formulario">
      <h2>Inserir os seus dados pessoais</h2>
      <Campo rotulo="Nome completo" valor={state.solicitante.nome} onChange={(valor) => onPreencher("nome_solicitante", valor)} />
      <Campo rotulo="CPF" valor={state.solicitante.cpf} placeholder="000.000.000-00" onChange={(valor) => onPreencher("cpf_solicitante", valor)} />
      <Campo rotulo="E-mail" tipo="email" valor={state.solicitante.email} onChange={(valor) => onPreencher("email", valor)} />
      <Campo rotulo="Celular" tipo="tel" valor={state.solicitante.celular} placeholder="(00) 00000-0000" onChange={(valor) => onPreencher("celular", valor)} />
      <label className="check">
        <input type="checkbox" checked={state.solicitante.emailOk} onChange={(event) => onPreencher("autoriza_email", event.target.checked ? "sim" : "nao")} />
        Autorizo o envio de e-mails com informações de status e pendências desta solicitação.
      </label>
      <label className="check">
        <input type="checkbox" checked={state.solicitante.dadosOk} onChange={(event) => onPreencher("autoriza_dados", event.target.checked ? "sim" : "nao")} />
        Permito que a Icatu utilize meus dados para análise da solicitação de indenização.
      </label>
    </section>
  );
}

function Revisao({ state }) {
  const atual = coberturaAtual(state);
  return (
    <section className="texto-fluxo">
      <h2>Revisão</h2>
      <p>{atual ? `${atual.cobertura.nome}. Evento em ${state.dataEvento}.` : `Protocolo ${state.protocolo || "não informado"}.`}</p>
      <p>{Object.keys(state.anexos).length} documentos marcados. {faltando(state).length} obrigatórios ainda faltam.</p>
      <p>{state.solicitante.nome ? `Solicitante: ${state.solicitante.nome}.` : "Dados do solicitante ainda não informados."}</p>
      <button className="btn-navy" type="button" disabled>Enviar solicitação</button>
      <p className="nota">O envio está desativado. Esta tela existe para conferir o que seria enviado.</p>
    </section>
  );
}

function Campo({ rotulo, valor, onChange, tipo = "text", placeholder = "Digite aqui" }) {
  return (
    <label>
      {rotulo}
      <input type={tipo} value={valor} placeholder={tipo === "date" ? undefined : placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
