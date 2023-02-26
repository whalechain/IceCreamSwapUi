import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export default async function handler() {
  const users = await client.user.findMany()

  res.json(users)
}
