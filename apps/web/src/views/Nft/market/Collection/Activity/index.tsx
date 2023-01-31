import { useRouter } from 'next/router'
import { useGetCollection } from 'state/nftMarket/hooks'
import ActivityHistory from '../../ActivityHistory/ActivityHistory'
import {useActiveChainId} from "../../../../../hooks/useActiveChainId";

const Activity = () => {
  const collectionAddress = useRouter().query.collectionAddress as string
  const { chainId } = useActiveChainId()
  const collection = useGetCollection(collectionAddress, chainId)

  return (
    <>
      <ActivityHistory collection={collection} />
    </>
  )
}

export default Activity
