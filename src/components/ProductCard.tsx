// components/ProductCard.tsx

import Image from 'next/image';

// 1. Interfaz de Producto (Debe ser la misma para helados, bebidas, etc.)
export interface Producto {
  id: string;
  name: string;
  description: string;
  price: number; // Siempre guarda el precio en la unidad más pequeña (centavos)
  imageUrl: string;
}

interface ProductCardProps {
  product: Producto;
}

// Función Utilitaria (Opcional, mejor en otro archivo)
const formatCurrency = (amount: number) => {
  return `$${(amount / 100).toFixed(2)}`;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      // 2. Mueve todo el JSX y los estilos repetidos aquí
      className='bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300'
    >
      <div className='relative w-full h-48'>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-900 mb-2'>{product.name}</h3>
        <p className='text-gray-600 text-sm mb-4'>{product.description}</p>
        <p className='text-2xl font-extrabold text-pink-600'>
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
}
