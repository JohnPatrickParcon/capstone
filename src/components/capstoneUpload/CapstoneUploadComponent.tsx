"use client"

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function CapstoneUploadComponent(){
    return(
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="File">Capstone file</Label>
            <Input id="CapstoneFile" type="file" />
            <Textarea
                id="message"
              placeholder="Type your message here..."
              className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <Button variant={'outline'}>Upload</Button>
        </div>
    )
}