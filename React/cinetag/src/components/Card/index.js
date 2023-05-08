import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconefavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconefavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img
                    className={styles.capa}
                    src={capa} alt={titulo} />
                <h2>{titulo}</h2>
            </Link>
            <img
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
                src={icone}
                alt="Favoritar filme" />
        </div>
    )
}

export default Card;