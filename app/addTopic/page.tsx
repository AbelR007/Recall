import { getServerSession } from "next-auth";
import NavBar from "../../components/NavBar";
import { prisma } from '@/db'
import { options } from "../api/auth/[...nextauth]/options";
// import AddPost from "@/components/AddPost";


export default async function AddTopics(){
    const session = await getServerSession(options);
    const user = session?.user;
    
    const userID = await prisma.user.findUnique({
        where: { email: 'abelroi007@gmail.com' }
    })
    // const createnewTopic = async () => {
    //     await prisma.topic.create({
    //     data: {
    //         title: 'Topic title Now added',
    //         content: 'Topic content This is It',
    //         user: {
    //             connect: {
    //                 id: userID?.id,
    //             }
    //         }
    //     }
    // })}
    // const handleSubmit = async () => {
    //     const title = "New Post"
    //     const content = "New Content"
    //     const {data} = await axios.post('/api/topics', {
    //         title, content
    //     })
    //     console.log(data)
    // }
    const createNewTopic = async () => {
        await fetch('/api/topic', {
            method: 'POST',
            body: JSON.stringify(
            {
                title: "New Title",
                content: "New content",
                userId: userID
            }
            )
        })
    }
    

    return (
        <>
        <NavBar/>
            <div className="flex h-screen">
            <div className="w-full max-w-xs m-auto">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Title
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Title" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Content
                            </label>
                            <input className="h-20 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Content" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                            onClick={createNewTopic}
                            >
                                Add Topic
                            </button>
                        </div>
                    </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy; Recall | Signed in as {session?.user?.name ?? "Guest"}
                </p>
            </div>
            </div>
        </>
    );
}
