import Link from "next/link";
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

export default async function NavBar(){
    const session = await getServerSession(options)
    return(
    <div>
    <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <nav className="flex flex-wrap items-center text-base lg:w-3/5">
                <Link href="/" className="font-bold hover:text-purple-900">Recall.</Link>
            </nav>
            <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">

            {session ? (
                <>
                <Link href="/profile" 
                className="mr-5 text-xs uppercase border-2 p-2 font-bold hover:text-gray-900 hover:bg-slate-200">Profile</Link>
                <Link href="/api/auth/signout"
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-600 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">            
                    Sign Out</Link>
                </>
                
            ): (
                <Link href="/api/auth/signin"
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-600 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                    Sign In
                </Link>
            )}  
            </div>
        </div>
    </header>
    </div>
    )
}