'use client'

import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useToast } from "@/components/ui/use-toast";
import useUserStore from "@/stores/userStore";

const formSchema = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters").nonempty("Password is required"),
});

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [isInvalidCredential, setIsInvalidCredential] = useState(false);
  const navigate = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const { setUser, setToken, user } = useUserStore();
  const { toast } = useToast();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // fetch('/api/auth/create-admin', {
    //   body: JSON.stringify({
    //     "name": "Aam Hermansyah",
    //     "email": "amzhermanzyah@gmail.com",
    //     "password": "Asdf1234_",
    //   }),
    //   method: 'POST'
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((error) => {
    //     console.log(error);
    //   })

    setLoading(true);
    setIsInvalidCredential(false);

    fetch('/api/auth/login', {
      body: JSON.stringify(data),
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) {
          setUser(res.user);
          setToken(res.token);
          return;
        }

        if (res.status === 401) {
          setIsInvalidCredential(true);
          return;
        }

        toast({
          title: res.status,
          description: res.message,
          variant: 'destructive'
        });
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: (error as Error).message,
          variant: 'destructive'
        });
      })
      .finally(() => setLoading(false));
  }

  if (user !== null) return navigate.push('/');

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto py-20">
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => navigate.push('/')}
        >
          <BiArrowBack fontSize={24} /> Back
        </button>
        <div>
          <h1 className="font-semibold text-gray-700 text-center text-lg">
            Selamat Datang Di
            <br />
            <span className="text-4xl text-primary">
              Stunting App
            </span>
          </h1>
          {/* @ts-ignore */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-4" action="#">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Masukan email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Masukan password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isInvalidCredential && (
                <p className="text-destructive text-sm">
                  Password atau email yang anda masukan salah!
                </p>
              )}
              <Button
                disabled={loading}
                type="submit"
                className="w-full"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters
                    fontSize={24}
                    className="mx-auto animate-spin"
                  />
                ) : 'Login'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage