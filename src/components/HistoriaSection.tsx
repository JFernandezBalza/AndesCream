
const HistoriaSection = () => (
  // Sección principal de "Nosotros"
  <section
    id='nosotros'
    className='w-full h-auto flex flex-col bg-cover bg-center bg-no-repeat relative'
    style={{ backgroundImage: `url('/images/fondo5.jpg')` }}
  >
    <div className='flex-grow flex items-center justify-center py-20 pb-4 md:py-0 md:pb-0 bg-black/15 z-0'>
      {/* Contenido de la Historia */}
      {/* Texto de la Historia (Columna Principal) */}
      {/* CAMBIO CLAVE: Cambiamos 'space-y-6' a 'space-y-3' para menor separación entre párrafos. */}
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        <div className='px-4 sm:px-6 py-4 text-gray-700 bg-white/70 shadow-2xl rounded-lg mx-4 z-0'>
          <h1 className='text-4xl font-serif text-gray-500 mb-2'>
            Nuestro Objetivo
          </h1>
          <div className='space-y-4 text-justify font-sans'>
            <p>
              En AndesCream, te ofrecemos una receta artesanal de más de una
              década. Aunque nuestra heladería tiene poco más de un año, nuestro
              verdadero arte ha sido la conservación y supervisión de la
              calidad. Nos dedicamos a seleccionar la mejor mezcla, elaborada
              con el máximo rigor: frutas de temporada, leche fresca y cero
              saborizantes artificiales, con la certeza de que solo te ofrecemos
              un producto excepcional.
            </p>
          </div>
          <h2 className='text-3xl font-serif text-gray-500 pt-2'>
            Un lugar para compartir
          </h2>
          <div className='pt-2 space-y-4 text-justify font-sans'>
            {/* Los párrafos siguientes también se beneficiarán del 'space-y-3' */}
            <p>
              Abrimos nuestras puertas con un único propósito: crear un punto de
              encuentro donde la prisa se detenga.
            </p>
            <p>
              Hemos creado AndesCream para ser tu refugio perfecto: un local
              pacífico y acogedor donde la vida ajetreada se queda afuera. Aquí,
              cada uno de nuestros productos es una excusa para desconectar,
              compartir risas y crear recuerdos con tus seres queridos.
            </p>
            <p>
              Para nosotros, la venta es solo el inicio. No solo vendemos
              helados; vendemos momentos de felicidad. Te invitamos a sentarte,
              saborear esta tradición y vivir la pausa que hemos creado solo
              para ti.
            </p>
            <p>Ven a AndesCream y ve Helado bueno de la vida.</p>
          </div>

          {/* Mantenemos 'space-y-4' aquí ya que es un bloque separado */}
          <div className='pt-6 font-sans'>
            <p>¡Te esperamos!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HistoriaSection;
