import { ChainId } from '@tiwatoyin/dyleum-sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.BRISE || chainId === ChainId.CORE
}
