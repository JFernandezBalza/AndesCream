'use client';

export default function HeladosPage() {
  // Puedes cambiar esta URL por la de tu imagen de fondo real.
  const backgroundImage = '/images/fondo_helados.jpg'; // <-- ¡Cambia esta ruta por la tuya!

  return (
    // ⭐ 1. Contenedor principal: Ahora es 'relative' y tiene una altura mínima
    <div className='relative p-8 min-h-screen'>
            {/* ⭐ 2. Capa de Imagen de Fondo (z-0) */}     {' '}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
                {/* ⭐ 3. Overlay para opacidad sobre la imagen (z-10) */}     
         {' '}
        <div className='absolute inset-0 bg-white/70 backdrop-blur-sm z-10'></div>
             {' '}
      </div>
           {' '}
      {/* ⭐ 4. Contenido existente: Asegúrate de que tenga un z-index más alto para ser visible */}
           {' '}
      <div className='relative z-20'>
        {' '}
        {/* Le damos un z-index mayor */}       {' '}
        {/* Reemplazamos <Link> por <a> para la compatibilidad */}       {' '}
        <a
          href='/'
          className='text-pink-600 hover:text-pink-800 transition duration-150 hover:underline mb-8 inline-block'
        >
                    ← Volver a la Portada        {' '}
        </a>
               {' '}
        <h1 className='text-4xl font-extrabold text-pink-700 mb-4 border-b-2 border-pink-300 pb-2'>
                    Sabores Artesanales de Helado        {' '}
        </h1>
               {' '}
        <p className='text-lg text-gray-700 max-w-2xl'>
                    Nuestra especialidad. Helados cremosos y *sorbetes* de fruta
          fresca,           hechos día a día con ingredientes locales y la
          pasión que aprendiste en           cocina. ¡Una delicia garantizada!  
               {' '}
        </p>
               {' '}
        {/* El contenido de la tarjeta ya está bien con el z-20 del padre */}   
           {' '}
        <div className='mt-10 p-6 bg-white rounded-xl shadow-lg border border-pink-200'>
                   {' '}
          <h2 className='text-2xl font-semibold text-pink-500 mb-4'>
                        Categorías:          {' '}
          </h2>
                   {' '}
          <ul className='list-disc list-inside text-gray-600 space-y-2'>
                        <li>**Clásicos:** Vainilla, Chocolate, Fresa.</li>     
                  <li>**Gourmet:** Pistacho, Sal Marina con Caramelo, Café.</li>
                        <li>**Sorbetes:** Mango, Maracuyá, Limón.</li>         {' '}
          </ul>
                 {' '}
        </div>
             {' '}
      </div>
         {' '}
    </div>
  );
}
