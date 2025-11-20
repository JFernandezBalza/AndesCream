// app/menu/bebidas/page.tsx (CORREGIDO - SIN MenuLayout)

'use client';

// 1. Importa solo los componentes de UI (ProductCard) y el tipo 'Producto'
import ProductCard, { Producto } from '@/components/ProductCard'; 
// ❌ YA NO IMPORTAMOS MenuLayout

// 2. Definición de Datos (Sin cambios)
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
    name: 'Latte Vainilla',
    description:
      'Doble shot de espresso con leche al vapor y sirope de vainilla artesanal.',
    price: 7200,
    imageUrl: 'https://placehold.co/600x400/D2B48C/000000?text=Vanilla+Latte',
  },
  {
    id: 'b3',
    name: 'Espresso Doble',
    description:
      'Carga de sabor concentrado, para los amantes del café puro e intenso.',
    price: 5000,
    imageUrl: 'https://placehold.co/600x400/603601/FFFFFF?text=Double+Espresso',
  },
  {
    id: 'b4',
    name: 'Chocolate Caliente',
    description:
      'Cremoso chocolate fundido en leche, coronado con crema batida casera.',
    price: 7500,
    imageUrl: 'https://placehold.co/600x400/4B3621/FFFFFF?text=Hot+Chocolate',
  },
  {
    id: 'b5',
    name: 'Té Matcha Latte',
    description:
      'Té verde Matcha de alta calidad con leche de tu elección, dulce y energizante.',
    price: 8900,
    imageUrl: 'https://placehold.co/600x400/90EE90/000000?text=Matcha+Latte',
  },
  {
    id: 'b6',
    name: 'Americano Helado',
    description:
      'Espresso diluido en agua fría, servido con abundante hielo para refrescar.',
    price: 6000,
    imageUrl: 'https://placehold.co/600x400/B0C4DE/000000?text=Iced+Americano',
  },
];
// --- FIN SIMULACIÓN DE DATOS ---

export default function BebidasPage() {

  return (

    <div className='w-full h-full flex flex-col items-center justify-center py-20 z-0'>
        <div className='w-full max-w-4xl lg:max-w-6xl'>
            <div className='px-4 sm:px-6 py-8 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
    
                {/* Contenido específico: Título y Descripción */}
                <h1 className='text-4xl md:text-5xl font-serif text-gray-500 mb-4 border-b-2 border-pink-300 pb-2'>
                    Bebidas Frías y Calientes
                </h1>

                <p className='text-lg text-justify font-sans text-gray-700 max-w-4xl mb-10 mt-4'>
                    Desde un espresso caliente y aromático hasta refrescantes frappés y
                    sodas artesanales. El acompañamiento perfecto para tu dulce momento.
                </p>

                {/* Listado de Productos usando ProductCard */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4'>
                    {dummyDrinks.map((drink) => (
                        <ProductCard key={drink.id} product={drink} />
                    ))}
                </div>

            </div>
        </div>
    </div>
  );
}