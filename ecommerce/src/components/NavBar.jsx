import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/NavBar.module.css'
import cartWhite from '../assets/cartWhite.svg'
function NavBar() {
    const location = useLocation();
    return (
        <>
            <div className={styles.nav}>
                <h1>PepitoShop</h1>
                <div className={styles.links}>
                    <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>
                        Home
                    </Link>
                    <Link to="/register" className={`${styles.link} ${location.pathname === '/register' ? styles.active : ''}`}>Register</Link>
                    <Link to="/login" className={`${styles.link} ${location.pathname === '/login' ? styles.active : ''}`}>Login</Link>
                    <Link to="/cart" className={`${styles.link}`} {...(location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/cart' ? { hidden: true } : {})}><img src={cartWhite} alt="cart" /></Link>
                </div>
            </div>
            <hr />
        </>
    );
}

export default NavBar;