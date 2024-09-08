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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Schema validation using zod
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function Otp() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data) {
    console.log(data.pin);
    console.log("Done");
    
  }
  
  const otppromise = () => {
    return new Promise((res, rej)=>{
      try{
        setTimeout(()=>{
          res('LoggedIn Successfully');
        }, 1500)
      } catch(err){
        rej(err)
      }
    });
  }
  
  const naviagate = useNavigate();

  const OtpSubmit =()=> {
    toast.promise(otppromise(),
      {
        loading: "processing",
        success: "Done",
        error: "Error occurred"
      }
    ).then(()=>{
      naviagate("/")
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex justify-center  items-center flex-col space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className='w-full flex flex-col items-center justify-center'>
              <FormLabel className='text-center'>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button onClick={OtpSubmit} className='w-fit' type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default Otp;
