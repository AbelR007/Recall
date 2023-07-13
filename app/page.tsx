import { prisma } from '@/db'
// import { signIn, signOut, useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'
import UserCard from '../components/UserCard'

import { redirect } from "next/navigation"
import NavBar from '../components/NavBar'
import TopicCard from '@/components/TopicCard'

// Create a function called RecallAlgo that takes into two integer parameters, days and rating and calculates the result after multiplying it
function RecallAlgorithm(days: number, rating: number): number {
  const Result = (rating/10)*(1-(days/(days+0.5))) * 100
  return Result;
}

function getTopics() {
  return prisma.topic.findMany()
}

export default async function Home() {
  const session = await getServerSession(options)

  const data = await prisma.topic.findMany()
  console.log(data)

  const topics = await getTopics();


  
  return (
    <div>
      <NavBar/>
      
      <h1>Recall App</h1>

      <ul className="pl-4">
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
      )}
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
