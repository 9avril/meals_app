import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './RecipeItem.module.css'

const RecipeItem = ({ recipe }) => {
	const { toggleFavorites } = useActions()

	const { favorites } = useFavorites()

	const isExist = favorites.some(r => r.id === recipe.id)

	return (
		<div className={styles.item}>
			<h3>{recipe.name}</h3>
			<img src={recipe.image} alt={recipe.name} width={175}/>
			<br/>
			<button onClick={() => toggleFavorites(recipe)}>
				{isExist ? 'Remove from' : 'Add to'} favorites
			</button>
		</div>
	)
}

export default RecipeItem
