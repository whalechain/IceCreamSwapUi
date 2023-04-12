/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc'
import { sessionRouter } from './session'

export const appRouter = router({
  health: publicProcedure.query(() => 'yay!'),
  session: sessionRouter,
})

export type AppRouter = typeof appRouter
