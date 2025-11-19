// app/menu/postres/page.tsx (o la ruta correspondiente)

'use client';

// 1. Importa los componentes reutilizables
import MenuLayout from '@/layouts/MenuLayout';
import ProductCard, { Producto } from '@/components/ProductCard';
// Navbar ya no es necesario importarlo aquí

// 2. Definición de Datos (Asegurando que los datos tengan el tipo Producto)
const dummyDesserts: Producto[] = [
  {
    id: 'p1',
    name: 'Volcán de Chocolate',
    description:
      'Bizcocho de chocolate caliente con centro líquido, servido con helado de vainilla.',
    price: 16000,
    imageUrl: 'https://placehold.co/600x400/8B4513/FFFFFF?text=Lava+Cake',
  },
  {
    id: 'p2',
    name: 'Cheesecake de Frutos Rojos',
    description:
      'Base de galleta crujiente, crema de queso suave y cubierta de salsa artesanal de frutos rojos.',
    price: 17500,
    imageUrl: 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Cheesecake',
  },
  {
    id: 'p3',
    name: 'Tarta Helada de Brownie',
    description:
      'Cremosa tarta con base de brownie de chocolate, ideal para compartir.',
    price: 14000,
    imageUrl: 'https://placehold.co/600x400/A0522D/FFFFFF?text=Brownie+Cake',
  },
  {
    id: 'p4',
    name: 'Affogato Clásico',
    description:
      'Una bola de helado de vainilla ahogada en un shot doble de espresso caliente.',
    price: 9500,
    imageUrl: 'https://placehold.co/600x400/603601/FFFFFF?text=Affogato',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function PostresPage() {
  // 3. Define la imagen de fondo específica
    const backgroundImage = '/images/fondo5.jpg';

  return (
    // 4. USAR MenuLayout para la estructura externa
    <MenuLayout backgroundImage={backgroundImage}>
      {/* 5. Contenido específico: Título y Descripción */}
      <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
        Postres
      </h1>

      <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
        Nuestras creaciones más elaboradas, perfectas para un final dulce. Desde
        postres calientes hasta tortas heladas, aplicando técnicas de repostería
        para resultados espectaculares.
      </p>

      {/* 6. Listado de Productos usando ProductCard */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
        {dummyDesserts.map((postre) => (
          // USAR ProductCard para cada elemento
          <ProductCard key={postre.id} product={postre} />
        ))}
      </div>
    </MenuLayout>
  );
}
