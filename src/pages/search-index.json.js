import { getCollection } from 'astro:content';

/** @type {import('astro').APIRoute} */
export async function GET() {
  const today = new Date();
  const releaseBackEnd = new Date('2025-12-14');
  const releaseFrontEnd = new Date('2026-02-22');

  const javascript = await getCollection('javascript');
  const html = await getCollection('html');
  const css = await getCollection('css');

  const bases_de_datos = today >= releaseBackEnd ? await getCollection('bases_de_datos') : [];
  const nodejs = today >= releaseBackEnd ? await getCollection('nodejs') : [];
  const react = today >= releaseFrontEnd ? await getCollection('react') : [];


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
