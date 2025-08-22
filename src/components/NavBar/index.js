import styles from './Menu.module.css';
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <nav className={styles.navigation}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/about-me">About me</Link>
            </nav>
        </header>
    );
}