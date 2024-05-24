"use client"

import MessageDisplayComponent from "./MessageDisplayComponent";
import MessageInputComponent from "./MessageInputComponent";

export default function Message(){
    return(
    <div className="w-full h-full flex flex-col justify-end items-end p-2 gap-2">
      <div className="bg-white w-full h-full rounded-md">
        <MessageDisplayComponent/>
      </div>
      <MessageInputComponent/>
    </div>
    )
}