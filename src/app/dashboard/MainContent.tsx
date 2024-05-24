import MainContentStudent from "./(MainContentUsers)/MainContentStudent"

export default async function MainContent({user_role,}: {user_role: string,}) {
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
