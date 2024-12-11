import React, { Fragment, useContext } from 'react'
import styles from "./Favorites.module.css"
import { FavoritesContext } from "../../context/FavoritesContext"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/footer"
import CharacterCard from "../../components/characterCard/CharacterCard"

const Favorites = () => {
    const { favorites } = useContext(FavoritesContext)
    console.log(favorites)
    return (
        <Fragment>
            <Header />
            <div className={styles.favoritesContainer}>
                <h1 className={styles.title}>Your Favorite Characters</h1>
                {favorites.length > 0 ? (
                    <div className={styles.favoritesList}>
                        {favorites.map(character => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                ) : (
                    <p className={styles.emptyMessage} >You don't have any favorites yet!</p>
                )}
            </div>
            <Footer />
        </Fragment>

    )
}

export default Favorites;