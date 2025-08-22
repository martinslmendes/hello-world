import styles from './NavBarItem.module.css';
import {NavLink} from "react-router-dom";

export default function NavBarItem({children, to}) {
    return (
        <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} to={to}>
            {children}
        </NavLink>
    );
}