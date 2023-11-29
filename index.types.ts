export type Article = {
  id: number;
  title: string;
  summary: string;
  category: string;
  tags: string;
  content: string;
  image: string;
  alt_image: string;
  created_at: string;
  authorId: number;
  author: Pick<User, 'id' | 'name' | 'email' | 'image'>;
};

export type User = {
  id: number;
  name: string;
  image: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  created_at: Date;
};
