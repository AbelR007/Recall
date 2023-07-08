"use client"
import { getServerSession } from "next-auth";
import NavBar from "../../components/NavBar";
import { options } from "../api/auth/[...nextauth]/options";
import { prisma } from '../../server/db/client';
import axios from "axios";

import { useState } from 'react';

export default async function AddTopic() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const session = await getServerSession(options);
    const user = session?.user;

    const userID = (await prisma.user.findUnique({
        where: { email: 'abelroi007@gmail.com' }
    }))?.id

    const submitTopic = async (e) => {
        e.preventDefault();

        const body = { title, content, userID};

        const response = await fetch('/api/topics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            console.log("Err")
            // Topic created successfully
        }
    }

    return (
        <form onSubmit={submitTopic}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Content:
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </label>
            <button type="submit">Add Topic</button>
        </form>
    )
}

async function AddTopics(){
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
    // const handleSubmit = async ({title, content}) => {
    //     const {data} = await axios.post('/api/topics', {
    //         title, content
    //     })
    //     console.log(data)
    // }

    return (
        <>
        <NavBar/>
            <div className="flex h-screen">
            <div className="w-full max-w-xs m-auto">
                {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit} action="#" method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Title"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Content
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">                             
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        // onClick={createnewTopics}
                        >
                            Add Topic
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy; Recall | Signed in as {session?.user?.name ?? "Guest"}
                </p> */}
            </div>
            </div>
        </>
    );
}
