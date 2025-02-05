import RecipeItem from '../components/recipe-item/RecipeItem.tsx'
import DefaultLayout from '../layouts/defaultLayout/DefaultLayout.tsx'
import { IRecipe } from '../store/favorites/favorites.slice.ts'


const data: IRecipe[] = [{
	id: 1,
	name: 'Лазанья',
	image: ''
},{
	id: 2,
	name: 'Паста',
	image: ''
}]

export default function HomePage() {
	return (
		<DefaultLayout>
			<div>
				<h1>Home Page</h1>
				{data.map(r => (
					<RecipeItem key={r.id} recipe={r}/>
				))}
				
			</div>
		</DefaultLayout>
	)
}
