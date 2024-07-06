"use client"

import { Loader2, LogOut, MessageCircle, Calendar, CalendarCheck, Book, Group } from "lucide-react"
import { Button } from "../ui/button"
import { logout } from "./actions"
import { useState } from "react"
import { usePageNavigationContext } from "@/app/dashboard/PageNavigationContextProvider"

export default function SideMenuBar() {
  const [buttonSpinner, setButtonSpinner] = useState(false)
  const { setNavigation, user_role } = usePageNavigationContext()
  
  function logouthandler() {
    setButtonSpinner(true)
    logout()
  }

  if(user_role === 'Student'){
    return(
      <>
      <aside className="border-r bg-zinc-300 flex h-full gap-2">
      <nav className="flex flex-col items-start gap-2 px-2 py-4 text-sm font-medium lg:px-4">
      <Button 
          onClick={() => {setNavigation("User")}}
          variant={'ghost'}>
            <Book className="mr-2 h-6 w-6 p-1" />
            User
        </Button>
        <Button 
          onClick={() => {setNavigation("Capstone")}}
          variant={'ghost'}>
            <Book className="mr-2 h-6 w-6 p-1" />
            Capstone
        </Button>
        <Button 
          onClick={() => {setNavigation("Message")}}
          variant={'ghost'}>
            <MessageCircle className="mr-2 h-6 w-6 p-1" />
            Message
        </Button>
        <Button 
          onClick={() => {setNavigation("Consultation")}}
          variant={'ghost'}>
            <Calendar className="mr-2 h-6 w-6 p-1" />
            Consultation
        </Button>
        <Button 
          onClick={() => {setNavigation("Defense")}}
          variant={'ghost'}>
            <CalendarCheck className="mr-2 h-6 w-6 p-1" />
            Defense
        </Button>
        <Button
          className="flex items-center rounded-lg"
          variant={"destructive"} 
          disabled={buttonSpinner}
          onClick={()=>{logouthandler()}}>
            {buttonSpinner ? 
              <Loader2 className="mr-2 h-6 w-6 p-1 animate-spin" /> 
            :            
              <LogOut className="mr-2 h-6 w-6 p-1"/>                       
            }
            Logout
        </Button>
      </nav>
    </aside>
    </>
    )
  }

  if(user_role === 'Instructor'){
    return(
      <>
      <aside className="border-r bg-zinc-300 flex h-full gap-2">
      <nav className="flex flex-col items-start gap-2 px-2 py-4 text-sm font-medium lg:px-4">
        <Button 
          onClick={() => {setNavigation("Assigned Groups")}}
          variant={'ghost'}>
            <Group className="mr-2 h-6 w-6 p-1" />
            Assigned Groups
        </Button>
        <Button 
          onClick={() => {setNavigation("Message")}}
          variant={'ghost'}>
            <MessageCircle className="mr-2 h-6 w-6 p-1" />
            Message
        </Button>
        <Button 
          onClick={() => {setNavigation("Consultation")}}
          variant={'ghost'}>
            <Calendar className="mr-2 h-6 w-6 p-1" />
            Consultation
        </Button>
        <Button 
          onClick={() => {setNavigation("Defense")}}
          variant={'ghost'}>
            <CalendarCheck className="mr-2 h-6 w-6 p-1" />
            Defense
        </Button>
        <Button
          className="flex items-center rounded-lg"
          variant={"destructive"} 
          disabled={buttonSpinner}
          onClick={() => {logouthandler()}}>
            {buttonSpinner ? 
              <Loader2 className="mr-2 h-6 w-6 p-1 animate-spin" /> 
            :            
              <LogOut className="mr-2 h-6 w-6 p-1"/>                       
            }
            Logout
        </Button>
      </nav>
    </aside>
      </>
    )
  } 
  
  if(user_role === 'Coordinator'){
    return(
      <>
      <aside className="border-r bg-zinc-300 flex h-full gap-2">
      <nav className="flex flex-col items-start gap-2 px-2 py-4 text-sm font-medium lg:px-4">
        <Button 
          onClick={() => {setNavigation("Assigned Groups")}}
          variant={'ghost'}>
            <Group className="mr-2 h-6 w-6 p-1" />
            Assigned Groups
        </Button>
        <Button 
          onClick={() => {setNavigation("Message")}}
          variant={'ghost'}>
            <MessageCircle className="mr-2 h-6 w-6 p-1" />
            Message
        </Button>
        <Button 
          onClick={() => {setNavigation("Consultation")}}
          variant={'ghost'}>
            <Calendar className="mr-2 h-6 w-6 p-1" />
            Consultation
        </Button>
        <Button 
          onClick={() => {setNavigation("Defense")}}
          variant={'ghost'}>
            <CalendarCheck className="mr-2 h-6 w-6 p-1" />
            Defense
        </Button>
        <Button
          className="flex items-center rounded-lg"
          variant={"destructive"} 
          disabled={buttonSpinner}
          onClick={() => {logouthandler()}}>
            {buttonSpinner ? 
              <Loader2 className="mr-2 h-6 w-6 p-1 animate-spin" /> 
            :            
              <LogOut className="mr-2 h-6 w-6 p-1"/>                       
            }
            Logout
        </Button>
      </nav>
    </aside>
      </>
    )
  }  
}
