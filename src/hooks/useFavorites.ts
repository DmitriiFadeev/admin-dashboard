import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export const useFavorites = () => {
	const {favorites} = useSelector((state: RootState) => state)

	return favorites
}