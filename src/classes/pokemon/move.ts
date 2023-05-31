import { SimpleObject } from './SimpleObject'
import { VersionGroupDetails } from './versionGroupDetail'

export interface Move {
  move: SimpleObject,
  version_group_details: VersionGroupDetails[]
}
