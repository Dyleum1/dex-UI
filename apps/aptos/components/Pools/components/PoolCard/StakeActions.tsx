import { Token } from '@tiwatoyin/dyleum-sdk'
import { Pool } from '@pancakeswap/uikit'
import StakeModal from './StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
