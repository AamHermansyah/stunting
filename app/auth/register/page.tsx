'use client'

import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useState, useTransition } from "react"
import { registerSchema } from "@/schemas"
import { FormError } from "@/components/FormError"
import { FormSuccess } from "@/components/FormSuccess"
import { artikelKategoriList } from "@/constants"
import { DatePicker } from "@/components/core/DatePicker"
import { formatDateToYYYYMMDD } from "@/lib/utils"
import Link from "next/link"
import { register } from "@/actions/register"

function RegisterPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isPending, startTransition] = useTransition();
  const navigate = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      address: '',
      confirm_password: '',
      name: '',
    }
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error || '');
          setSuccess(data.success || '');
        });
    });
  }

  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto py-4">
        <button
          type="button"
          className="text-sm flex items-center gap-2"
          onClick={() => navigate.push('/')}
        >
          <BiArrowBack /> Back
        </button>
        <div>
          <h1 className="font-semibold text-gray-700 text-center text-lg">
            Form Registrasi
          </h1>
          {/* @ts-ignore */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4" action="#">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Masukan nama lengkap"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Tanggal Lahir</FormLabel>
                    <FormControl>
                      <DatePicker
                        disableFutureDate={true}
                        onChange={(date) => {
                          form.setValue('dateOfBirth', formatDateToYYYYMMDD(date));
                          form.trigger('dateOfBirth');
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfChildren"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Jumlah anak</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Masukan jumlah anak"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem className="w-full flex-auto space-y-0">
                    <FormLabel className="text-base">Kecamatan</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih asal kecamatan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[250px]">
                        <SelectGroup>
                          <SelectLabel>Kecamatan</SelectLabel>
                          {artikelKategoriList.map((item) => (
                            <SelectItem
                              value={item.value}
                              key={item.id}
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage className="inline-block my-2" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Alamat Rumah</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Masukan alamat rumah"
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
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className="font-semibold">Kata Sandi</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Konfirmasi kata sandi"
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
                ) : 'Daftar'}
              </Button>
              <Link href="/auth/login" className="inline-block text-sm text-primary group">
                Sudah punya akun? <span className="group-hover:underline">Login</span>
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage