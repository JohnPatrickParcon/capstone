"use client"

import { usePageNavigationContext } from "../PageNavigationContextProvider"
import { CalendarComponent } from "@/components/calendar/Calendar";
import Message from "@/components/messages/Message";
import CapstoneUploadComponent from "@/components/capstoneUpload/CapstoneUploadComponent";

export default function MainContentStudent() {  
  const { navigation } =  usePageNavigationContext();
  
  if(navigation === "Capstone"){
    return(
      <CapstoneUploadComponent/>
    )
  }

  if(navigation === "Message"){
    return(
      <Message/>
    )
  }

  if(navigation === "Consultation"){
    return(
      <div className="bg-white rounded-md">
        <CalendarComponent/>
      </div>
    )
  }

  if(navigation === "Defense"){
    return(
      <div className="bg-white rounded-md">
        <CalendarComponent/>
      </div>
    )
  }
}
