"use client"

import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type PageNavigationContext = {
  navigation: string,
  setNavigation: Dispatch<SetStateAction<string>>,
  user_id: string | undefined,
}

const PageNavigationContext = createContext<PageNavigationContext | null>(null);

export default function PageNavigationContextProvider({children}: {children: React.ReactNode}) {
  const getUserID = useQuery({
    queryKey: ['getUserID'],
    queryFn: async () => {
      const supabase = createClient();
      const {data} = await supabase.auth.getUser();
      const userID = data.user?.id
      return userID
    }
  })
  const user_id = getUserID.data
  const [navigation, setNavigation] = useState("")
  return (
    <PageNavigationContext.Provider value={{navigation, setNavigation, user_id}}>
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