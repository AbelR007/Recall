import Link from "next/link"

type TopicProps = {
    id: number
    title: string
    content: string
    lastRevisedAt: Date
    rating: number
}

async function TopicCard({id, title, content, lastRevisedAt, rating} : TopicProps){
    return(
        <li className="flex gap-1 items-center">
            <Link href={`/topic/${id}`}
            className="">
                {title}
            </Link>
        </li>
    )
}
export default TopicCard;