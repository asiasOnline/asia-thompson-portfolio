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
    id: "product-strategy",
    label: "Product Strategy",
  },
  {
    id: "web-app-design",
    label: "Web / App Design",
  },
  {
    id: "single-page-website",
    label: "Single Page Webiste",
  },
  {
    id: "multi-page-website",
    label: "Multi-Page Website",
  },
  {
    id: "web-mobile-app-development",
    label: "Web / Mobile App Development",
  },
  {
    id: "data-management",
    label: "Data Management",
  },
] as const 

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
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
    message: "The message cannot be longer than 1,000 characters."
  }),
})

export function ProjectContactForm() {
    // Defines the form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        businessName: "",
        email: "",
        services: ["product-stategy", "web-app-design"],
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

            {/* Business Name */}
            <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
                <FormItem>
                  <FormLabel><p className="text-xl font-bold">Business Name</p></FormLabel>
                <FormControl className="mt-2">
                    <Input placeholder="Enter your business name" {...field} />
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

            {/* Services */}
            <FormField 
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <FormLabel><p className="text-xl font-bold mb-2">What services are you looking for?</p></FormLabel>
                  <p className="text-md">Max of 3 services per project.</p>
                  <div className="flex items-start flex-col mt-2">
                    {services.map((service) => (
                      <FormField 
                        key={service.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                              <FormItem
                              key={service.id}
                              className="my-2 flex justify-center items-center gap-3"
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
                              <FormLabel><p className="text-lg">{service.label}</p></FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />

            {/* Project */}
            <FormField
              control={form.control}
              name="contactMessage"
              render={({ field }) => (
                  <FormItem>
                    <FormLabel><p className="text-xl font-bold mb-2">Project Details</p></FormLabel>
                    <p className="text-md">Without sharing the more private details of your project, please provide a brief description and how I would ideally help.</p>
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
    )
}
