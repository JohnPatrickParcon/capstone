import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { createClient } from "@/utils/supabase/server";
import { Home, User } from "lucide-react";

export default async function NavBar() { 
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if(user){
    return(
      <nav className="bg-zinc-100 py-2 border-b border-s-zinc-200 w-full top-0">
        <div className="container flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2 font-semibold">
            Main
          </Link>
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <User/>
            <span>{user?.email}</span>
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-zinc-100 py-2 border-b border-s-zinc-200 sticky w-full top-0">
        <div className="container flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <Link href='/sign-in' className={buttonVariants()}>Sign in</Link>
            </div>
            <Link href='/'>
              <Home/>
            </Link>
        </div>
    </nav>
  )
}
