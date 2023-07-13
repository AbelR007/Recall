import Link from "next/link"

type TopicProps = {
    id: number
    title: string
}

async function TopicCard({id, title} : TopicProps){
    return(
        <li className="flex gap-1 items-center">
            <Link href={`/topic/${id}`}>
                {title}
            </Link>
        </li>
    )
}
export default TopicCard;