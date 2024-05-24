import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
    return(
      <div className="w-full h-screen flex flex-row items-center justify-center">
        <Spinner/>
      </div>
    )
  }