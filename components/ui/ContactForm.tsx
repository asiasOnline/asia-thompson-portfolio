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
import { Checkbox } from "@/components/ui/Checkbox"
import { Textarea } from "@/components/ui/Textarea"

import { TbMail } from "react-icons/tb";

const services = [
  {
    id: "ux-ui-design",
    label: "UX & UI Design",
  },
  {
    id: "front-end-development",
    label: "Front End Development",
  },
  {
    id: "database-management",
    label: "Database Management",
  },
  {
    id: "back-end-development",
    label: "Back End Development",
  },
] as const 

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "The full name must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "The email must be at least 2 characters.",
  }),
  services: z.array(z.string()).refine((value) => value.some((service) => service), {
    message: "Please select at least one service."
  }),
  contactMessage: z.string().min(2, {
    message: "The message must be at least 2 characters long."
  }).max(10000, {
    message: "The message cannot be longer than 10,000 characters."
  }),
})

export function ContactForm() {
    // Defines the form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        email: "",
        services: ["ux-ui-design", "front-end-development"],
        contactMessage: "",
      },
    })

    // Defines the submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                <FormControl className="mt-2">
                    <Input placeholder="Enter your full name" {...field} />
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
                <FormControl className="mt-2">
                    <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField 
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <FormLabel>Services</FormLabel>
                  <div className="flex flex-wrap justify-between mt-2">
                    {services.map((service) => (
                      <FormField 
                        key={service.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                              <FormItem
                              key={service.id}
                              className="my-2 flex justify-center gap-2"
                              >
                              <FormControl>
                                <Checkbox 
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== service.id
                                        )
                                      )
                                  }}
                                />
                              </FormControl>
                              <FormLabel>{service.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactMessage"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                  <FormControl className="mt-2">
                      <Textarea placeholder="Include a message to offer further explanation as needed" {...field} />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
            />
            <Button variant="default" type="submit" className="gap-4 font-bold tracking-wide p-6"><TbMail className="w-6 h-6"/>Send Message</Button>
        </form>
        </Form>
    )
}
