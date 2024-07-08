import styles from '../styles/Home.module.css'
import data from '../assets/product.json'
import ProductCard from './ProductCard';
function Home() {
    return (  
        <>
            <div className={styles.container}>
                {data.map((dato) => (
                    <ProductCard key={dato.id} dato={dato} />
                ))}
            </div>
        </>
    );
}

export default Home;