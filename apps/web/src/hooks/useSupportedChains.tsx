import { createContext, PropsWithChildren, useContext } from 'react'

const SupportedChainsContext = createContext<number[]>([])

export const SupportedChainsProvider: React.FC<{ supportedChains: number[] } & PropsWithChildren> = ({
  children,
  supportedChains,
}) => {
  return <SupportedChainsContext.Provider value={supportedChains}>{children}</SupportedChainsContext.Provider>
}

export const useSupportedChains = () => {
  return useContext(SupportedChainsContext)
}
