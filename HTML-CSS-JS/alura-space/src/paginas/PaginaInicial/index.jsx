import banner from "./banner.png";
import styles from "./PaginaInicial.module.scss";

import Cabecalho from "Componentes/Cabecalho";
import Menu from "Componentes/Menu";
import Rodape from "Componentes/Rodape";
import Galeria from "Componentes/galeria";
import Populares from "Componentes/Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
