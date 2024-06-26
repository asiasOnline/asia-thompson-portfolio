"use client"

import React from 'react'
import Link from 'next/link'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import PageHeader from './ui/PageHeader'
import { Button } from '@/components/ui/Button'
import {
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form'
import { Textarea } from '@/components/ui/Textarea'
import { Input } from '@/components/ui/Input'
import { useForm } from "react-hook-form"

import { TbMail, TbMailFilled } from "react-icons/tb";
import { SiGithub, SiLinkedin, SiDiscord, SiDribbble } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name must be atleast one character"
  }).max(50, {
    message: "First name cannot be longer than 50 characters"
  }),
  lastName: z.string().min(1, {
    message: "Last name must be atleast one character"
  }).max(50, {
    message: "Last name cannot be longer than 50 characters"
  }),
  email: z.string().email({ message: "Please include a valid email address" }),
  subject: z.string().min(1, {
    message: "Subject must be atleast one character"
  }).max(60, {
    message: "Subject cannot be longer than 60 characters"
  }),
  description: z.string().min(1, {message: "Description must be atleast one character"})
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      description: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
        >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base font-bold'>First Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your first name' {...field} />
              </FormControl>
              <FormMessage className='font-bold'/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base font-bold'>Last Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your last name' {...field} />
              </FormControl>
              <FormMessage className='font-bold'/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base font-bold'>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email address' {...field} />
              </FormControl>
              <FormMessage className='font-bold'/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base font-bold'>Subject</FormLabel>
              <FormControl>
                <Input placeholder='Reason for reaching out' {...field} />
              </FormControl>
              <FormMessage className='font-bold'/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-base font-bold'>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Please include a message to offer further explanation as needed' {...field} />
              </FormControl>
              <FormMessage className='font-bold'/>
            </FormItem>
          )}
        />
        <Button type='submit' className='w-fit px-10 py-6 text-white bg-ultramarine font-bold uppercase tracking-wider dark:text-black dark:bg-slateBlue'>
          <TbMail className='mr-2 h-8 w-8'/>
          Send Message
        </Button>
      </form>
    </Form>
  )
}

const Contact = () => {
  return (
    <div id="contact">
        <PageHeader title='Contact'/>
        <div className='flex'>
          <div className='w-1/2 p-6 flex flex-col justify-center gap-4'>
            <h2 className='text-2xl font-bold tracking-wider text-transparent bg-gradient-to-r from-fountainBlue via-ultramarine to-steelPink bg-clip-text dark:from-fountainBlue dark:via-slateBlue dark:to-steelPink'>Let's Work Together!</h2>
            <p>Fill out the form to get in contact me as soon as possible. Otherwise, contact me through your preferred platform and I’ll do my best to follow up there as well.</p>
            <div className='flex gap-6'>
              <TbMailFilled className='w-8 h-8'/>
              <SiGithub className='w-8 h-8'/>
              <SiLinkedin className='w-8 h-8'/>
              <SiDiscord className='w-8 h-8'/>
              <FaXTwitter className='w-8 h-8'/>
              <SiDribbble className='w-8 h-8'/>
            </div>
          </div>
          <div className='w-1/2'>
            <ContactForm />
          </div>
        </div>
    </div>
  )
}

export default Contact