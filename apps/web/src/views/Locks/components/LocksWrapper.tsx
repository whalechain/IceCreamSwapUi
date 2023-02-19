import { AtomBox } from '@pancakeswap/ui'
import { Flex, Heading, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import { PropsWithChildren } from 'react'
import Page from 'views/Page'
import { StyledLockBody, StyledLockContainer } from '../styles'

interface LocksWrapperProps extends PropsWithChildren {
  title: React.ReactNode
  subtitle: React.ReactNode
}

const LocksWrapper: React.FC<LocksWrapperProps> = (props) => {
  const { title, subtitle, children } = props
  const { isMobile } = useMatchBreakpoints()

  return (
    <Page>
      <Flex marginBottom="4em" width="100%" height="100%" justifyContent="center">
        <Flex flexDirection="column">
          <StyledLockContainer>
            <AppBody>
              <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
                <AtomBox display="flex" width="full" alignItems="center" justifyContent="center">
                  <Heading as="h2">{title}</Heading>
                </AtomBox>
                <Text color="textSubtle" fontSize="14px" textAlign="center">
                  {subtitle}
                </Text>
              </AtomBox>
              <StyledLockBody>{children}</StyledLockBody>
            </AppBody>
          </StyledLockContainer>
        </Flex>
      </Flex>
    </Page>
  )
}

export default LocksWrapper
