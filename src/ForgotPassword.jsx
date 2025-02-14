import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

const ForgotPassword = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <h1 className="font-semibold text-xl">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="example@gmail.com" />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-xl">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;
