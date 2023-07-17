import Link from "next/link"

type TopicProps = {
    id: number
    title: string
    content: string | null
    lastRevisedAt: Date
    rating: number
}

async function TopicCard({id, title, content, lastRevisedAt, rating} : TopicProps){
    return(
        <div key={id} className="text-xl text-center mt-3 bg-white p-6 w-3/6 rounded-xl shadow-lg">
            <Link href={`/topic/${id}`}>
                <h2 className="underline decoration-sky-400 decoration-2 underline-offset-2">{title}</h2>
                <p className="text-sm text-slate-500">
                    {lastRevisedAt.getDate()}th&nbsp;
                    {lastRevisedAt.toLocaleString("en-US", { month: "long" })},&nbsp;
                    {lastRevisedAt.getFullYear()} ({rating})
                </p>
                {/* <p>{content}</p> */}
            </Link>
        </div>
    )
}
export default TopicCard;