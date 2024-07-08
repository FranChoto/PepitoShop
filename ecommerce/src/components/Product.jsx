/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Product.module.css'
function Product({ dato }) {

    const [cart, setCart] = useState(localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : []);

    
    const handleAddToCart = () => {
        setCart([
            ...cart,
            {
                ...dato
            }
        ]);
        alert("Agregado al carrito");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <img className={styles.img} src={dato.img} alt={dato.name} />
                    <div className={styles.textContainer}>
                        <h1>{dato.name}</h1>
                        <p>{dato.description}</p>
                        <h2>$ {dato.price},00</h2>
                        <button onClick={() => handleAddToCart()}>Agregar al carrito</button>
                        <Link to={`/`} className={styles.link}>Volver</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;