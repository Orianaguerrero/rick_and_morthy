import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import styles from "./CharacterCard.module.css"

const CharacterCard = ({ character }) => {

    return (
        <Link to={`/character/${character.id}`}>
            <div className={styles.card}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
            </div>
        </Link>
       
    )
}

export default CharacterCard