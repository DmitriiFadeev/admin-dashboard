import { createSlice } from '@reduxjs/toolkit'

export interface IRecipe {
	id: number,
	name: string,
	image: string
}

const initialState: IRecipe[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, {payload: recipe}) => {
			if (state.some(s => s.id === recipe.id)) {
				const index = state.findIndex(item => item.id === recipe.id)

				if (index !== -1) {
					state.splice(index, 1)
				}

			} else {
				state.push(recipe)
			}
			
		}
	}
})

export const { actions, reducer } = favoritesSlice