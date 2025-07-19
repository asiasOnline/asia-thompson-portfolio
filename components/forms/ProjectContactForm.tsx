"use client"
import { useState } from "react"
import { useForm, UseFormRegister, FieldError } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/Calendar"
import { Button } from "@/components/ui/Button"
import {
  Form,
  FormDescription,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/Input"
import { Slider } from "@/components/ui/Slider"
import { Checkbox } from "@/components/ui/Checkbox"
import { Textarea } from "@/components/ui/Textarea"

import { toast } from "sonner"
import { TbMail } from "react-icons/tb";
import { FaRegCalendar } from "react-icons/fa";

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
    id: "data-ai-integration",
    label: "Data & AI Integration",
  },
] as const 

const projectFormSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().min(2, {
    message: "Last name is required.",
  }),
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address"
  }),
  services: z.array(z.string()).refine((value) => value.some((service) => service), {
    message: "Please select at least one service."
  }),
  dateRange: z.object(
    {
      from: z.date({
        required_error: "A start date is required."
      }),
      to: z.date({
        required_error: "A end date is required."
      }),
    },
    {
      required_error: "Select a date range"
    }
  ).refine((data) => data.from < data.to, {
    path: ["dateRange"],
    message: "The start date cannot come after the due date."
  }),
  budget: z.number({}),
  contactMessage: z.string().min(2, {
    message: "The message must be at least 2 characters long."
  }).max(10000, {
    message: "The message cannot be longer than 1,000 characters."
  }),
})

export function ProjectContactForm() {
  const [projectBudget, setProjectBudget] = useState<number>(300);

    // Defines the form
    const form = useForm<z.infer<typeof projectFormSchema>>({
      resolver: zodResolver(projectFormSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        businessName: "",
        email: "",
        services: ["product-stategy", "web-app-design"],
        dateRange: {
          from: new Date(),
          to: new Date(),
        },
        contactMessage: "",
      },
    });

    // Defines the submit handler.
    function onSubmit(values: z.infer<typeof projectFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        toast.success("Data successfully submitted!")
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
                                          (value:any) => value !== service.id
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

            {/* Project Timeline */}
              <FormField
                control={form.control}
                name="dateRange"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel><p className="text-xl font-bold mb-2">What is your project timeline?</p></FormLabel>
                    <Popover modal={true}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                              "w-[400px] items-center justify-start text-left text-lg font-normal gap-2",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <FaRegCalendar className="h-4 w-4 opacity-50" />
                            {field.value.from ? (
                              field.value.to ? (
                              <>
                                {format(field.value.from, "LLL dd, yyyy")} -{" "}
                                {format(field.value.to, "LLL dd, yyyy")}
                              </>
                            ) : (
                              format(field.value.from, "LLL dd, yyyy")
                            )) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={field.value.from}
                          numberOfMonths={2}
                          selected={{
                            from: field.value.from!, 
                            to: field.value.to,
                          }}
                          onSelect={field.onChange}
                          disabled={{ dayOfWeek: [0, 6] }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

            {/* Project Budget */}
            <FormField
            control={form.control}
            name="budget"
            render={() => (
                <FormItem>
                  <FormLabel><p className="text-xl font-bold">What is your project's budget?</p></FormLabel>
                <FormControl className="mt-4">
                    <div>
                      <p className="text-center mb-3">${projectBudget}</p>
                    <div className="flex gap-2">
                      <p>$300</p>
                      <Slider 
                      value={[projectBudget]}
                      onValueChange={(val : any) => setProjectBudget(val)}
                      defaultValue={[300]} 
                      min={300}
                      max={10000} 
                      step={100} />
                      <p>$10,000+</p>
                      </div>
                    </div>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />


            {/* Project Details */}
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
