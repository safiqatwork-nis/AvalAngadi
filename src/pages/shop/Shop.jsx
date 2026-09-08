import { useSearchParams } from 'react-router-dom'
import RoutePlaceholder from '../../components/RoutePlaceholder'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  return <RoutePlaceholder title={category ? `Shop — ${category}` : 'Shop'} />
}
