import { useSearchParams } from 'react-router-dom'

const useUpdateQuantity = () => {
	const [params] = useSearchParams()

	const getCurrentQuantity = (quantityKey: string) => {
		const quantityOne = params.get(quantityKey) ?? 0
		return quantityOne
	}
}
