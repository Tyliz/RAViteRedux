import { SimpleObject } from './SimpleObject'

export interface VersionDetail {
  rarity: number,
  version: SimpleObject
}

export interface Item {
  item: SimpleObject,
  version_details: VersionDetail[]
}
