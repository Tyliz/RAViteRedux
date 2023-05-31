import PropTypes, { InferProps } from 'prop-types'
import { useFetchSinglePokemonQuery } from '../../features/pokemon/pokeApiSlice'


const PokeImageProps = {
  name: PropTypes.string.isRequired,
}

const PokeImage = ({ name }: InferProps<typeof PokeImageProps>) => {
  const { data } = useFetchSinglePokemonQuery(name)

  return data !== undefined
    ? (<img src={ data.sprites.front_default }></img>)
    : (<span>Loading...</span>)
}

PokeImage.propTypes = PokeImageProps

export default PokeImage
