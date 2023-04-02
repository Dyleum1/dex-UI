import { Token } from '@tiwatoyin/dyleum-sdk'
import { coreTokens } from '@pancakeswap/tokens'
import { bscWarningTokens } from 'config/constants/warningTokens'

// const { bondly, itam, ccar, bttold, abnbc } = coreTokens
// const { pokemoney, free, safemoon, gala } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{}

export default SwapWarningTokens
