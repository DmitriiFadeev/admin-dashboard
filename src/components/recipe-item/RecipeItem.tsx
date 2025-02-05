import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import type { IRecipe } from '../../store/favorites/favorites.slice'
import styles from './RecipeItem.module.css'

const RecipeItem = ({recipe}: {recipe: IRecipe}) => {
	const favorites = useFavorites()	
	const {toggleFavorites} = useActions()
	const isExists = favorites.some(r => r.id === recipe.id)

	return ( <div className={styles.card}>
		<h2>{recipe.name}</h2>
		<button onClick={() => toggleFavorites(recipe)}>
			{isExists ? 'Remove from' : 'Add to'} favorites
			</button>
	</div> );
}
 
export default RecipeItem;