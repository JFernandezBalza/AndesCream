
const HistoriaSection = () => (
  // Sección principal de "Nosotros"
  <section
    id='nosotros'
    className='py-25'
    style={{ backgroundImage: `url('/images/fondo2.jpeg')` }}
  >
    <div className='mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Contenido de la Historia */}
      <div>
        {/* Texto de la Historia (Columna Principal) */}
        {/* CAMBIO CLAVE: Cambiamos 'space-y-6' a 'space-y-3' para menor separación entre párrafos. */}
        <div className='about-text space-y-3 text-gray-700'>
          <h2 className='text-4xl font-extrabold text-pink-700 mb-7'>
            Nuestra Historia: La Esencia Andina y el Arte de la Pausa.
          </h2>

          <p>
            En AndesCream, nuestra visión es simple y profunda: llevar la
            frescura y pureza de la alta montaña a cada cucharada, y crear el
            ambiente perfecto para disfrutarla.
          </p>
          <p>
            Inspirados por los paisajes andinos y la rica tradición culinaria,
            el corazón de nuestros productos late al ritmo de una receta
            artesanal de más de una década. Aunque nuestra heladería tiene poco
            más de un año, nuestro verdadero arte ha sido la conservación y
            supervisión de la calidad. Nos dedicamos a seleccionar la mejor
            mezcla, elaborada con el máximo rigor: frutas de temporada, leche
            fresca de granja y cero saborizantes artificiales, con la certeza de
            que solo te ofrecemos un producto excepcional.
          </p>

          <h3 className='text-3xl font-bold text-gray-800 pt-6'>
            Tu Refugio Perfecto.
          </h3>

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
            Para nosotros, la venta es solo el inicio. No solo vendemos helados;
            vendemos momentos de felicidad. Te invitamos a sentarte, saborear
            esta tradición y vivir la pausa que hemos creado solo para ti.
          </p>
          <p>
            Ven y descubre por qué en AndesCream, cada visita es una celebración
            de la vida, el sabor y la amistad.
          </p>

          {/* Mantenemos 'space-y-4' aquí ya que es un bloque separado */}
          <div className='pt-4 space-y-4'>
            <p>¡Te esperamos!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HistoriaSection;
