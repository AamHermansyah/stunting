import { json } from '@/lib/json';
import { prisma } from '@/db';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/');
    const id = parseInt(pathSegments[pathSegments.length - 1], 10);

    if (isNaN(id)) {
      return new Response(json({ message: 'Invalid article ID', status: 400 }), { status: 400 });
    }

    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return new Response(json({ message: 'Article not found', status: 404 }), { status: 404 });
    }

    const base64Image = article.image ? `data:image/jpeg;base64,${article.image.toString('base64')}` : null;

    const responseData = {
      data: {
        ...article,
        image: base64Image,
      },
      status: 200
    };

    return new Response(json(responseData));
  } catch (error) {
    console.error('Error:', error);
    return new Response(json({ message: 'Internal Server Error', status: 500 }), { status: 500 });
  }
}
