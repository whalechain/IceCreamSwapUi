import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function handler(req, res) {
  const { address } = req.query

  const kyc = await client.kyc.findFirst({
    where: {
      address: address.toLowerCase(),
    },
  })

  return res.json(kyc?.status || 'unverified')
}
