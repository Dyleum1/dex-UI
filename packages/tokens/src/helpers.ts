import { ChainId } from '@tiwatoyin/dyleum-sdk'
import { TokenAddressMap } from '@pancakeswap/token-lists'

/**
 * An empty result, useful as a default.
 */
export const EMPTY_LIST: TokenAddressMap<ChainId> = {
  [ChainId.ETHEREUM]: {},
  [ChainId.RINKEBY]: {},
  [ChainId.GOERLI]: {},
  [ChainId.BSC]: {},
  [ChainId.BSC_TESTNET]: {},
  [ChainId.BRISE]: {},
  [ChainId.CORE]: {},
}

export function serializeTokens(unserializedTokens) {
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: unserializedTokens[key].serialize }
  }, {} as any)

  return serializedTokens
}
