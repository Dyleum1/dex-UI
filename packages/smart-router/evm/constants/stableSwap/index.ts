import { ChainId } from '@tiwatoyin/dyleum-sdk'

import { StableSwapPool } from '../../types/pool'
import { poolMap } from './pools'

export function getStableSwapPools(chainId: ChainId): StableSwapPool[] {
  return poolMap[chainId] || []
}
