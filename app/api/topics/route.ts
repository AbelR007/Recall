import { prisma } from '@/db'
import { NextResponse } from "next/server"

type Feedback = {
    title: string,
    content?: string,
    userId: string,
}

export async function POST(request: Request) {
    const data: Feedback = await request.json()
    // console.log('data: ', data)

    // const { name, email, message } = data
    const { title, content, userId } = data
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

    return NextResponse.json(topic)
}

export async function GET() {
    const data = await prisma.topic.findMany()
    // res.status(200).json(data)
    return NextResponse.json(data)
}

// export default async function handle(req: NextApiRequest, res: NextApiResponse) {
//     const { method } = req

//     switch (method) {
//         case 'POST':
//             // get the title and content from the request body
//             const { title, content, userId } = req.body
//             // use prisma to create a new post using that data
//             const topic = await prisma.topic.create({
//                 data: {
//                     title,
//                     content,
//                     user: {
//                         connect: {
//                             id: userId,
//                         }
//                     }
//                 }
//             })
//             // send the post object back to the client
//             res.status(201).json(topic)
//             break
//         case 'GET':
//             const data = await prisma.topic.findMany()
//             res.status(200).json(data)
//         default:
//             res.status(405).end(`Method ${method} Not Allowed`)
//     }
// }