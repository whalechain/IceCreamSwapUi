import { Button, Flex, Text } from '@pancakeswap/uikit'
import AppWrapper from 'components/AppWrapper'
import { useAccount, useSigner } from 'wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useSWR from 'swr'
import { useActiveChain } from 'hooks/useActiveChain'
import { useToken } from 'hooks/Tokens'
import { Contract, utils } from 'ethers'
import { ERC20_ABI } from 'config/abi/erc20'
import { ERC20 } from '@chainsafe/chainbridge-contracts'
import Link from 'next/link'
import { useTransactionAdder } from 'state/transactions/hooks'

export const Kyc: React.FC = () => {
  const chain = useActiveChain()
  const { address, status } = useAccount()
  const token = useToken(chain.kyc?.stableCoin)
  const addTransaction = useTransactionAdder()
  const paid = useSWR(
    address ? `kyc/${address}` : null,
    async () => {
      const response = await fetch(`api/kyc/${address}`)
      const data = await response.json()
      console.log(data)
      return data
    },
    { refreshInterval: 2000 },
  )
  const { data: signer } = useSigner()

  const handlePayment = async () => {
    if (!token) return
    if (!signer) return
    if (!chain.kyc) return
    const tokenContract = new Contract(token.address, ERC20_ABI, signer) as ERC20
    const tx = await tokenContract.transfer(
      chain.kyc?.feeWallet,
      utils.parseUnits(String(chain.kyc.fee), token.decimals),
    )
    addTransaction(tx, {
      summary: `Pay ${chain.kyc.fee} ${token.symbol} to get your KYC token`,
    })
  }

  return (
    <AppWrapper title="Kyc" subtitle="Get your soulbound token now!">
      <Flex flexDirection="column" gap="0.75em">
        <Text>
          The IceCream KYC-Soulbound Token will allow you to verify your identity. This will allow projects to provide
          airdrops more easily to you.
        </Text>
        <Text>
          To get your token, you will need to pay a fee of {chain.kyc?.fee} {token?.symbol}. After you pay, you will be
          redirected to a KYC form, where you will need to provide your identity information. After you submit the form,
          your token will be sent to your wallet.
        </Text>
        <Flex alignItems="start" gap="1em" flexDirection="column" justifyContent="stretch">
          {status === 'connected' ? (
            paid.data ? (
              <Link href="https://icecreamswap.synaps.me" passHref legacyBehavior>
                <Button as="a" height="40px" width="100%">
                  Proceed to KYC
                </Button>
              </Link>
            ) : (
              <Button onClick={handlePayment} height="40px" width="100%">
                Pay
              </Button>
            )
          ) : (
            <ConnectWalletButton />
          )}
        </Flex>
      </Flex>
    </AppWrapper>
  )
}
