import { getCollection } from 'astro:content';

/** @type {import('astro').APIRoute} */
export async function GET() {
  const javascript = await getCollection('javascript');
  const html = await getCollection('html');
  const css = await getCollection('css');
  const bases_de_datos = await getCollection('bases_de_datos');
  const nodejs = await getCollection('nodejs');
  const react = await getCollection('react');

  // Función que añade el prefijo correcto según la colección
  function mapWithPrefix(items, prefix) {
    return items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      slug: `${prefix}/${item.collection}/${item.slug}/`,
    }));
  }

  const allPosts = [
    ...mapWithPrefix(javascript, 'fundamentals'),
    ...mapWithPrefix(html, 'fundamentals'),
    ...mapWithPrefix(css, 'fundamentals'),
    ...mapWithPrefix(bases_de_datos, 'backend'),
    ...mapWithPrefix(nodejs, 'backend'),
    ...mapWithPrefix(react, 'frontend'),
  ];

  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
