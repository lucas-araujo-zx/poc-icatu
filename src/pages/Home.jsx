import { useState } from "react";
import { Link } from "react-router-dom";
import { SINISTRO_CATALOG } from "../catalog.js";

const LOGO = "https://portal.icatuseguros.com.br/assets/icons/logo_icatuseguros_horizontal.svg";
const HERO = "https://cdne-institucionalicatu-prd.azureedge.net/cms/2023/02/26-A-1-e1647265795627.png";
const CERTIFICADO = "https://cdne-institucionalicatu-prd.azureedge.net/cms/2023/03/FormSinistroLogoNova.jpg";
const VIDA = "https://portal.icatuseguros.com.br/assets/vida.svg";
const PREV = "https://portal.icatuseguros.com.br/assets/prev.svg";
const GUIA = "https://cdne-institucionalicatu-prd.azureedge.net/cms/2026/05/Image-Casal-ilustrativo.png";
const PASSOS = [
  ["https://cdne-institucionalicatu-prd.azureedge.net/cms/2023/02/2.png", "Documentação:", "Verifique e reúna os documentos necessários para abrir seu processo de sinistro."],
  ["https://cdne-institucionalicatu-prd.azureedge.net/cms/2023/02/3.png", "Abertura da Solicitação:", "Preencha as informações e envie todos os documentos. Caso a documentação esteja completa, iniciaremos a análise."],
  ["https://cdne-institucionalicatu-prd.azureedge.net/cms/2023/02/4.png", "Análise:", "O prazo é de 30 dias corridos a partir do recebimento de toda documentação. Havendo pendência, o processo é paralisado até o envio da documentação complementar."],
  ["https://cdne-institucionalicatu-prd.azureedge.net/cms/2023/02/5.png", "Sinistro Liberado:", "A Icatu informará o procedimento de recebimento da indenização via e-mail ou telefone."],
];

const FAQ = [
  ["Como faço para abrir o processo de sinistro na Icatu?", "Pela Central de Sinistro você encontra a lista de documentos, os formulários e o caminho para iniciar a abertura. Em até 3 dias úteis, depois da abertura, um link chega por e-mail para acompanhar. Esse e-mail não é o resultado da análise."],
  ["Não tenho o certificado. Como consulto as coberturas?", "Solicite a 2ª via do certificado para sinistro pelo Canal de Atendimento. Selecione Seguro de Vida ou Previdência, preencha o formulário e escolha Solicitação, 2ª via, Certificado para sinistro."],
  ["Como faço para acompanhar o status?", "Pelo link enviado em até 3 dias úteis, pelo corretor ou pela Central de Relacionamento: 4002 3013 nas capitais e 0800 282 3013 nas demais localidades."],
  ["Registrar o aviso já inicia a análise?", "Não. A análise começa quando a documentação básica completa é recebida. O prazo é de até 30 dias corridos a partir daí."],
];

export default function Home({ onSolicitar }) {
  const [aba, setAba] = useState("tenho");
  const [aberto, setAberto] = useState(null);
  const [produtoAberto, setProdutoAberto] = useState(null);

  return (
    <main>
      <section className="hero">
        <div>
          <h1>Abertura de sinistro online</h1>
          <p>Envie os documentos através do aviso online e acompanhe o processo sem precisar ligar.</p>
          <p>Veja a <a href="#documentos">documentação necessária</a> abaixo e solicite.</p>
          <button className="btn-navy" type="button" onClick={() => onSolicitar()}>Solicitar Sinistro</button>
        </div>
        <img src={HERO} alt="Ilustração de duas pessoas cumprimentando-se" />
      </section>

      <section className="bloco" id="coberturas">
        <h2>Como localizar as coberturas ou garantias que tenho direito?</h2>
        <div className="abas">
          <button type="button" className={aba === "tenho" ? "aba ativa" : "aba"} onClick={() => setAba("tenho")}>Tenho o certificado</button>
          <button type="button" className={aba === "nao" ? "aba ativa" : "aba"} onClick={() => setAba("nao")}>Não tenho o certificado</button>
        </div>
        <div className="certificado">
          <img src={CERTIFICADO} alt="Trecho do certificado com a indicação das coberturas" />
          <p>
            {aba === "tenho"
              ? "Para solicitar o benefício é necessário estar com seu certificado em mãos para identificar as coberturas. Na imagem, mostramos onde encontrar a informação no certificado."
              : "Caso não tenha acesso às coberturas contratadas, você pode solicitar a 2ª via do certificado para sinistro no Canal de Atendimento, em Solicitação, 2ª via, Certificado para sinistro."}
          </p>
        </div>
      </section>

      <section className="bloco" id="documentos">
        <h2>Documentações necessárias</h2>
        <p className="lead">Selecione o produto e a cobertura que você tem direito para saber quais documentos são necessários para abrir um sinistro.</p>
        <div className="produtos">
          <Produto
            imagem={VIDA}
            titulo="Seguro de Vida"
            texto="Faça uma solicitação de indenização com Seguro de Vida."
            aberto={produtoAberto === "vida"}
            grupos={SINISTRO_CATALOG.vida}
            onToggle={() => setProdutoAberto(produtoAberto === "vida" ? null : "vida")}
            onSolicitar={() => onSolicitar("vida")}
          />
          <Produto
            imagem={PREV}
            titulo="Previdência"
            texto="Faça uma solicitação de indenização com Previdência."
            aberto={produtoAberto === "previdencia"}
            grupos={SINISTRO_CATALOG.previdencia}
            onToggle={() => setProdutoAberto(produtoAberto === "previdencia" ? null : "previdencia")}
            onSolicitar={() => onSolicitar("previdencia")}
          />
        </div>
        <div className="complementar">
          <h3>Documentações complementares</h3>
          <p>Após análise, caso haja documentação pendente ou errada, enviaremos uma solicitação de documentos complementares via e-mail.</p>
        </div>
        <div className="cta-linha">
          <button className="btn-navy" type="button" onClick={() => onSolicitar()}>Solicitar sinistro</button>
        </div>
      </section>

      <section className="bloco passos" id="passos">
        <h2>Passo a passo da solicitação</h2>
        <div className="grade-passos">
          {PASSOS.map(([imagem, titulo, texto], indice) => (
            <article key={titulo}>
              <span>{indice + 1}</span>
              <img src={imagem} alt="" />
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="guia" id="guia">
        <img src={GUIA} alt="Ilustração de um casal" />
        <div>
          <h2>Guia do Beneficiário</h2>
          <p>Um passo a passo desenvolvido para orientar o beneficiário nos casos de falecimento ou invalidez do segurado.</p>
          <a className="btn-navy" href="https://hotsite.icatuseguros.com.br/2022/vida/guia_beneficiario/guia_beneficiario2026.pdf" target="_blank" rel="noreferrer">Baixar</a>
        </div>
      </section>

      <section className="bloco" id="faq">
        <h2>Perguntas Frequentes</h2>
        {FAQ.map(([pergunta, resposta]) => (
          <details key={pergunta} open={aberto === pergunta} onToggle={(event) => setAberto(event.currentTarget.open ? pergunta : null)}>
            <summary>{pergunta}</summary>
            <p>{resposta}</p>
          </details>
        ))}
      </section>
    </main>
  );
}

function Produto({ imagem, titulo, texto, aberto, grupos, onToggle, onSolicitar }) {
  return (
    <article className="produto">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <button type="button" className="link-acao" onClick={onToggle}>{aberto ? "Fechar" : "Saiba mais"} ›</button>
      {aberto && (
        <div className="grupos">
          {grupos.map((grupo) => (
            <p key={grupo.nome}><strong>{grupo.nome}.</strong> {grupo.coberturas.map((item) => item.nome).join(", ")}</p>
          ))}
          <button className="btn-navy" type="button" onClick={onSolicitar}>Solicitar</button>
        </div>
      )}
    </article>
  );
}

export function Rodape() {
  return (
    <footer>
      <div>
        <h3>Atendimento</h3>
        <Link to="/#faq">Perguntas Frequentes</Link>
        <p>Serviço de Assistência Funeral<br />0800 026 1900</p>
      </div>
      <div>
        <h3>Solicitar Indenização</h3>
        <Link to="/">Central de Sinistro</Link>
      </div>
      <div>
        <h3>Seguro de Vida</h3>
        <p>Seguro de Vida para Você<br />Seguro de Vida Empresarial</p>
      </div>
      <div>
        <h3>Previdência Privada</h3>
        <p>Planos de Previdência Privada<br />Nossos Fundos</p>
      </div>
      <div className="legal">
        <strong>@ICATUSEGUROS</strong>
        <p>© Icatu Seguros - Todos os direitos reservados<br />CNPJ: 42.283.770/0001-39</p>
        <p>Demonstração local. O envio da solicitação não é concluído.</p>
      </div>
    </footer>
  );
}
