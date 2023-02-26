import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function handler(req, res) {
  const users = await client.user.findMany()

  res.json(users)
}
