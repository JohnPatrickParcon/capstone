import SideMenuBar from "@/components/sidemenu/SideMenuBar"
import { createClient } from "@/utils/supabase/server"
import PageNavigationContextProvider from "./PageNavigationContextProvider"
import MainContent from "./MainContent"

export default async function page() {
  const supabase = createClient()
  const {data} = await supabase.auth.getUser()
  const user_role = data.user?.user_metadata.role
  return (
    <div className="w-full h-screen flex flex-row">
      <PageNavigationContextProvider>
        <SideMenuBar user_role={user_role}/>
        <main className="w-full flex justify-center items-center">
          <MainContent user_role={user_role}/>
        </main>
      </PageNavigationContextProvider>
    </div>
  )
}
