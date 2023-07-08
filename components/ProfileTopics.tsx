type Props = {
    user: {
        name?: string | null | undefined
    } | undefined,
}
export default function ProfileTopics({user}: Props){
    return (
        <>
        <div className="flex flex-col gap-4 place-items-center">
                <h1 className="text-3xl font-bold ">Topics</h1>
        </div>
        </>
    )
}