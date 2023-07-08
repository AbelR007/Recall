import Image from "next/image"
import { options } from "../app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User
}

async function ProfileCard({user} : Props) {
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

    const session = await getServerSession(options)
    const username = session?.user?.name;
    const useremail = session?.user?.email;
    const userimage = session?.user?.image;

    // return (
    //     <>
    //     <div className="flex flex-col gap-4 place-items-center">
    //             <h1 className="text-4xl font-bold ">Profile</h1>
    //         <div className="flex flex-row place-items-center">
    //         {userImage}
    //         <div className="p-3"></div>
    //                 <div>
    //                     <span className="font-bold text-2xl">{user?.name}</span><br/>
    //                     <span className="text-slate-400 text-sm">{user?.email}
    //                         </span>
    //                 </div>
    //         </div>
    //     </div>
        // {/* <div className="flex flex-col p-6 bg-white rounded-lg">
        //     Email =&gt; {user?.email}
        // </div> */}
        // // </>
    return (
        <div className="flex flex-row place-content-around items-center my-6 bg-white pb-6 w-3/6 rounded-xl max-h-full">
            {/* <ProfileCard user={session?.user} /> */}
            <div className="flex flex-col gap-4 place-items-center">
                <div className="flex flex-row place-items-center">
                    <Image
                        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                        src={userimage ?? "/"}
                        width={100}
                        height={100}
                        alt={username ?? "Profile Pic"}
                        priority={true}
                    />
                    <div className="p-3"></div>
                    <div>
                        <span className="font-bold text-2xl">{session?.user?.name}</span><br />
                        <span className="text-slate-400 text-sm">{session?.user?.email}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;
