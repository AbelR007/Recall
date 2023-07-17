import { prisma } from '@/db'
// import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import UserCard from '../components/UserCard'

import { redirect } from "next/navigation"
import NavBar from '../components/NavBar'
import TopicCard from '@/components/TopicCard'
import Image from 'next/image'
import profimage from '../public/gridbg.jpg'
import Link from 'next/link'
import HomePage from '@/components/HomePage'

// Create a function called RecallAlgo that takes into two integer parameters, days and rating and calculates the result after multiplying it
function recallAlgo(rating: number, lastDate: Date){
  const days = lastDate.valueOf() - Date.now().valueOf();
  console.log("Days : ", days);
  const decay_factor = 0.8
  const retention_percentage: Number = (rating / 10) * (1 - (days / (days + decay_factor))) * 100
  console.log("Percent : ", rating, lastDate,"this", retention_percentage);
  return retention_percentage
}

function sortArrayByRating(array: any[]): any[] {
  // Create a new array to store the sorted values.
  const sortedArray: any[] = [];

  // Iterate through the original array.
  for (const item of array) {
    // Compare the current item's rating to the ratings in the sorted array.
    let index = 0;
    for (const sortedItem of sortedArray) {
      if (recallAlgo(item.rating, item.lastRevisedAt) > recallAlgo(sortedItem.rating, sortedItem.lastRevisedAt)) {
        break;
      }
      index++;
    }

    // Insert the current item into the sorted array at the correct index.
    sortedArray.splice(index, 0, item);
  }

  // Return the sorted array.
  return sortedArray;
}

function getTopics() {
  return prisma.topic.findMany()
}

export default async function Home() {
  const session = await getServerSession(options)

  const data = await prisma.topic.findMany()
  console.log(data)

  const topics = await getTopics();

  const newdata = sortArrayByRating(data);
  const now_data = newdata[0];
  const next_data = newdata[1];
  newdata.splice(0, 1);
  newdata.splice(0, 1);
  console.log("Now ",now_data);
  console.log("Next ", next_data);
  console.log("New Data :",newdata)
  
  return (
    <div>
      {session ? (
        <div className="flex justify-center items-center min-h-screen min-w-[50%] py-4">
          <div className="min-w-full p-4">
            <div className="flex flex-row justify-center items-center">
              <div className="text-4xl basis-2/4 font-bold text-center">Now</div>
              <div className="basis-3/4"><TopicCard key={now_data.id} {...now_data}/></div>
            </div>
            <div className='flex flex-row items-center justify-center'>
              <div className="text-4xl basis-2/4 font-bold text-center">Next</div>
              <div className="basis-3/4"><TopicCard key={next_data.id} {...next_data} /></div>
            </div>
            <div className='flex flex-row items-center justify-center'>
              <div className="text-4xl basis-2/4 font-bold text-center">Later</div>
              <div className="basis-3/4">
                {newdata?.map(topic => (
                  <TopicCard key={topic.id} {...topic} />
                ))}
                {/* <TopicCard key={newdata.at(2).id} {...newdata.at(2)} /> */}
              </div>
            </div>
          </div>
        </div>
      ): (
        <HomePage/>
        // <>        

        //   {/* <Image 
        //     src={profimage}
        //     // width={200}
        //     // height={auto}
        //     className={`bg-cover`}
        //     alt='hi'
        //   />
        //     <h1>This is a cover image</h1> */}
        //   {/* // </Image> */}
        // </>
      )}

      {/* <ul className="pl-4">
        {topics?.map(topic => (
          <TopicCard key={topic.id} {...topic} />
        ))}
      </ul>

      {data?.map((topic) =>
        <div key={topic.id}>
          <h2>{topic.title}</h2>
          <p>{topic.content}</p>
        </div>
      )}

      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )} */}
      {/* {!session && (
        <>
          {" "}
          Not signed in <button onClick={()=> signIn()}> Sign In</button>
          {" "}
        </>
      ) } {" "} */}
      {/* {session && (
        <>
          {" "}
          Signed in as {session.user.email} <br/>{" "}
          <button onClick={()=> signOut()}> Sign Out</button>
        </>
      )} */}
    </div>
  )
}
