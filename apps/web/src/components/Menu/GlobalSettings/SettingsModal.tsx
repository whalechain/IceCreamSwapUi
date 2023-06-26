import { useState, useCallback, ReactNode } from 'react'
import styled from 'styled-components'
import {
  Text,
  PancakeToggle,
  Toggle,
  Flex,
  Modal,
  InjectedModalProps,
  ThemeSwitcher,
  ExpertModal,
  QuestionHelper,
  PreTitle,
  ModalV2,
} from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import { SUPPORT_ZAP } from '../../../config/constants/supportChains'
import { useSubgraphHealthIndicatorManager, useUserUsernameVisibility } from 'state/user/hooks'
import { useSwapActionHandlers } from '../../../state/swap/useSwapActionHandlers'
import { useActiveChainId } from '../../../hooks/useActiveChainId'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from '../../../hooks/useTheme'
import {
  useAudioPlay,
  useExpertMode,
  useUserSingleHopOnly,
  useUserExpertModeAcknowledgement,
} from '@pancakeswap/utils/user'
import GasSettings from './GasSettings'
import TransactionSettings from './TransactionSettings'
import { useUserTokenRisk } from 'state/user/hooks/useUserTokenRisk'
import {
  useOnlyOneAMMSourceEnabled,
  useUserSplitRouteEnable,
  useUserStableSwapEnable,
  useUserV2SwapEnable,
  useUserV3SwapEnable,
  useRoutingSettingChanged,
} from 'state/user/smartRouter'
import { SettingsMode } from './types'
import { useIsAkkaSwapModeActive, useIsAkkaSwapModeStatus } from '../../../state/global/hooks'
import {
  AutoColumn,
  AutoRow,
  Button,
  ButtonProps,
  Checkbox,
  Message,
  MessageText,
  NotificationDot,
  RowFixed,
} from '@pancakeswap/uikit/src/components'
import { AtomBox } from '@pancakeswap/ui'
import { useMMLinkedPoolByDefault } from 'state/user/mmLinkedPool'

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  height: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    max-height: 90vh;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-height: none;
  }
`

export const withCustomOnDismiss =
  (Component) =>
  ({
    onDismiss,
    customOnDismiss,
    mode,
    ...props
  }: {
    onDismiss?: () => void
    customOnDismiss: () => void
    mode: SettingsMode
  }) => {
    const handleDismiss = useCallback(() => {
      onDismiss?.()
      if (customOnDismiss) {
        customOnDismiss()
      }
    }, [customOnDismiss, onDismiss])

    return <Component {...props} mode={mode} onDismiss={handleDismiss} />
  }

const SettingsModal: React.FC<React.PropsWithChildren<InjectedModalProps>> = ({ onDismiss, mode }) => {
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  // const [audioPlay, toggleSetAudioMode] = useAudioModeManager()
  // isAkkaSwapActive checks if akka router is generally active or not
  const [isAkkaSwapActive, toggleSetAkkaActive, toggleSetAkkaActiveToFalse, toggleSetAkkaActiveToTrue] =
    useIsAkkaSwapModeActive()

  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false)
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useUserExpertModeAcknowledgement()
  const [expertMode, setExpertMode] = useExpertMode()
  const [audioPlay, setAudioMode] = useAudioPlay()
  const [subgraphHealth, setSubgraphHealth] = useSubgraphHealthIndicatorManager()
  const [userUsernameVisibility, setUserUsernameVisibility] = useUserUsernameVisibility()
  const { onChangeRecipient } = useSwapActionHandlers()
  const { chainId } = useActiveChainId()
  const [tokenRisk, setTokenRisk] = useUserTokenRisk()

  const { t } = useTranslation()
  const { isDark, setTheme } = useTheme()

  if (showConfirmExpertModal) {
    return (
      <ExpertModal
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        onDismiss={onDismiss}
        toggleExpertMode={() => setExpertMode((s) => !s)}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
      />
    )
  }

  const handleExpertModeToggle = () => {
    if (expertMode || !showExpertModeAcknowledgement) {
      onChangeRecipient(null)
      setExpertMode((s) => !s)
    } else {
      setShowConfirmExpertModal(true)
    }
  }

  const handleAkkaModeToggle = () => {
    if (isAkkaSwapActive) {
      toggleSetAkkaActiveToFalse()
    } else {
      toggleSetAkkaActiveToTrue()
    }
  }

  return (
    <Modal title={t('Settings')} headerBackground="gradientCardHeader" onDismiss={onDismiss}>
      <ScrollableContainer>
        {mode === SettingsMode.GLOBAL && (
          <>
            <Flex pb="24px" flexDirection="column">
              <PreTitle mb="24px">{t('Global')}</PreTitle>
              <Flex justifyContent="space-between" mb="24px">
                <Text>{t('Dark mode')}</Text>
                <ThemeSwitcher isDark={isDark} toggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" mb="24px">
                <Flex alignItems="center">
                  <Text>{t('Subgraph Health Indicator')}</Text>
                  <QuestionHelper
                    text={t(
                      'Turn on subgraph health indicator all the time. Default is to show the indicator only when the network is delayed',
                    )}
                    placement="top"
                    ml="4px"
                  />
                </Flex>
                <Toggle
                  id="toggle-subgraph-health-button"
                  checked={subgraphHealth}
                  scale="md"
                  onChange={() => {
                    setSubgraphHealth(!subgraphHealth)
                  }}
                />
              </Flex>
              <GasSettings />
            </Flex>
          </>
        )}
        {mode === SettingsMode.SWAP_LIQUIDITY && (
          <>
            <Flex pt="3px" flexDirection="column">
              <PreTitle>{t('Swaps & Liquidity')}</PreTitle>
              <Flex justifyContent="space-between" alignItems="center" mb="24px">
                <GasSettings />
              </Flex>
              <TransactionSettings />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" mb="24px">
              <Flex alignItems="center">
                <Text>{t('Expert Mode')}</Text>
                <QuestionHelper
                  text={t('Bypasses confirmation modals and allows high slippage trades. Use at your own risk.')}
                  placement="top"
                  ml="4px"
                />
              </Flex>
              <Toggle
                id="toggle-expert-mode-button"
                scale="md"
                checked={expertMode}
                onChange={handleExpertModeToggle}
              />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" mb="24px">
              <Flex alignItems="center">
                <Text>{t('Disable Multihops')}</Text>
                <QuestionHelper text={t('Restricts swaps to direct pairs only.')} placement="top-start" ml="4px" />
              </Flex>
              <Toggle
                id="toggle-disable-multihop-button"
                checked={singleHopOnly}
                scale="md"
                onChange={() => {
                  setSingleHopOnly(!singleHopOnly)
                }}
              />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" mb="24px">
              <Flex alignItems="center">
                <Text>{t('Akka Router')}</Text>
                <QuestionHelper text={t('You can toggle akka router splitting')} placement="top-start" ml="4px" />
              </Flex>
              <Toggle
                id="toggle-expert-mode-button"
                scale="md"
                checked={isAkkaSwapActive}
                onChange={handleAkkaModeToggle}
              />
            </Flex>
            {/* <Flex justifyContent="space-between" alignItems="center" mb="24px"> */}
            {/*   <Flex alignItems="center"> */}
            {/*     <Text>{t('Flippy sounds')}</Text> */}
            {/*     <QuestionHelper */}
            {/*       text={t('Fun sounds to make a truly immersive pancake-flipping trading experience')} */}
            {/*       placement="top-start" */}
            {/*       ml="4px" */}
            {/*     /> */}
            {/*   </Flex> */}
            {/*   <PancakeToggle checked={audioPlay} onChange={toggleSetAudioMode} scale="md" /> */}
            {/* </Flex> */}
            <RoutingSettingsButton />
          </>
        )}
      </ScrollableContainer>
    </Modal>
  )
}

export default SettingsModal

export function RoutingSettingsButton({
  children,
  showRedDot = true,
  buttonProps,
}: {
  children?: ReactNode
  showRedDot?: boolean
  buttonProps?: ButtonProps
}) {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()
  const [isRoutingSettingChange] = useRoutingSettingChanged()
  return (
    <>
      <AtomBox textAlign="center">
        <NotificationDot show={isRoutingSettingChange && showRedDot}>
          <Button variant="text" onClick={() => setShow(true)} scale="sm" {...buttonProps}>
            {children || t('Customize Routing')}
          </Button>
        </NotificationDot>
      </AtomBox>
      <ModalV2 isOpen={show} onDismiss={() => setShow(false)} closeOnOverlayClick>
        <RoutingSettings />
      </ModalV2>
    </>
  )
}

function RoutingSettings() {
  const { t } = useTranslation()

  const [isStableSwapByDefault, setIsStableSwapByDefault] = useUserStableSwapEnable()
  const [v2Enable, setV2Enable] = useUserV2SwapEnable()
  const [v3Enable, setV3Enable] = useUserV3SwapEnable()
  const [split, setSplit] = useUserSplitRouteEnable()
  const [isMMLinkedPoolByDefault, setIsMMLinkedPoolByDefault] = useMMLinkedPoolByDefault()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const onlyOneAMMSourceEnabled = useOnlyOneAMMSourceEnabled()
  const [isRoutingSettingChange, reset] = useRoutingSettingChanged()

  return (
    <Modal
      title={t('Customize Routing')}
      headerRightSlot={
        isRoutingSettingChange && (
          <Button variant="text" scale="sm" onClick={reset}>
            {t('Reset')}
          </Button>
        )
      }
    >
      <AutoColumn
        width={{
          xs: '100%',
          md: 'screenSm',
        }}
        gap="16px"
      >
        <AtomBox>
          <PreTitle mb="24px">{t('Liquidity source')}</PreTitle>
          <Flex justifyContent="space-between" alignItems="center" mb="24px">
            <Flex alignItems="center">
              <Text>PancakeSwap V3</Text>
              <QuestionHelper
                text={
                  <Flex>
                    <Text mr="5px">
                      {t(
                        'V3 offers concentrated liquidity to provide deeper liquidity for traders with the same amount of capital, offering lower slippage and more flexible trading fee tiers.',
                      )}
                    </Text>
                  </Flex>
                }
                placement="top"
                ml="4px"
              />
            </Flex>
            <Toggle
              disabled={v3Enable && onlyOneAMMSourceEnabled}
              scale="md"
              checked={v3Enable}
              onChange={() => setV3Enable((s) => !s)}
            />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb="24px">
            <Flex alignItems="center">
              <Text>PancakeSwap V2</Text>
              <QuestionHelper
                text={
                  <Flex flexDirection="column">
                    <Text mr="5px">
                      {t('The previous V2 exchange is where a number of iconic, popular assets are traded.')}
                    </Text>
                    <Text mr="5px" mt="1em">
                      {t('Recommend leaving this on to ensure backward compatibility.')}
                    </Text>
                  </Flex>
                }
                placement="top"
                ml="4px"
              />
            </Flex>
            <Toggle
              disabled={v2Enable && onlyOneAMMSourceEnabled}
              scale="md"
              checked={v2Enable}
              onChange={() => setV2Enable((s) => !s)}
            />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb="24px">
            <Flex alignItems="center">
              <Text>PancakeSwap {t('StableSwap')}</Text>
              <QuestionHelper
                text={
                  <Flex flexDirection="column">
                    <Text mr="5px">
                      {t(
                        'StableSwap provides higher efficiency for stable or pegged assets and lower fees for trades.',
                      )}
                    </Text>
                  </Flex>
                }
                placement="top"
                ml="4px"
              />
            </Flex>
            <PancakeToggle
              disabled={isStableSwapByDefault && onlyOneAMMSourceEnabled}
              id="stable-swap-toggle"
              scale="md"
              checked={isStableSwapByDefault}
              onChange={() => {
                setIsStableSwapByDefault((s) => !s)
              }}
            />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mb="24px">
            <Flex alignItems="center">
              <Text>{`PancakeSwap ${t('MM Linked Pool')}`}</Text>
              <QuestionHelper
                text={
                  <Flex flexDirection="column">
                    <Text mr="5px">{t('Trade through the market makers if they provide better deal')}</Text>
                    <Text mr="5px" mt="1em">
                      {t(
                        'If a trade is going through market makers, it will no longer route through any traditional AMM DEX pools.',
                      )}
                    </Text>
                  </Flex>
                }
                placement="top"
                ml="4px"
              />
            </Flex>
            <Toggle
              id="toggle-disable-mm-button"
              checked={isMMLinkedPoolByDefault}
              onChange={(e) => setIsMMLinkedPoolByDefault(e.target.checked)}
              scale="md"
            />
          </Flex>
          {onlyOneAMMSourceEnabled && (
            <Message variant="warning">
              <MessageText>
                {t('At least one AMM liquidity source has to be enabled to support normal trading.')}
              </MessageText>
            </Message>
          )}
        </AtomBox>
        <AtomBox>
          <PreTitle mb="24px">{t('Routing preference')}</PreTitle>
          <AutoRow alignItems="center" as="label" mb="24px" gap="16px">
            <Checkbox
              id="toggle-disable-multihop-button"
              checked={!singleHopOnly}
              scale="sm"
              onChange={() => {
                setSingleHopOnly((s) => !s)
              }}
            />
            <RowFixed>
              <Text>{t('Allow Multihops')}</Text>
              <QuestionHelper
                text={
                  <Flex flexDirection="column">
                    <Text mr="5px">
                      {t(
                        'Multihops enables token swaps through multiple hops between serval pools to achieve the best deal.',
                      )}
                    </Text>
                    <Text mr="5px" mt="1em">
                      {t(
                        'Turning this off will only allow direct swap, which may cause higher slippage or even fund loss.',
                      )}
                    </Text>
                  </Flex>
                }
                placement="top"
                ml="4px"
              />
            </RowFixed>
          </AutoRow>
          <AutoRow alignItems="center" mb="24px" as="label" gap="16px">
            <Checkbox
              id="toggle-disable-multihop-button"
              checked={split}
              scale="sm"
              onChange={() => {
                setSplit((s) => !s)
              }}
            />
            <RowFixed alignItems="center">
              <Text>{t('Allow Split Routing')}</Text>
              <QuestionHelper
                text={
                  <Flex flexDirection="column">
                    <Text mr="5px">
                      {t(
                        'Split routing enables token swaps to be broken into multiple routes to achieve the best deal.',
                      )}
                    </Text>
                    <Text mr="5px" mt="1em">
                      {t(
                        'Turning this off will only allow a single route, which may result in low efficiency or higher slippage.',
                      )}
                    </Text>
                  </Flex>
                }
                placement="top"
                ml="4px"
              />
            </RowFixed>
          </AutoRow>
        </AtomBox>
      </AutoColumn>
    </Modal>
  )
}
