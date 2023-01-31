import { ChainId } from '@pancakeswap/sdk'
import { useWeb3React } from '@pancakeswap/wagmi'
import { FetchStatus } from 'config/constants/types'
import useSWRImmutable from 'swr/immutable'
import { getAddress } from 'utils/addressHelpers'
import { getActivePools } from 'utils/calls'
import { bscRpcProvider } from 'utils/providers'
import { getVotingPower } from '../helpers'
import {useActiveChainId} from "../../../hooks/useActiveChainId";
import {useCurrentBlock} from "../../../state/block/hooks";

interface State {
  cakeBalance?: number
  cakeVaultBalance?: number
  cakePoolBalance?: number
  poolsBalance?: number
  cakeBnbLpBalance?: number
  ifoPoolBalance?: number
  total: number
  lockedCakeBalance?: number
  lockedEndTime?: number
}

const useGetVotingPower = (block?: number, isActive = true): State & { isLoading: boolean; isError: boolean } => {
  const { chainId } = useActiveChainId()
  const { account } = useWeb3React()
  const fetchedBlock = useCurrentBlock()
  const blockNumber = block || fetchedBlock
  const { data, status, error } = useSWRImmutable(
    account && isActive ? [account, block, 'votingPower'] : null,
    async () => {
      const eligiblePools = await getActivePools(chainId, blockNumber)
      const poolAddresses = eligiblePools.map(({ contractAddress }) => getAddress(contractAddress, chainId))
      const {
        cakeBalance,
        cakeBnbLpBalance,
        cakePoolBalance,
        total,
        poolsBalance,
        cakeVaultBalance,
        ifoPoolBalance,
        lockedCakeBalance,
        lockedEndTime,
      } = await getVotingPower(account, chainId, poolAddresses, blockNumber)
      return {
        cakeBalance,
        cakeBnbLpBalance,
        cakePoolBalance,
        poolsBalance,
        cakeVaultBalance,
        ifoPoolBalance,
        total,
        lockedCakeBalance,
        lockedEndTime,
      }
    },
  )
  if (error) console.error(error)

  return { ...data, isLoading: status !== FetchStatus.Fetched, isError: status === FetchStatus.Failed }
}

export default useGetVotingPower
