import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledLockContainer = styled(Flex)`
  flex-shrink: 0;
  height: fit-content;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 40px;
  }
`

export const StyledLockBody = styled(Flex)`
  flex-direction: column;
  width: 100%;
  padding: 1em;
  gap: 1em;
`
