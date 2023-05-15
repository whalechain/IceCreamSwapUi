import { z } from 'zod'
import { prisma } from '../prisma'
import { isKyc, isMod } from '../session'
import { sendTelegramMessage } from '../telegram'
import { publicProcedure, router } from '../trpc'
import { getChain } from '@icecreamswap/constants'

export const kycRouter = router({
  delegate: publicProcedure
    .input(
      z.object({
        targetAddress: z.string(),
        sourceAddress: z.string(),
        chainId: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session?.user || !isKyc(ctx.session.user)) {
        throw new Error('Unauthorized')
      }
      const { targetAddress, sourceAddress, chainId } = input
      const chain = getChain(chainId)
      if (!chain) {
        throw new Error('Invalid chain')
      }
      await prisma.delegation.create({
        data: {
          chainId,
          target: targetAddress,
          source: {
            connect: {
              address: sourceAddress.toLowerCase(),
            },
          },
          status: 'PENDING',
        },
      })
      const explorerUrl = chain.blockExplorers?.default.url
      sendTelegramMessage(
        `New delegation request:
Target: [${targetAddress}](${explorerUrl}/address/${targetAddress})
Source: [${sourceAddress}](${explorerUrl}/address/${sourceAddress})
Chain: ${chain.network}`,
      )
    }),
})
