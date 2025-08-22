import styles from './NavBar.module.css';
import NavBarItem from "../NavBarItem";

export default function NavBar() {
    return (
        <header>
            <nav className={styles.navigation}>
                <NavBarItem to="/">Home</NavBarItem>
                <NavBarItem to="/about-me">About me</NavBarItem>
            </nav>
        </header>
    );
}