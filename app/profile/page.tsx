import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import NavBar from "../../components/NavBar";
import ProfileCard from '../../components/ProfileCard';
import { redirect } from "next/navigation"
import { prisma } from '@/db';
import Link from 'next/link';


export default async function Profile(){
    // Checks for a Signed In Session
    const session = await getServerSession(options)
    if (!session) {
        redirect('/api/auth/signin')
    }
    
    // Gets the content from the username via Topics Model
    const username = session?.user?.name;
    const data = await prisma?.topic.findMany({
        where: {
            user: {
                name: username,
            } 
        }
    });

    return (
        <div>
        <div className="flex flex-col place-items-center">
            <ProfileCard user={session?.user} />
            <h1 className="text-xl uppercase font-bold">Topics</h1>
            {data?.map((topic) =>
            <div key={topic.id} className="text-xl text-center mt-3 bg-white p-6 w-3/6 rounded-xl">
                <Link href={`/topic/${topic.id}`}>
                <h2 className="">{topic.title}</h2>
                        <p className="text-sm text-slate-500">{topic.lastRevisedAt.getDay()}/{topic.lastRevisedAt.getMonth()}/{topic.lastRevisedAt.getFullYear()} ({topic.rating})</p>
                {/* <p>{topic.content}</p> */}
                </Link>
            </div>
            )}
        </div>
       </div>
    )
}

//             ) : (
/*/ <h1 className="text-1xl text-uppercase">
    <Link href='/api/auth/signin' className="text-purple-700 font-semibold">
        Sign In&nbsp;
    </Link>
    first to checkout your Profile
</h1>
            )}
*/