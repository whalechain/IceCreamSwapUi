import { useEffect, useRef, useState } from 'react'
import { getChain } from '@icecreamswap/constants'
import { useActiveChainId } from "hooks/useActiveChainId";
import { useBlockNumber } from "wagmi";

/**
 * Returns a countdown in seconds of a given block
 */
const useBlockCountdown = (blockNumber: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>(null)
  const [secondsRemaining, setSecondsRemaining] = useState(0)
  const { chainId } = useActiveChainId()
  const { data: currentBlock } = useBlockNumber()

  useEffect(() => {
    const startCountdown = async () => {
      if (!currentBlock) {
        return
      }

      if (blockNumber > currentBlock) {
        setSecondsRemaining((blockNumber - Number(currentBlock)) * getChain(chainId).blockInterval)

        // Clear previous interval
        if (timer.current) {
          clearInterval(timer.current)
        }

        timer.current = setInterval(() => {
          setSecondsRemaining((prevSecondsRemaining) => {
            if (prevSecondsRemaining === 1) {
              clearInterval(timer.current)
            }

            return prevSecondsRemaining - 1
          })
        }, 1000)
      }
    }

    startCountdown()

    return () => {
      clearInterval(timer.current)
    }
  }, [setSecondsRemaining, blockNumber, timer])

  return secondsRemaining
}

export default useBlockCountdown
