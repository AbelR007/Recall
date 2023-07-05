import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User
}

function ProfileCard({user} : Props) {
    const userImage = user?.image ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={user?.image}
            width={100}
            height={100}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <>
        <div className="flex flex-col gap-4 place-items-center">
                <h1 className="text-4xl font-bold ">Profile</h1>
            <div className="flex flex-row place-items-center">
            {userImage}
            <div className="p-3"></div>
                    <div>
                        <span className="font-bold text-2xl">{user?.name}</span><br/>
                        <span className="text-slate-400 text-sm">{user?.email}
                            </span>
                    </div>
            </div>
        </div>
        {/* <div className="flex flex-col p-6 bg-white rounded-lg">
            Email =&gt; {user?.email}
        </div> */}
        </>
    )
}
export default ProfileCard;
