import React, { useState, useEffect, Fragment } from 'react'
import CharacterCard from '../characterCard/CharacterCard'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './Characters.module.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error(error))
    }, [])

    return (
        <Fragment>
            <Header />
            <main>
                <div className={styles.container}>
                    <h1 className={styles.title}>Rick and Morty Characters</h1>
                    <div className={styles.grid}>
                        {characters.map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>

    )
}

export default Characters