import Link from "next/link";
import styles from '../styles/Navegation.module.css';

export default function Navegation(props){
    return (
        
                <Link href={props.destino}>
                    <div className={styles.navegation} style={{
                        backgroundColor: props.cor ?? '#000'
                    }}>
                    {props.text}
                    </div>
                    </Link>

    )
}