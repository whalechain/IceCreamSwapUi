import { useActiveChainId } from 'hooks/useActiveChainId'
import { useEnsAddress } from 'wagmi'
import {useEffect, useState} from "react"
import { createWeb3Name } from '@web3-name-sdk/core'

const ENS_NAME_REGEX = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/

const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/

export const useGetENSAddressByName = (ensNameOrAddress: string) => {
  const { chainId } = useActiveChainId()
  const [spaceIdAddress, setSpaceIdAddress] = useState<string>()

  const { data: recipientENSAddress } = useEnsAddress({
    name: ensNameOrAddress,
    chainId,
    enabled:
      (ENS_NAME_REGEX.test(ensNameOrAddress) || ADDRESS_REGEX.test(ensNameOrAddress)) &&
      false
  })

  useEffect(() => {
    const fetchWeb3Name = async () => {
      const web3name = createWeb3Name()
      const address: string = await web3name.getAddress(ensNameOrAddress)
      setSpaceIdAddress(address)
    }
    fetchWeb3Name().catch(reason => {
      console.error("Error in fetching web3 domain name from SpaceId", reason)
      setSpaceIdAddress(undefined)
    })
  }, [ensNameOrAddress])

  return recipientENSAddress || spaceIdAddress
}
