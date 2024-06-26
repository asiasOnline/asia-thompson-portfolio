"use client"

import React from 'react'
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

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "Name input must be atleast one character"
  }).max(50, {
    message: "Name cannot be longer than 50 characters"
  }),
  lastName: z.string().min(1, {
    message: "Name input must be atleast one character"
  }).max(50, {
    message: "Name cannot be longer than 50 characters"
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
      firstName: "Enter your first name",
      lastName: "Enter your last name",
      email: "Enter your email address",
      subject: "Reason for reaching out",
      description: "Please include a message to offer further explanation as needed"
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
        >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your first name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your last name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email address' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder='Reason for reaching out' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Please include a message to offer further explanation as needed' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Send Message</Button>
      </form>
    </Form>
  )
}

const Contact = () => {
  return (
    <div id="contact">
        <PageHeader title='Contact'/>
        <div className='flex'>
          <div className='w-1/2'>
            <h2>Let's Work Together!</h2>
            <p>Fill out the form to get in contact me as soon as possible. Otherwise, contact me through your preferred platform and I’ll do my best to follow up there as well.</p>
            <div>
              <TbMailFilled className='w-8 h-8'/>
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