"use client"

import { createClient } from '@/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function MessageDisplayComponent() {
  type messageType = {
    content?: string,
    created_at?: string,
    message_id?: number,
    user_id?: string
  }
    const [realTimeMessage, setRealTimeMessage] = useState<messageType>({})
    const supabase = createClient()
    const fetchInitMessage = useQuery({
        queryKey: ['fetchMessage'],
        queryFn: async () => {
            const {data} = await supabase
            .from('messages')
            .select('*');
            return data
        }
    })
    const fetchRealTimeMessage = useQuery({
        queryKey: ['realtimeChat'],
        queryFn: async () => {
          const channels = await supabase.channel('custom-all-channel')
            .on(
              'postgres_changes',
              { event: '*', schema: 'public', table: 'messages', },
              async (payload) => {
                const eventType = payload.eventType
                const newRecord = payload.new
                const oldRecord = payload.old
                setRealTimeMessage(newRecord)
              }
            )
          .subscribe();
          return channels
        }
    })
    const fetchChatName = useQuery({
      queryKey: ['fetchChatName'],
      queryFn: async () => {
        const {data:name} = await supabase
          .from('profiles')
          .select('user_id, name')
        return name
      }
    })
    // create render function
    function RenderMessages(){
      
      return(
        <p>test</p>
      )
    }
  return (
    <>
      <RenderMessages/>
    </>
  )
}
