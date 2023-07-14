import NavBar from "@/components/NavBar"
import TopicCard from "@/components/TopicCard"
import { prisma } from "@/db"
import Link from "next/link"
// import { type } from "os"s

function getTopics(topicid: number) {
    console.log("Num ", topicid, typeof topicid)
    console.log("Hi")

    return prisma.topic.findMany({
        where: {
            id: topicid as number
        }
    })
}

export default async function Page({ params }: { params: { id: number } }){
    const id = Number(params.id);
    console.log(typeof id)
    const topics = await getTopics(id)
    console.log(topics)

    return(
        <>
            <div className="min-h-screen flex justify-center items-center">
            {topics?.map(topic => (
                <div className="flex flex-col gap-1 items-center">
                    <Link href={`/topic/${topic.id}`}
                        className="text-6xl font-bold">
                        {topic.title}
                    </Link>
                    <div className="text-xl px-60 py-10">
                    {topic.content}
                    {topic.lastRevisedAt.getMonth()}
                    </div>
                    <p className="text-sm text-slate-500">{topic.lastRevisedAt.getDay()}/{topic.lastRevisedAt.getMonth()}/{topic.lastRevisedAt.getFullYear()} ({topic.rating})</p>
                </div>
            ))}
            </div>
        </>
    )
}
