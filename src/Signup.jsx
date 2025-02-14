import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from './components/ui/form';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { useDispatch } from 'react-redux';
import { register } from './state/Auth/Action';


const Signup = () => {
  const dispatch = useDispatch();
  const form = useForm({
    resolver: "",
    defaultValues: {
      fullname: "",
      email: "",
      password:"",
    },
  });
  const onSubmit = (data) => {
    dispatch(register(data));
    
    console.log(data);
  };

  return (
    <div className="space-y-5">
      <h1 className="font-semibold text-xl">Create new Account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="example k.." />
                </FormControl>
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
                  <Input {...field} placeholder="example@gmail.com" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="********" />
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
}

export default Signup