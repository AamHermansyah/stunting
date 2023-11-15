import { json } from '@/lib/json'
import { prisma } from '@/db'
import { Buffer } from 'buffer'

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const createdResume = await prisma.article.create({
      data: {
        ...data,
      },
    });

    return new Response(json({
      message: 'Data successfully created',
      status: 201,
      data: createdResume
    }));

  } catch (error) {
    console.log(error);
    return new Response(json({ message: 'Internal server error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';

  const parsedPage = page ? parseInt(page, 10) : 1;
  const parsedPageSize = pageSize ? parseInt(pageSize, 10) : 10;
  const offset = (parsedPage - 1) * parsedPageSize;

  const searchQuery = {
    OR: [
      { title: { contains: search } },
      { summary: { contains: search } },
      { content: { contains: search } },
      { category: { contains: search } },
      { tags: { contains: search } },
    ],
  };

  try {
    const articles = await prisma.article.findMany({
      where: {
        ...search ? searchQuery : {},
        // @ts-ignore
        ...(category ? { category: { contains: category } } : {}),
      },
      take: parsedPageSize,
      skip: offset,
      select: {
        id: true,
        title: true,
        summary: true,
        category: true,
        tags: true,
        image: true,
        alt_image: true,
        created_at: true,
        content: false,
      }
    });

    const totalArticles = await prisma.article.count({
      where: {
        ...search ? searchQuery : {},
        // @ts-ignore
        ...(category ? { category: { contains: category } } : {}),
      },
    });

    const isLastData = (parsedPage * parsedPageSize) >= totalArticles;

    return new Response(json({
      data: articles,
      pageInfo: {
        currentPage: parsedPage,
        pageSize: parsedPageSize,
        totalItems: totalArticles,
        isLastData,
      },
      status: 200
    }));
  } catch (error) {
    console.error(error);
    return new Response(json({ error: 'Internal Server Error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
};