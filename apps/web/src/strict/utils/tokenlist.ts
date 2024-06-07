// import { trpcClient } from '@icecreamswap/backend'
import { TokenList } from '@pancakeswap/token-lists'

export const getDefaultTokenList = async (): Promise<TokenList> => {
  return [] as any;
  // @ts-ignore
  // return trpcClient.token.defaultList.query()
  // return TokenList;
}
