import { useRouter } from 'next/router'
import PageLoader from 'components/Loader/PageLoader'
import { isAddress } from 'utils'
import { pancakeBunniesAddress } from '../../constants'
import IndividualPancakeBunnyPage from './PancakeBunnyPage'
import IndividualNFTPage from './OneOfAKindNftPage'
import {useActiveChainId} from "../../../../../hooks/useActiveChainId";

const IndividualNFTPageRouter = () => {
  const { chainId } = useActiveChainId()
  const router = useRouter()
  // For PancakeBunnies tokenId in url is really bunnyId
  const { collectionAddress, tokenId } = router.query

  if (router.isFallback) {
    return <PageLoader />
  }

  const isPBCollection = isAddress(String(collectionAddress)) === pancakeBunniesAddress
  if (isPBCollection) {
    return <IndividualPancakeBunnyPage bunnyId={String(tokenId)} />
  }

  return <IndividualNFTPage collectionAddress={String(collectionAddress)} tokenId={String(tokenId)} chainId={chainId} />
}

export default IndividualNFTPageRouter
