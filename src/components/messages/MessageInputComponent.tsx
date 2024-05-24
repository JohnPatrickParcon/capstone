"use client"

import { usePageNavigationContext } from '@/app/dashboard/PageNavigationContextProvider'
import { createClient } from '@/utils/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { CornerDownLeft } from 'lucide-react'

export default function MessageInputComponent() {
    const messageSchema = z.object({
        message: z.string().min(1)
      })
    const form = useForm<z.infer<typeof messageSchema>>({
        resolver: zodResolver(messageSchema)
      })
    const onSubmit: SubmitHandler<z.infer<typeof messageSchema>> = (data) => {
        insertMessage.mutate(data.message)
        form.reset()
      }
    const { user_id } = usePageNavigationContext()
    const insertMessage = useMutation({
        mutationKey: ['insertMessage'],
        mutationFn: async(input: string) => {
          const supabase = createClient();      
            await supabase
            .from('messages')
            .insert([
              { content: input, user_id: user_id },
            ])
            .select()
        }
      })
  return (
    <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          {...form.register('message')}
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">          
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
    </form>
  )
}
