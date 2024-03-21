import {Address} from "wagmi";
import {useEffect, useState} from "react";
import {createWeb3Name} from "@web3-name-sdk/core";


export const useSpaceIdNameForAddress = (address: Address, fetchData = true) => {
  const [name, setName] = useState<string>()
  useEffect(() => {
    const fetchName = async () => {
      const web3name = createWeb3Name()
      const name = await web3name.getDomainName({address})
      setName(name)
    }

    if (!fetchData) {
      setName(undefined)
    } else {
      fetchName().catch(reason => {
        console.log("Error while resolving SpaceId domain name for address", reason)
        setName(undefined)
      })
    }
  }, [address, fetchData])
  return name
}