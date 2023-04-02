import { ChainId, Token, ERC20Token, WBNB } from '@tiwatoyin/dyleum-sdk'
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
    ChainId.CORE,
    '0x543F944F3fc1fA5fCF723e74Fa3434224109aDe1',
    18,
    'xRICE',
    'xRice Token',
    'https://Riceprotocol.org',
  ),
  syrup: new ERC20Token(
    ChainId.CORE,
    '0x18324D12eFa716190ADA59506ee984c332067102',
    18,
    'Syrub',
    'SyrupBar Token',
    'https://Riceprotocol.org',
  ),
  usdt: new ERC20Token(
    ChainId.CORE,
    '0x81bCEa03678D1CEF4830942227720D542Aa15817',
    18,
    'USDT',
    'Tether USD',
    'https://Riceprotocol.org',
  ),
  rlh: new ERC20Token(
    ChainId.CORE,
    '0x820DDF1a5bd1bFDC0C78768c7998Be44F7F9d257',
    18,
    'RLH',
    'Rice Liquidity Helper',
    'https://Riceprotocol.org',
  ),
}
