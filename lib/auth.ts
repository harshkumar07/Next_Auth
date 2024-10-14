import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const NEXT_AUTH ={
    providers:[
        CredentialsProvider({
            name: "Email",
            credentials:{
                username : { label:'username', type:'email', placeholder:''},
                password : { label:'password', type:'password', placeholder:''},
            },
            async authorize(credentials: any) {
               console.log(credentials);

               // return null;

                return{
                    id:"1",
                    name:"Harsh Kumar",
                    email:"harshku068@gmail.com"
                };
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            console.log(token)
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
    pages:{
        signIn:"/signin"
    }
}