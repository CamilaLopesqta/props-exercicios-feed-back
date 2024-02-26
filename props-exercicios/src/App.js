import React from "react";
import "./styles.css";
import CardVideo from "./components/CardVideo";
import imagem1 from "./imagens/imagem1.jpg";
import imagem2 from "./imagens/imagem2.jpg";
import imagem3 from "./imagens/imagem3.jpg";
import imagem4 from "./imagens/imagem4.jpg";
import imagem5 from "./imagens/imagem5.jpg";
import imagem6 from "./imagens/imagem6.jpg";

export default function App() {
  const NomeUsuario = "Camila";
  const NomeUsuario1 = "Ana Paula";
  const NomeUsuario2 = "Elza";
  const NomeUsuario3 = "Jacob";
  const NomeUsuario4 = "Danilo";
  const NomeUsuario5 = "Arthur";

  const titulo = "A vida como ela é";
  const titulo1 = "A natureza é bela";
  const titulo2 = "Eu amo a natureza";
  const titulo3 = "Vamos viver em paz";
  const titulo4 = "Viver hoje sem esprar nada do amanhã";
  const titulo5 = "Devagar tempo, devagar";

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              imagemCard={imagem6}
              imagemUsuario={imagem1}
              nomeUsuario={NomeUsuario}
              titulo={titulo}
            />
            <CardVideo
              imagemCard={imagem5}
              imagemUsuario={imagem2}
              nomeUsuario={NomeUsuario1}
              titulo={titulo1}
            />
            <CardVideo
              imagemCard={imagem4}
              imagemUsuario={imagem3}
              nomeUsuario={NomeUsuario2}
              titulo={titulo2}
            />
            <CardVideo
              imagemCard={imagem3}
              imagemUsuario={imagem4}
              nomeUsuario={NomeUsuario3}
              titulo={titulo3}
            />
            <CardVideo
              imagemCard={imagem2}
              imagemUsuario={imagem5}
              nomeUsuario={NomeUsuario4}
              titulo={titulo4}
            />
            <CardVideo
              imagemCard={imagem1}
              imagemUsuario={imagem6}
              nomeUsuario={NomeUsuario5}
              titulo={titulo5}
            />
          </section>
        </main>

        <footer>
          <h4>Copyright © 2022 Labenu All rights reserved.</h4>
        </footer>
      </div>
    </div>
  );
}
