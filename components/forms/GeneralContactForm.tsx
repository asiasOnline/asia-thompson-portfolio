"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Toaster, toast } from "sonner"
import { TbMail } from "react-icons/tb";

const GeneralContact = z.object({
  firstName: z.string().min(2, {
    message: "First name is required.",
  }),
  lastName: z.string().min(2, {
    message: "Last name is required.",
  }),
  email: z.string().email().min(2, {
    message: "Valid email required.",
  }),
  contactMessage: z.string().min(2, {
    message: "Message required."
  }).max(10000, {
    message: "The message cannot be longer than 1,000 characters."
  }),
})

export function GeneralContactForm() {
    // Defines the form
    const form = useForm<z.infer<typeof GeneralContact>>({
      resolver: zodResolver(GeneralContact),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        contactMessage: "",
      },
    })

    // Defines the submit handler.
    const onSubmit = async (values: z.infer<typeof GeneralContact>) => {
        console.log("Submitting:", values)
        const payload = JSON.stringify(values);
        console.log("JSON.stringify result:", payload)
        try {
          const res = await fetch('http://localhost:3000/api/generalContacts', {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: payload
          })

          if (res.ok) {
            toast.success("Message recieved!");
            form.reset();
          } else {
            toast.error("Something went wrong.");
          }
        } catch (error) {
          console.error("Fetch error", error);
          toast.error("Failed to send message. Please try again later.");
          }
        }
    
    return (
      <>
        <Toaster richColors position="top-right" />

        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* First Name Field */}
            <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
                <FormItem>
                  <FormLabel><p className="text-xl font-bold">First Name *</p></FormLabel>
                <FormControl className="mt-2">
                    <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* Last Name Field */}
            <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
                <FormItem>
                  <FormLabel><p className="text-xl font-bold">Last Name *</p></FormLabel>
                <FormControl className="mt-2">
                    <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* Email */}
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                  <FormLabel><p className="text-xl font-bold">Email *</p></FormLabel>
                <FormControl className="mt-2">
                    <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            {/* Project */}
            <FormField
              control={form.control}
              name="contactMessage"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel><p className="text-xl font-bold mb-2">Message</p></FormLabel>
                    <p className="text-md">Without sharing any private details, please provide a brief description and how I can help.</p>
                  <FormControl className="mt-2">
                      <Textarea placeholder="Offer further explanation as needed..." {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
            />
            <Button 
              variant="default" 
              type="submit" 
              className="gap-4 font-bold tracking-wide p-6"
              onClick={async () => {
                await fetch('api/emails', { method: "POST"});
              }}
              >
                <TbMail className="w-6 h-6"/>Send Message
              </Button>
        </form>
        </Form>
      </>
    )
}
