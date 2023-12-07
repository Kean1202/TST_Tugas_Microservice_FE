"use client"
import React from "react"
import { signOut, signIn, useSession } from "next-auth/react"
import Link from "next/link";

const LoginButton = () => {
    const {data: session} = useSession()
    
    if (session && session.user){
        return(
            <div className="flex gap=4 ml-auto">
                <Link href="http://tst-critiquill-18221148.azurewebsites.net/docs">
                    <h1 className="text-3xl mx-4 text-white hover:text-orange-200 font-semibold">
                        START DEBATING
                    </h1>
                </Link>
                <p className="text-white text-3xl mx-4  font-semibold"> {session.user.name} </p>
                <button onClick={()=> signOut()} className="text-white text-3xl mx-4 hover:text-orange-200 font-semibold">
                    Sign Out
                </button>
            </div>
        )
    }
    return (
        <button onClick={() => signIn()} className="text-white text-3xl mx-4 hover:text-orange-200 font-semibold">
            Sign In With Google
        </button>
    )
}

export default LoginButton