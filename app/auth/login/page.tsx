'use client'

import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { loginSchema } from "@/schemas";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import Link from "next/link";

function LoginPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isPending, startTransition] = useTransition();
  const navigate = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data.error || '');
          setSuccess(data.success || '');
        });
    });
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto py-20">
        <button
          type="button"
          className="text-sm flex items-center gap-2"
          onClick={() => navigate.push('/')}
        >
          <BiArrowBack /> Back
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
                      <Input
                        {...field}
                        type="email"
                        placeholder="Masukan email"
                        disabled={isPending}
                      />
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
                    <FormLabel className="font-semibold">Kata Sandi</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Masukan kata sandi"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                disabled={isPending}
                type="submit"
                className="w-full"
              >
                {isPending ? (
                  <AiOutlineLoading3Quarters
                    fontSize={24}
                    className="mx-auto animate-spin"
                  />
                ) : 'Login'}
              </Button>
              <Link href="/auth/register" className="inline-block text-sm text-primary group">
                Belum punya akun? <span className="group-hover:underline">Daftar</span>
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage