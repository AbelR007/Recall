import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import NavBar from "../components/NavBar";
import Link from 'next/link';
import UserCard from '../components/UserCard';
import ProfileCard from '../components/ProfileCard';
import ProfileTopics from '../components/ProfileTopics';
import Image from "next/image"

export default async function Profile(){
    const session = await getServerSession(options)
    console.log("THIS IS MY CONTENT GET OUTTA HERE : ",session?.user?.name, session?.user?.email, session?.user?.image)
    const username = session?.user?.name;
    const useremail = session?.user?.email;
    const userimage = session?.user?.image;
    return (
        <>
        <NavBar/>
        <div className="">
            {session ? (
                <div className="flex flex-row place-content-around items-left p-6 border-2 mx-40 my-10 max-h-full">
                    {/* <ProfileCard user={session?.user} /> */}
                    <div className="flex flex-col gap-4 place-items-center">
                        <h1 className="text-4xl font-bold ">Profile</h1>
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
                    {/* <ProfileTopics user={session?.user} /> */}
                    {/* Profile Topics  */}
                    <div className="flex flex-col gap-4 place-items-center">
                        <h1 className="text-3xl font-bold ">Topics</h1>

                    </div>
                </div>
            ) : (
                <h1 className="text-1xl text-uppercase">
                    <Link href='/api/auth/signin' className="text-purple-700 font-semibold">
                        Sign In&nbsp;
                    </Link> 
                    first to checkout your Profile
                </h1>
            )}
        </div>
       </>
    )
}