/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import styles from '../styles/ProductCard.module.css'
function ProductCard({ dato , index , setCartItems}) {
    const location = useLocation();
    const [description, setDescription] = useState(dato.description.slice(0, 50) + "...");

    const descriptionExpansion = (e) => {
        
    }

    const handleDelete = (index) => {
        setCartItems(cartItems => cartItems.filter((_, i) => i !== index)); 
    }

    

    
    return (
        <>
            <div className={styles.card} key={dato.id}>
                <img src={dato.img} alt={dato.name} />
                <h3>{dato.name}</h3>
                <p>{description}</p>
                <button onClick={(e) => descriptionExpansion(e)}>Expandir</button>
                <p>$ {dato.price}</p>
                <Link to={`/product/${dato.id}`} className={styles.link}>Ver más</Link>
                {location.pathname === "/cart" ? <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Eliminar</button> : ""}
            </div>

        </>
    );
}

export default ProductCard;