import styles from '../styles/Style.module.css';
import Link from 'next/link';

export default function Style(){
    return (
        <div className={styles.vermelho}>

            <h1>Estilo usando CSS Módulos</h1>
            <Link href="/">VOLTAR</Link>
        </div>
    )
}