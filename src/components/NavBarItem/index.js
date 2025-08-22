import styles from './NavBarItem.module.css';
import {Link, useLocation} from "react-router-dom";

export default function NavBarItem({children, to}) {
    const location = useLocation();
    return (
        <Link className={`${styles.link} ${location.pathname === to ? styles.activeLink : ''}`} to={to}>
            {children}
        </Link>
    );
}