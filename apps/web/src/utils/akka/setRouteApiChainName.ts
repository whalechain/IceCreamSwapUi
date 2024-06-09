import { ChainId } from "@icecreamswap/constants"

export const setRouteApiChainName = (chainId: ChainId) => {
    switch (chainId) {
        case ChainId.CORE:
            return "core"
        default:
            return ""
    }
}
