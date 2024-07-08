import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Cart.module.css'
import ProductCard from './ProductCard';
function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <>
            {cartItems !== null ?
                <div className={styles.main}>
                    <div className={styles.container}>
                        {cartItems.map((item, index) => (
                            <ProductCard key={index} dato={item} index={index} setCartItems={setCartItems} /> 
                        ))}
                    </div>
                    <div className={styles.links}>
                        <Link to={`/`} className={styles.link}>Pagar</Link>
                        <Link to={`/`} className={styles.link}>Volver</Link>
                    </div>
                </div>
                : <h1>No hay items en el carrito</h1>}
        </>
    );
}

export default Cart;