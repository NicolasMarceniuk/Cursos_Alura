import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({Children, tamanho}) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho]}
        `}>
            {Children}
        </button>
    )
}