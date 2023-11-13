import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages:{
        signIn: '/wtf'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                username: { label: "Username", type: "text"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials:any){

                const res = await fetch('https://melivecode.com/api/login',{
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }
                })
                const response = await res.json()
                console.log(response)
                if(response.status === 'ok'){
                    return response.user
                }
                return null
            }
        })
        
    ]
})

export {handler as GET, handler as POST}