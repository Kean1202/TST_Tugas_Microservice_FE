"use client"
import Link from "next/link";
import Image from "next/image";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const userLoggedIn = false
  return (
    <nav className="flex-between flex w-full mb-8 pt-8 pb-8 px-8 bg-indigo-500">
      <div className="mr-auto">
        <Link href="/" className="flex gap-4 flex-center">
            <Image
                src="/quill.webp"
                alt="CritiQuill Logo"
                width={40}
                height={40}
                className="object-contain"
            />
            <p className="logo_text hover:text-orange-200 text-white">CritiQuill Plus</p>
        </Link>
      </div>

    <div className="sm:flex hidden">
        <div className="flex-between gap-4 md:gap-8">
          {/* <Link href="/Auth/Login" className="text-white text-3xl mx-4 hover:text-orange-200 font-semibold">Log In</Link>
          <Link href="/Auth/Register" className="text-white text-3xl mx-4 hover:text-orange-200 font-semibold">Register</Link> */}
          <LoginButton/>
        </div>
      

    </div>
      
    </nav>
  )
}

export default Navbar