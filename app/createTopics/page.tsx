import NavBar from "@/components/NavBar";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export default async function CreateTopic() {
    const session = await getServerSession(options);
    return (
        <div className="max-h-screen">
        <NavBar/>
        {/* <div className="flex items-center"> */}
        <div className="flex flex-col items-center content-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name="title" type="text" placeholder="Enter Title" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Content
                    </label>
                    <input className="h-20 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="content" type="text" placeholder="Enter Content" />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Topic
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy; Recall | Signed in as {session?.user?.name ?? "Guest"}
            </p>
        </div>        
        {/* </div> */}
        </div>
    )
};
