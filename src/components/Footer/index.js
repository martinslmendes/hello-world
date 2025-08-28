import styles from './Footer.module.css';
import {ReactComponent as Registered} from 'assets/registered.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Registered/>
            Desenvolvido por Lucas Mendes Martins
        </footer>
    );
}