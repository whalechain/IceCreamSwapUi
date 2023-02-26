import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function handler(req, res) {
  const user = await client.user.delete({
    where: {
      id: req.query.id,
    },
  })

  res.json(user)
}
