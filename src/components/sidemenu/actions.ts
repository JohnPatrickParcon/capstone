"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const supabase = createClient()

export async function logout() {
    const { error } = await supabase.auth.signOut()

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function beCoordinator(){
    const { data, error } = await supabase.auth.updateUser({
        data: { role: 'Coordinator' }    
    })
    console.log(data, error);
}