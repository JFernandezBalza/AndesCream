
const HistoriaSection = () => (
  // Sección principal de "Nosotros"
  <section
    id='nosotros'
    className='w-full min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative'
    style={{ backgroundImage: `url('/images/fondo2.jpeg')` }}
  >
    <div className='flex-grow flex items-center justify-center py-20 pb-10 md:py-20 md:pb-10'>
      {/* Contenido de la Historia */}
      {/* Texto de la Historia (Columna Principal) */}
      {/* CAMBIO CLAVE: Cambiamos 'space-y-6' a 'space-y-3' para menor separación entre párrafos. */}
      <div className='w-full max-w-4xl lg:max-w-6xl'>
        <div className='px-4 sm:px-6 py-6 text-gray-700 bg-white/90 shadow-2xl rounded-lg mx-4'>
          <h2 className='text-4xl font-extrabold text-pink-700 mb-7'>
            Nuestra Historia: La Esencia Andina y el Arte de la Pausa.
          </h2>
          <div className='space-y-4 text-justify'>
            <p>
              En AndesCream, nuestra visión es simple y profunda: llevar la
              frescura y pureza de la alta montaña a cada cucharada, y crear el
              ambiente perfecto para disfrutarla.
            </p>
            <p>
              Inspirados por los paisajes andinos y la rica tradición culinaria,
              el corazón de nuestros productos late al ritmo de una receta
              artesanal de más de una década. Aunque nuestra heladería tiene
              poco más de un año, nuestro verdadero arte ha sido la conservación
              y supervisión de la calidad. Nos dedicamos a seleccionar la mejor
              mezcla, elaborada con el máximo rigor: frutas de temporada, leche
              fresca de granja y cero saborizantes artificiales, con la certeza
              de que solo te ofrecemos un producto excepcional.
            </p>
          </div>
          <h3 className='text-3xl font-bold text-gray-800 pt-6'>
            Tu Refugio Perfecto.
          </h3>
          <div className='pt-4 space-y-4 text-justify'>
            {/* Los párrafos siguientes también se beneficiarán del 'space-y-3' */}
            <p>
              Con esta promesa de sabor en mano, abrimos nuestras puertas con un
              único propósito: crear un punto de encuentro donde la prisa se
              detenga.
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
            <p>
              Ven y descubre por qué en AndesCream, cada visita es una
              celebración de la vida, el sabor y la amistad.
            </p>
          </div>

          {/* Mantenemos 'space-y-4' aquí ya que es un bloque separado */}
          <div className='pt-2'>
            <p>¡Te esperamos!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HistoriaSection;
