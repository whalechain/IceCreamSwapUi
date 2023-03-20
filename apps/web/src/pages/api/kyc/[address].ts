import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function handler(req, res) {
  const { address } = req.query

  const count = await client.kyc.count({
    where: {
      address,
    },
  })
  return res.json(count > 0)
}
