import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home, { Rodape } from "./pages/Home.jsx";
import Flow from "./pages/Flow.jsx";
import { ligarWidget } from "./widget.js";
import {
  abrirProduto,
  anexarDocumento,
  avancar,
  destacarDocumento,
  escolherOpcao,
  estadoInicial,
  irPara,
  lerTela,
  norm,
  preencherCampo,
  voltar,
} from "./sinistro.js";

const LOGO = "https://portal.icatuseguros.com.br/assets/icons/logo_icatuseguros_horizontal.svg";
const LUPA = "https://portal.icatuseguros.com.br/assets/lupa.svg";

export default function App() {
  const [state, setState] = useState(estadoInicial);
  const navigate = useNavigate();
  const location = useLocation();
  const api = useRef({});

  api.current = {
    lerTela: () => lerTela(state, location.pathname === "/" ? "Central de Sinistro" : "Aviso de Sinistro"),
    escolherOpcao: (opcao) => {
      if (location.pathname === "/") return escolherNaHome(opcao);
      const next = escolherOpcao(state, opcao);
      if (next.erro) return { ...lerTela(state, "Aviso de Sinistro"), erro: next.erro, opcoes: next.opcoes };
      setState(next);
      return lerTela(next, "Aviso de Sinistro");
    },
    preencherCampo: (campo, valor) => {
      const next = preencherCampo(state, campo, valor);
      if (next.erro) return { ...lerTela(state, "Aviso de Sinistro"), erro: next.erro };
      setState(next);
      return lerTela(next, "Aviso de Sinistro");
    },
    anexarDocumento: (documento) => {
      const next = anexarDocumento(state, documento);
      if (next.erro) return { ...lerTela(state, "Aviso de Sinistro"), erro: next.erro };
      setState(next);
      return lerTela(next, "Aviso de Sinistro");
    },
    destacarDocumento: (documento) => {
      const next = destacarDocumento(state, documento);
      if (next.erro) return { ...lerTela(state, "Aviso de Sinistro"), erro: next.erro };
      setState(next);
      return lerTela(next, "Aviso de Sinistro");
    },
    navegar: (destino) => {
      const next = irPara(state, destino);
      if (next.erro && !next.sair) return { ...lerTela(state, "Aviso de Sinistro"), erro: next.erro, faltando_obrigatorios: next.faltando_obrigatorios, campos_vazios: next.campos_vazios };
      if (next.sair) {
        setState(estadoInicial());
        navigate(next.ancora ? `/#${next.ancora}` : "/");
        return lerTela(estadoInicial(), "Central de Sinistro");
      }
      setState(next);
      if (location.pathname !== "/fluxo") navigate("/fluxo");
      return lerTela(next, "Aviso de Sinistro");
    },
  };

  function escolherNaHome(opcao) {
    const texto = norm(opcao);
    if (texto.includes("document")) {
      document.querySelector("#documentos")?.scrollIntoView({ behavior: "smooth" });
      return lerTela(state, "Central de Sinistro");
    }
    if (texto.includes("pergunt") || texto.includes("guia") || texto.includes("faq")) {
      document.querySelector("#guia")?.scrollIntoView({ behavior: "smooth" });
      return lerTela(state, "Central de Sinistro");
    }
    const next = texto.includes("prev") ? abrirProduto("previdencia") : texto.includes("vida") ? abrirProduto("vida") : estadoInicial();
    setState(next);
    navigate("/fluxo");
    return lerTela(next, "Aviso de Sinistro");
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (ligarWidget(api)) clearInterval(timer);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  function solicitar(produto) {
    setState(produto ? abrirProduto(produto) : estadoInicial());
    navigate("/fluxo");
  }

  function aplicar(next) {
    if (next.erro) return;
    if (next.sair) {
      setState(estadoInicial());
      navigate("/");
      return;
    }
    setState(next);
  }

  return (
    <>
      <div className="topo">
        <span>Acessibilidade</span>
        <span>A+ &nbsp; A−</span>
        <span className="topo-dir">Sobre a Icatu &nbsp;&nbsp; Trabalhe conosco</span>
      </div>
      <header className="nav">
        <Link to="/" className="logo"><img src={LOGO} alt="Icatu Seguros" /></Link>
        <nav>
          <a href="https://portal.icatuseguros.com.br/seguro-de-vida" target="_blank" rel="noreferrer">Seguro de Vida</a>
          <a href="https://portal.icatuseguros.com.br/previdencia" target="_blank" rel="noreferrer">Previdência Privada</a>
          <a href="https://portal.icatuseguros.com.br/capitalizacao" target="_blank" rel="noreferrer">Título de Capitalização</a>
          <a href="https://portal.icatuseguros.com.br/atendimento" target="_blank" rel="noreferrer">Atendimento</a>
          <a href="https://portal.icatuseguros.com.br/blog" target="_blank" rel="noreferrer">Blog</a>
          <Link className="pill" to="/">Central de Sinistro</Link>
          <a className="ghost" href="https://portal.icatuseguros.com.br/area-do-cliente" target="_blank" rel="noreferrer">Área do Cliente</a>
          <img className="lupa" src={LUPA} alt="" />
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home onSolicitar={solicitar} />} />
        <Route
          path="/fluxo"
          element={
            <Flow
              state={state}
              onEscolher={(opcao) => aplicar(escolherOpcao(state, opcao))}
              onPreencher={(campo, valor) => aplicar(preencherCampo(state, campo, valor))}
              onAnexar={(documento) => aplicar(anexarDocumento(state, documento))}
              onAvancar={() => aplicar(avancar(state))}
              onVoltar={() => aplicar(voltar(state))}
            />
          }
        />
      </Routes>
      <Rodape />
    </>
  );
}
