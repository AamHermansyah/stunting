import z from 'zod';

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Kata sandi minimal 8 karakter"),
});

export const registerSchema = z.object({
  name: z.string().min(1, 'Masukan nama lengkap'),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Kata sandi minimal 8 karakter"),
  confirm_password: z.string().min(8, "Konfirmasi Kata sandi minimal 8 karakter"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Tanggal lahir harus berformat YYYY-MM-DD.",
  }),
  numberOfChildren: z.string()
    .refine((value) => {
      const numericValue = parseFloat(value);
      return !isNaN(numericValue) && numericValue >= 0;
    }, {
      message: "Jumlah anak tidak valid",
    })
    .refine((value) => {
      const numericValue = parseFloat(value);
      return !isNaN(numericValue) && numericValue >= 0;
    }, {
      message: "Jumlah anak minimal 0",
    }),
  district: z.string().min(1, "Pilih asal kecamatan"),
  address: z.string().min(5, "Masukan alamat rumah minimal 5 karakter"),
})
  .refine((data) => data.password === data.confirm_password, {
    message: "Kata sandi tidak sama",
    path: ["confirm_password"],
  });

export const stuntingCheckSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  district: z.string().min(3, {
    message: "District must be at least 3 characters.",
  }),
  gender: z.enum(["boy", "girl"]),
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

export const articleSchema = z.object({
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

export const puskesmasSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  district: z.string().min(3, {
    message: "District must be at least 3 characters.",
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