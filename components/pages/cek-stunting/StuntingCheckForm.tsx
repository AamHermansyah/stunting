'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/core/DatePicker";
import { formatDateToYYYYMMDD } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  district: z.string().min(3, {
    message: "District must be at least 3 characters.",
  }),
  gender: z.enum(["male", "female"]),
  weight: z.string().refine((value) => {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && numericValue > 0;
  }, {
    message: "Weight must be a positive number.",
  }),
  height: z.string().refine((value) => {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && numericValue > 0;
  }, {
    message: "Height must be a positive number.",
  }),
  DOB: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "DOB must be in the format YYYY-MM-DD.",
  }),
  headCircumference: z.string().refine((value) => {
    const numericValue = parseFloat(value);
    return !isNaN(numericValue) && numericValue > 0;
  }, {
    message: "Head circumference must be a positive number.",
  }),
});

const StuntingCheckForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setModalOpen(true);
  };

  return (
    <section id="timeline" className="mt-10">
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-3xl">
              Selamat!
            </DialogTitle>
          </DialogHeader>
          <h1 className="text-7xl text-center py-4">
            😊
          </h1>
          <DialogDescription className="text-center text-gray-700">
            Sistem kami menyatakan bahwa anak anda memiliki kondisi yang <b>normal</b>.
          </DialogDescription>
          <Button
            onClick={() => navigate.push('/cek-stunting/hasil')}
          >
            Selanjutnya
          </Button>
          <span className="text-xs text-gray-500 italic">
            <b>Note: </b> Klik tombol selanjutnya untuk melihat grafik dari pertumbuhan berat badan balita di seluruh Indonesia
          </span>
        </DialogContent>
      </Dialog>

      <div className="w-full md:grid grid-cols-12 px-0 lg:px-10 py-10">
        <div className="col-span-6 lg:col-span-5 flex flex-col justify-center mb-10 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold">Cek Status Stunting</h2>
          <p className="font-light mt-4 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus corporis veniam porro, earum praesentium excepturi illum, nihil explicabo enim quos accusamus cum ratione quam aperiam temporibus tenetur quidem voluptate!
          </p>
        </div>
        <div className="col-span-6 lg:col-span-7 min-h-[450px] overflow-y-auto pl-4 md:pl-10 pr-2 custom-scrollbar">
          {/* @ts-ignore */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Nama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => {
                    const inputField = { onBlur: field.onBlur, value: field.value, name: field.name }
                    return (
                      <FormItem>
                        <FormLabel>Kecamatan</FormLabel>
                        <FormControl>
                          <Select
                            {...inputField}
                            onValueChange={(value) => {
                              form.setValue('district', value);
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Kecamatan" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Kecamatan</SelectLabel>
                                <SelectItem value="kahuripan">Kahuripan</SelectItem>
                                <SelectItem value="ciamis">Ciamis</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => {
                    const inputField = { onBlur: field.onBlur, value: field.value, name: field.name }
                    return (
                      <FormItem>
                        <FormLabel>Jenis Kelamin</FormLabel>
                        <FormControl>
                          <Select
                            {...inputField}
                            onValueChange={(value: 'male' | 'female') => {
                              form.setValue('gender', value);
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Kecamatan</SelectLabel>
                                <SelectItem value="male">Laki laki</SelectItem>
                                <SelectItem value="female">Perempuan</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Berat Badan (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0 kg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tinggi Badan (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0 cm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="DOB"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Lahir</FormLabel>
                      <FormControl>
                        <DatePicker
                          onChange={(date) => {
                            console.log(date);
                            form.setValue('DOB', formatDateToYYYYMMDD(date));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="headCircumference"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lingkar Kepala (cm)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0 cm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button type="submit" className="mt-4">
                  Cek Sekarang
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default StuntingCheckForm