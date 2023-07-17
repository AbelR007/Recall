import Link from "next/link";

export default function Page(){
    return(
        <>
            <div className="overflow-hidden flex flex-col items-center justify-center text-6xl font-bold text-slate-700
          bg-gray-100 backdrop-filter backdrop-blur-sm opacity-35 border border-gray-200 border-radius-lg
        ">
                {/* <Image src={profimage} alt="" className='bg-cover'/> */}
                <h1 className="mt-20 text-[5em] font-bold from-violet-500 to-fuchsia-600 bg-gradient-to-r bg-clip-text text-transparent">
                    Recall.
                </h1>
                <p className="text-gray-400 pb-4"
                >A Modern Revision App</p>
                <div className="flex gap-4 m-5">
                    <Link
                        href="/api/auth/signin"
                        className="bg-purple-600 rounded shadow outline-none text-white uppercase px-4 py-2 text-base"
                    > Get Started
                    </Link>
                    <Link
                        href="/about"
                        className="border-2 border-slate-500 rounded shadow outline-none uppercase px-4 py-2 text-base"
                    > Know More
                    </Link>
                </div>
            </div>
        </>
    );
}