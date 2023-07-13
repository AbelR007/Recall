import { prisma } from '@/db'
// 
// import { useState } from "react"

export default async function CreatePost() {
    // const [title, setTitle] = useState("")
    const userID = await prisma.user.findUnique({
        where: { email: 'abelroi007@gmail.com' }
    })
    const upDate = async () => {
        await fetch('/api/topic', {
            method: 'POST',
            body: JSON.stringify({
                topic: "Idk",
                content: "This is",
                userId: userID
            })
        })
    }
    return(
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={upDate}>
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
                // onClick={createnewTopics}
                >
                    Add Topic
                </button>
            </div>
        </form>
    )
}
