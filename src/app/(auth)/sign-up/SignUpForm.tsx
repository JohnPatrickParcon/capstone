'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { signup } from '../actions';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

//validation using zod
const authSchema = z.object({
    email: z.string().min(1, {message: "Email is required"}).email({message: "Email is invalid"}).trim().toLowerCase(),
    password: z.string().min(1, {message: "Password is required"}).trim(),
    name: z.string().min(1, {message: "Name is required"}),
    role: z.string().min(1, {message: "Role is required"})
}).required();

export default function SignInForm() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    }
  })

  const onSubmit: SubmitHandler<z.infer<typeof authSchema>> = (data) => {
    signup(data)
  }
  return (
    <>
    <Form {...form}>
      <div className='w-fit bg-slate-300 rounded-md space-y-2 p-4 flex flex-col items-center'>
        <form
          className='flex flex-col gap-1' 
          onSubmit={form.handleSubmit(onSubmit)}>
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
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input type='text' placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                    <RadioGroup
                     onValueChange={field.onChange}>
                        <FormItem>
                            <FormControl>
                                <RadioGroupItem className='m-1' value='Instructor'/>
                            </FormControl>
                            <FormLabel>
                                Instructor
                            </FormLabel>
                        </FormItem>
                        <FormItem>
                            <FormControl>
                                <RadioGroupItem className='m-1' value='Student'/>
                            </FormControl>
                            <FormLabel>
                                Student
                            </FormLabel>
                        </FormItem>
                    </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-full mt-6'>Sign up</Button>
        </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
      </div>
      <p>If you have an account, please &nbsp;</p>
      <Link href='/sign-in' className='text-blue-500 hover:underline'>Sign in</Link>
      </div>
    </Form>
    </>
  )
}