import { ChainId, Token, ERC20Token, WBNB } from '@pancakeswap/sdk'
import { RICE_CORE } from './common'

export const coreTokens = {
  wbnb: WBNB[ChainId.CORE],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new ERC20Token(
    ChainId.CORE,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'CORE',
    'CORE',
    'https://www.binance.com/',
  ),
  tw: RICE_CORE,
  busd: new ERC20Token(
    ChainId.CORE,
    '0xd0CE781960c6356A7175988751bfC8d7cd28EA60',
    18,
    'BUSD',
    'Binance USD',
    'https://www.binance.com/',
  ),
  xRice: new ERC20Token(
    ChainId.BRISE,
    '0x543F944F3fc1fA5fCF723e74Fa3434224109aDe1',
    18,
    'xRICE',
    'xRice Token',
    'https://Riceprotocol.org',
  ),
}