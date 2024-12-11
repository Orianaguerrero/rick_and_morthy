import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Welcome to Rick & Morty Store! 🛸</h1>
                    <p className={styles.description}>
                        Explore a variety of products inspired by the famous Rick & Morty series. Buy your favorite characters and join the multiversal adventure!
                    </p>
                    <div className={styles.imageContainer}>
                        <img
                            className={styles.mainImage}
                            src="../../../public\images\rick-and-morty.jpeg"
                            alt="Rick & Morty"
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={() => window.location.href = '/product'}>
                            Explore Products
                        </button>
                        <button className={styles.button} onClick={() => window.location.href = '/contact'}>
                            Contact
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;