import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

export function Navbar(){
    return (
        <div className={styles.navbar}>
            <img className={styles.marvelLogo} src="../Marvel-logo-oficial.gif" alt="Logo da Marvel"/>
            <NavLink to="/characters">
                <button type="button" className={styles.navbarButton}>Characters</button>
            </NavLink>
            <NavLink to="/comics">
                <button type="button" className={styles.navbarButton}>Comics</button>
            </NavLink>
            <NavLink to="/creators">
                <button type="button" className={styles.navbarButton}>Creators</button>
            </NavLink>
            <NavLink to="/events">
                <button type="button" className={styles.navbarButton}>Events</button>
            </NavLink>
            <NavLink to="/series">
                <button type="button" className={styles.navbarButton}>Series</button>
            </NavLink>
            <NavLink to="/stories">
                <button type="button" className={styles.navbarButton}>Stories</button>
            </NavLink>
        </div>
    );
}