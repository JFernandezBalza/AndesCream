// app/menu/helados/page.tsx (o la ruta correspondiente)

'use client';

// 1. Importa los componentes reutilizables
import MenuLayout from '@/layouts/MenuLayout';
import ProductCard, { Producto } from '@/components/ProductCard';
// Navbar ya no se importa aquí, ya que está dentro de MenuLayout

// 2. Definición de Datos (Asegurando que los datos tengan el tipo Producto)
const dummyHelados: Producto[] = [
  {
    id: 'h1',
    name: 'Vainilla Artesanal',
    description: 'Cremoso helado de vainilla de Madagascar, suave y aromático.',
    price: 9500,
    imageUrl: 'https://placehold.co/600x400/FFFACD/964B00?text=Vanilla',
  },
  {
    id: 'h2',
    name: 'Sorbet de Maracuyá',
    description: 'Refrescante y ácido sorbete vegano de fruta de la pasión.',
    price: 8900,
    imageUrl: 'https://placehold.co/600x400/FFD700/000000?text=Passion+Fruit',
  },
  {
    id: 'h3',
    name: 'Chocolate Intenso',
    description:
      'Helado profundo de cacao negro, para los amantes del sabor fuerte.',
    price: 10500,
    imageUrl: 'https://placehold.co/600x400/5C4033/FFFFFF?text=Dark+Chocolate',
  },
  {
    id: 'h4',
    name: 'Pistacho y Miel',
    description:
      'Helado gourmet con pistachos tostados y un toque de miel pura.',
    price: 12000,
    imageUrl: 'https://placehold.co/600x400/9ACD32/000000?text=Pistachio',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function HeladosPage() {
  // 3. Define la imagen de fondo específica
  const backgroundImage = '/images/fondo5.jpg';

  return (
    // 4. USAR MenuLayout para la estructura de la página
    <MenuLayout backgroundImage={backgroundImage}>
      {/* 5. Contenido específico: Título y Descripción */}
      <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
        Helados Artesanales
      </h1>

      <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
        Descubre nuestra variedad de helados cremosos y sorbetes de fruta
        fresca. Hechos con ingredientes locales y la máxima calidad.
      </p>

      {/* 6. Listado de Productos usando ProductCard */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
        {dummyHelados.map((helado) => (
          // USAR ProductCard para cada elemento
          <ProductCard key={helado.id} product={helado} />
        ))}
      </div>
    </MenuLayout>
  );
}
