import { trpc, trpcClient } from '@icecreamswap/backend'
import { useTranslation } from '@pancakeswap/localization'
import { LogoutIcon, UserMenuItem } from '@pancakeswap/uikit'
import { useAccount, useSigner } from 'wagmi'

const LoginButton: React.FC = () => {
  const { t } = useTranslation()
  const { data: signer } = useSigner()
  const { address } = useAccount()
  const user = trpc.session.user.useQuery(undefined, {
    refetchInterval: false,
  })

  const onLogin = async () => {
    if (!signer && !address) return

    const { nonce } = await trpcClient.session.nonce.query()
    const signature = await signer!.signMessage(nonce)
    await trpcClient.session.login.mutate({
      signature,
      address: address!,
    })
  }

  const onLogout = async () => {
    await trpcClient.session.logout.mutate()
  }

  return user.data?.isLoggedIn ? (
    <UserMenuItem as="button" disabled={false} onClick={onLogout}>
      {t('Logout')} ({user.data?.name})
      <LogoutIcon />
    </UserMenuItem>
  ) : (
    <UserMenuItem as="button" disabled={false} onClick={onLogin}>
      {t('Login')}
    </UserMenuItem>
  )
}

export default LoginButton
