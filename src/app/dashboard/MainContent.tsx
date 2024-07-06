import { createClient } from "@/utils/supabase/server"
import MainContentStudent from "./(MainContentUsers)/MainContentStudent"

export default async function MainContent() {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser();
  const user_role = data.user?.user_metadata.role
  if(user_role === "Student"){
    return(
      <MainContentStudent/>
    )
  }
  if(user_role === "Instructor"){
    return(
      <MainContentStudent/>
    )
  }
  if(user_role === "Coordinator"){
    return(
      <MainContentStudent/>
    )
  }
}
