"use client"

import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type PageNavigationContext = {
  navigation: string,
  setNavigation: Dispatch<SetStateAction<string>>,
  user_id?: string,
  user_role?: string,
}

const PageNavigationContext = createContext<PageNavigationContext | null>(null);

export default function PageNavigationContextProvider({children}: {children: React.ReactNode}) {
  const getUserInfo = useQuery({
    queryKey: ['getUserInfo'],
    queryFn: async () => {
      const supabase = createClient();
      const {data} = await supabase.auth.getUser();
      if(data){
        const userID = data.user?.id
        const userRole = data.user?.user_metadata.role
        return {
          user_id: userID,
          user_role: userRole,
        }
      }
      else{
        return {
          user_id: '',
          user_role: '',
        }
      }
    }
  })
  const user_id = getUserInfo.data?.user_id
  const user_role = getUserInfo.data?.user_role
  const [navigation, setNavigation] = useState("")
  return (
    <PageNavigationContext.Provider value={{navigation, setNavigation, user_id, user_role}}>
      {children}
    </PageNavigationContext.Provider>
  )
}

export function usePageNavigationContext(){
  const context = useContext(PageNavigationContext);
  if (!context){
    throw Error(
      "usePageNavigationContext must be used within PageNavigationContextProvider"
    );
  }
  return context;
}