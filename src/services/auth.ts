import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { NextRequest } from "next/server";
import type { Session } from "next-auth"; 

const authConfig: NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {  
            return !!auth?.user;
        }
    },
    pages: {
        signIn: "/login",
    }, 
};

export const authOptions = authConfig;

export const {
    auth,
    signIn,
    handlers: { GET, POST } 
} = NextAuth(authOptions);