import React from "react";
import { Input } from "../components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const PaymentDetailsForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      accountholdername: "",
      ifsc: "",
      accountnumber: "",
      bankname: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Payment Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="accountholdername"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                Account Holder Name
                <FormLabel />
                <FormControl>
                  <Input placeholder="YOURNAME" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                IFSC CODE
                <FormLabel />
                <FormControl>
                  <Input placeholder="HFSDF88554" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accountnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                Account Number
                <FormLabel />
                <FormControl>
                  <Input placeholder="87878****54545" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmaccountnumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                Confirm Account Number
                <FormLabel />
                <FormControl>
                  <Input placeholder="87878****54545" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankname"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                Bank Name
                <FormLabel />
                <FormControl>
                  <Input placeholder="HDFC BANK" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <DialogClose className="w-full">
            <Button type="submit" className=" w-full py-5">
              Sumbit
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
