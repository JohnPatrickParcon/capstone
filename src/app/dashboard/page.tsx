import SideMenuBar from "@/components/sidemenu/SideMenuBar"
import PageNavigationContextProvider from "./PageNavigationContextProvider"
import MainContent from "./MainContent"

export default async function page() {
  return (
    <div className="w-full h-screen flex flex-row">
      <PageNavigationContextProvider>
        <SideMenuBar/>
        <main className="w-full flex justify-center items-center">
          <MainContent/>
        </main>
      </PageNavigationContextProvider>
    </div>
  )
}
