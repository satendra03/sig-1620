"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

// Define the validation schema
const FormSchema = z.object({
  username: z.string().min(5, {
    message: "Days must be at least 5",
  }),
});

export default function GetChart() {
  // Initialize the form with default values and schema validation
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-[50%] mr-10">
              <FormLabel className="font-bold text-xl">Days</FormLabel>
              <FormControl>
                <Input type="text" placeholder="days" className="w-full" {...field} />
              </FormControl>
              <FormDescription>
                This is Input field for chart (Input Data)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
