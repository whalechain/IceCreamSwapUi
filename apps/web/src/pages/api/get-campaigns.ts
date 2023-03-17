import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function handler(req, res) {
  const { chainId, filter, id } = req.body
  const tokens = await client.campaign.findMany({
    where: {
      chainId,
      address: filter,
      id,
    },
  })
  res.json(tokens)
}
