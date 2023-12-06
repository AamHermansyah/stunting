'use client'

import { RichtextEditor } from '@/components/core/RichtextEditor'
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { artikelKategoriList, navigation, tagsArticle } from '@/constants';
import { SelectCheckboxes } from '@/components/core/SelectCheckboxes';
import { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { useToast } from '@/components/ui/use-toast';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useUserStore from '@/stores/userStore';

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  summary: z.string().max(200, {
    message: "Summary must be at most 200 characters.",
  }),
  category: z.string().nonempty({
    message: "Category must be not empty",
  }),
  tags: z.string().nonempty({
    message: "Tags must be not empty",
  }),
  content: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  image: z
    .custom<FileList[0] | undefined>()
    .refine((file) => file && (!!file && file.size <= 10 * 1024 * 1024), {
      message: "The profile picture must be a maximum of 10MB.",
    })
    .refine((file) => file && (!!file && file.type?.startsWith("image")), {
      message: "Only images are allowed to be sent.",
    }),
  alt_image: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

function ArticleAddPage() {
  const [adding, setAdding] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const { toast } = useToast();
  const navigate = useRouter();
  const { user, token } = useUserStore();

  if (!user || user?.role === 'user') return navigate.push('/');

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const { image, ...otherData } = data;

    if (data.image instanceof File) {
      setAdding(true);

      const reader = new FileReader();
      reader.readAsDataURL(data.image);

      reader.onload = () => {
        const base64Image = reader.result as string;
        const dataToSend = { ...otherData, image: base64Image };

        fetch('/api/article', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify(dataToSend),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            switch (res.status) {
              case 201:
                toast({
                  title: 'Berhasil!',
                  description: 'Artikel berhasil ditambahkan.',
                  variant: 'success'
                });

                setTimeout(() => {
                  navigate.push('/artikel');
                }, 1000);
                break;
              case 500:
                toast({
                  title: 'Error!',
                  description: 'Artikel gagal diunggah. Coba beberapa saat lagi!',
                  variant: 'destructive'
                });
                break;
              case 403:
                toast({
                  title: 'Error!',
                  description: 'Anda tidak dapat melakukan aksi ini!',
                  variant: 'destructive'
                });
                break;
              default:
                toast({
                  title: 'Error!',
                  description: res?.message || 'Terjadi kesalahan, coba beberapa saat lagi!',
                  variant: 'destructive'
                });
                break;
            }
          })
          .catch((error) => {
            toast({
              title: 'Error',
              description: (error as Error).message,
              variant: 'destructive'
            });
          })
          .finally(() => setAdding(false));
      };

      reader.onerror = (error) => {
        toast({
          title: 'Error',
          description: 'Error reading image',
          variant: 'destructive'
        });
      };
    }
  };

  return (
    <div className="p-4">
      {/* @ts-ignore */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold">Tambahkan Puskesmas Baru</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-semibold">Nama Puskesmas</FormLabel>
                  <FormControl>
                    <Input placeholder="Silahkan masukan nama puskesmas..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-semibold">Alamat Puskesmas</FormLabel>
                  <FormControl>
                    <Input placeholder="Silahkan masukan alamat puskesmas..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <div className="relative flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full rounded-md">
                      {!field.value ? (
                        // eslint-disable-next-line jsx-a11y/label-has-associated-control
                        <label className="w-full">
                          <div className="flex flex-col items-center justify-center h-full">
                            <div className="h-[200px] flex flex-col justify-center items-center">
                              <p className="font-bold text-2xl">
                                <AiOutlineCloudUpload />
                              </p>
                              <p className="text-base">Click to upload</p>
                            </div>

                            <p className="absolute bottom-4 inset-x-0 text-center w-full text-gray-400 text-xs">
                              Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                            </p>
                          </div>
                          <input
                            accept="image/*"
                            type="file"
                            className="w-0 h-0"
                            name="image"
                            onChange={(event) => {
                              if (event.target.files) {
                                field.onChange(event.target.files[0]);
                              }
                            }}
                          />
                        </label>
                      ) : (
                        <div className="relative w-full h-full">
                          <div className="relative w-full h-[200px]">
                            <Image
                              src={URL.createObjectURL(field.value)}
                              alt="uploaded-pic"
                              fill={true}
                              className="object-contain"
                            />
                          </div>
                          <button
                            type="button"
                            className="absolute bottom-3 right-3 p-3 rounded-full border bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                            onClick={() => field.onChange(undefined)}
                          >
                            <MdDelete />
                          </button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-semibold">Deskripsi</FormLabel>
                  <FormControl>
                    <RichtextEditor
                      value={field.value}
                      onChange={(output) => field.onChange(output)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button type="submit" className="mt-4" disabled={adding}>
              {!adding ? 'Submit' : (
                <VscLoading fontSize={24} className="animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ArticleAddPage