import useSWRImmutable from 'swr/immutable'

export const useCakePrice = () => {
  return useSWRImmutable(
    ['cake-usd-price'],
    async () => {
      const cake = await (await fetch('https://farms-api.whalechain.live/price/cake')).json()
      return cake.price as string
    },
    {
      refreshInterval: 1_000 * 10,
    },
  )
}
