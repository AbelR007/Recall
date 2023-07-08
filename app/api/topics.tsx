// pages/api/topics.ts
// import { PrismaClient } from '@prisma/client'
import { prisma } from '../../server/db/client'

import type { NextApiRequest, NextApiResponse } from 'next'

// const prisma = new PrismaClient()


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    switch (method) {
        case 'POST':
            // get the title and content from the request body
            const { title, content, userId } = req.body
            // use prisma to create a new post using that data
            const topic = await prisma.topic.create({
                data: {
                    title,
                    content,
                    user: {
                        connect: {
                            id: userId,
                        }
                    }
                }
            })
            // send the post object back to the client
            res.status(201).json(topic)
            break
        case 'GET':
            const data = await prisma.topic.findMany()
            res.status(200).json(data)
        default:
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}