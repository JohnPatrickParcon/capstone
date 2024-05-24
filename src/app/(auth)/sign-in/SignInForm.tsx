'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { login } from '../actions';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';

//validation using zod
const authSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({message: "Email is invalid"}).trim().toLowerCase(),
    password: z.string().min(1, {message: "Password is required"}).trim()
});

export default function SignInForm() {
  const toast = useToast()
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit: SubmitHandler<z.infer<typeof authSchema>> = (data) => {
    login(data)
  }
  return (
    <>
    <Form {...form}>
      <div className='w-fit bg-slate-300 rounded-md space-y-2 p-4 flex flex-col items-center'>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full mt-6'>
          Sign in
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
      </div>
      <p>If you don&apos;t have an account, please &nbsp;</p>
      <Link href='/sign-up' className='text-blue-500 hover:underline'>Sign up</Link>
      </div>
    </Form>
    </>
  )
}