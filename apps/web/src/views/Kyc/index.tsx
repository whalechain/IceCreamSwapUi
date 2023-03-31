import { Box, Button, Flex, Heading, PageHeader, Text } from '@pancakeswap/uikit'
import { isMobile } from 'react-device-detect'
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
import styled, { useTheme } from 'styled-components'
import kycAsset from './images/KYC.png'
import Page from 'components/Layout/Page'
import { tokens } from '@pancakeswap/ui'

const H1 = styled(Heading)`
  font-size: 32px;
  margin-bottom: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 64px;
    margin-bottom: 24px;
  }
`
const H2 = styled(Heading)`
  font-size: 16px;
  margin-bottom: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
    margin-bottom: 18px;
  }
`

const ImgWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    margin-left: 24px;
  }
`
export const Kyc: React.FC = () => {
  const chain = useActiveChain()
  const { address, status } = useAccount()
  const token = useToken(chain.kyc?.stableCoin)
  const addTransaction = useTransactionAdder()
  const paid = useSWR(
    address ? `kyc/${address}` : null,
    async () => {
      const response = await fetch(`api/kyc-info/${address}`)
      const data = await response.json()
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
  const { isDark } = useTheme()

  return (
    <Box background={isDark ? 'linear-gradient(135deg, #1d1c21 0%, #141317 100%)' : undefined}>
      <PageHeader
        background={isMobile ? `url(${kycAsset.src})` : '#E66280'}
        style={{
          backgroundPosition: 'right center',
          backgroundColor: '#E66280',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Flex maxWidth="800px" margin="auto">
          <Box>
            <H1 as="h1" color={tokens.colors.dark.secondary} scale="xxl">
              KYC
            </H1>
            <H2 color="#F4EEFF">Verify your identity</H2>
          </Box>
          <ImgWrapper>
            <img src={kycAsset.src} alt="kyc" />
          </ImgWrapper>
        </Flex>
      </PageHeader>
      <Page style={{ maxWidth: '800px' }}>
        <Flex flexDirection="column" gap="0.75em">
          <Text>
            The IceCream KYC-Soulbound Token will allow you to verify your identity. This will also allow projects to
            provide airdrops more easily to you.
          </Text>
          <Text>
            To get your token, you will need to pay a fee of {chain.kyc?.fee} {token?.symbol}. After you pay, you will
            be redirected to a KYC form, where you will need to provide your identity information. After you submit the
            form, your token will be sent to your wallet.
          </Text>
          <Flex alignItems="center" gap="1em" flexDirection="column" justifyContent="stretch">
            {status === 'connected' ? (
              paid.data === 'payed' ? (
                <Link href="https://icecreamswap.synaps.me" passHref legacyBehavior>
                  <Button as="a" height="40px" width="100%">
                    Proceed to KYC
                  </Button>
                </Link>
              ) : paid.data === 'verified' ? (
                <Flex>✔️ Your are successfuly verified</Flex>
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
      </Page>
    </Box>
  )
}
