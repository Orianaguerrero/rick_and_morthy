import React, { createContext, useState } from "react"

export const FavoritesContext = React.createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    const addFavorite = (character) => {
        if (!favorites.find(fav => fav.id === character.id)) {
            setFavorites([...favorites, character])
        }
    }

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(fav => fav.id !== id))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}