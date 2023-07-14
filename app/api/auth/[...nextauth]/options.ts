import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from '@/db'

const adapter = PrismaAdapter(prisma);
export const options: NextAuthOptions = {
    adapter: adapter,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
   ],
   debug: true,
}