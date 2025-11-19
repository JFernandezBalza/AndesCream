// app/menu/bebidas/page.tsx

'use client';

// 1. Importa los componentes reutilizables
import MenuLayout from '@/layouts/MenuLayout';
import ProductCard, { Producto } from '@/components/ProductCard'; // Importa la Card y el tipo 'Producto'

// 2. Definición de Datos (Asegúrate de que los datos tengan el tipo Producto)
const dummyDrinks: Producto[] = [
  {
    id: 'b1',
    name: 'Capuchino Clásico',
    description: 'Espresso intenso con leche texturizada y un toque de cacao.',
    price: 6500,
    imageUrl: 'https://placehold.co/600x400/964B00/FFFFFF?text=Cappuccino',
  },
  {
    id: 'b2',
    name: 'Frappé de Oreo',
    description:
      'Helado de vainilla, galletas Oreo y un chorrito de sirope de chocolate.',
    price: 11500,
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Oreo+Frappe',
  },
  {
    id: 'b3',
    name: 'Limonada de Coco',
    description:
      'Refrescante limonada natural con crema de coco, ideal para el calor.',
    price: 7800,
    imageUrl: 'https://placehold.co/600x400/00CED1/FFFFFF?text=Coco+Lemonade',
  },
  {
    id: 'b4',
    name: 'Té Chai Caliente',
    description: 'Té negro especiado con leche vaporizada y canela.',
    price: 6000,
    imageUrl: 'https://placehold.co/600x400/A0522D/FFFFFF?text=Chai+Tea',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function BebidasPage() {
  // 3. Define la imagen de fondo (puedes cambiarla por una específica de bebidas)
    const backgroundImage = '/images/fondo5.jpg';

  return (
    // 4. USAR MenuLayout para la estructura de página
    <MenuLayout backgroundImage={backgroundImage}>
      {/* 5. Contenido específico: Título y Descripción */}
      <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
        Bebidas Frías y Calientes
      </h1>

      <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
        Desde un espresso caliente y aromático hasta refrescantes frappés y
        sodas artesanales. El acompañamiento perfecto para tu dulce momento.
      </p>

      {/* 6. Listado de Productos usando ProductCard */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
        {dummyDrinks.map((drink) => (
          // USAR ProductCard para cada elemento (NO HAY REPETICIÓN DE JSX)
          <ProductCard key={drink.id} product={drink} />
        ))}
      </div>
    </MenuLayout>
  );
}
