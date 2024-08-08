"use client"
import React from 'react';
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
    SelectGroup
  } from "@/components/ui/select"
  const formSchema = z.object({
    fullName: z.string()
      .min(1, { message: "Full name is required" })
      .max(50, { message: "Full name must be at most 50 characters long" })
      .regex(/^[a-zA-Z\s]+$/, { message: "Full name can only contain letters and spaces" }),
    
    email: z.string()
    .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    
      amount: z.string()
      .min(1, { message: " Pledge amount is required" })
    
});

const PledgeForm=()=>{

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email:"",
          amount:""
        },
      })


  function onSubmit(values: z.infer<typeof formSchema>) {
debugger
alert(
  `Full Name: ${values.fullName} ` +
  `Email: ${values.email} ` +
  `Amount: ${values.amount}`
);
    console.log(values)
  }
    return(
        <>
        
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                 <div>
                      <div className="relative">
                          <FormControl>
                            <Input placeholder="Full Name" {...field} className='' />
                          </FormControl>
                          <FormMessage />
                        </div>
                  </div> 
              </FormItem>
            )}
          />

           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div>
                  <div className="relative">
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
          />

         <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
               <div className="relative">
                        <FormControl>
                        <Select  onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Enter Your Pledge Amount" />
                          </SelectTrigger>
                          <SelectContent className='bg-white'>
                            <SelectGroup>
                              <SelectLabel>Enter Your Pledge Amount</SelectLabel>
                              <SelectItem value="$10">$10</SelectItem>
                              <SelectItem value="$20">$20</SelectItem>
                              <SelectItem value="$30">$30</SelectItem>
                              <SelectItem value="$40">$40</SelectItem>
                              <SelectItem value="$50">$50</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                      </div>
              </FormItem>
              
            )}
          />
        <div className=''>
                    <Button type="submit" variant={'default'} >Pledge</Button>     
                    </div>
       </form>
       </Form>

   
        </>
    )
}


export default PledgeForm;