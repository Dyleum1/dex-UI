import { ChainId, Token, ERC20Token, WBNB } from '@tiwatoyin/dyleum-sdk'
import { RICE_BRISE } from './common'

export const briseTokens = {
  wbnb: WBNB[ChainId.BRISE],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new ERC20Token(
    ChainId.BRISE,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'BRISE',
    'BRISE',
    'https://www.binance.com/',
  ),
  tw: RICE_BRISE,
  xRice: new ERC20Token(
    ChainId.BRISE,
    '0x722f5f012D29Cc4d6464B6a46343fBA3881eaa56',
    18,
    'xRICE',
    'xRice Token',
    'https://Riceprotocol.org',
  ),
  syrup: new ERC20Token(
    ChainId.BRISE,
    '0xd6274E2043bce7E2b2B84949e6a84A0a6C5C604D',
    18,
    'Syrub',
    'SyrupBar Token',
    'https://Riceprotocol.org',
  ),
  ypc: new ERC20Token(
    ChainId.BRISE,
    '0x11203a00a9134Db8586381C4B2fca0816476b3FD',
    18,
    'YPC',
    'YoungParrot Token',
    'https://Riceprotocol.org',
  ),
}
