'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () =>{
    const sessions = useSession();
    return <div>
        
        <button onClick={()=>{
            signIn()
        }}>SignIn</button>
        <button onClick={()=>{
            signOut()
        }}>Logout</button>
     {JSON.stringify(sessions)}
    </div>
};