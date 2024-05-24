'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signup(formData: { 
    email: string, 
    password: string,
    name: string,
    role: string
    }) {
    const supabase = createClient()

    const result = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
        options: {
          data: {
            name: formData.name,
            role: formData.role,
          }
        }
      })
  
    if (result.error) {
      console.log(result.error);
      redirect('/error')
      
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }

export async function login(formData: { email: string, password: string }) {
    const supabase = createClient()

    const result = await supabase.auth.signInWithPassword({email: formData.email, password: formData.password})
    
    if (result.error) {
      redirect('/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }