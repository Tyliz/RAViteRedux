import { PokeType } from './PokeType'
import { SimpleObject } from './SimpleObject'
import { Ability } from './ability'
import { GameIndice } from './gameIndice'
import { Item } from './item'
import { Move } from './move'
import { Sprites } from './sprites'
import { Stat } from './stat'

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: SimpleObject[]
  game_indices: GameIndice[],
  height: number
  held_items: Item[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_types: [],
  species: SimpleObject
  sprites: Sprites
  stats: Stat[],
  types: PokeType[],
  weight: number
}
