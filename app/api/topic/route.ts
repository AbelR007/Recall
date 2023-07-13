
import { prisma } from '@/db'

export async function GET(request: Request) {
    const data = await prisma?.topic.findMany()
    return new Response(JSON.stringify(data), {
        status: 200
    })
}

export async function POST(request: Request) {
    const data = await request.json()
    return new Response(data)
    // const topic = await prisma?.topic.create({
    //     data: {
    //         title,
    //         content,
    //         user: {
    //             connect: {
    //                 id: userId,
    //             }
    //         }
    //     }
    // })
}

