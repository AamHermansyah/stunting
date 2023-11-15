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
};

export type PageInfo = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  isLastData: boolean;
};