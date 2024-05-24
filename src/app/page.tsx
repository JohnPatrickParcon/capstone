import CapstoneTable from "@/components/publicTable/CapstoneTable";
import { createClient } from "@/utils/supabase/server";

export default async function Main() {
  const supabase = createClient()
  const { data: countries, error } = await supabase
  .from('countries')
  .select('id, name')
  .range(0,9)
  
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col">
      {countries?.map( (country) => {return(<><p key={country.id}>{country.name}</p></>)})}
      </div>
    </div>
  )
}
