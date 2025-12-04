'use client';

import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const QUOTE_STORAGE_KEY = 'daily_admin_quote';

interface QuoteType {
  text: string;
  author: string;
}

// Lista de citas motivacionales en español (Autocontenido para evitar la dependencia de NPM)
const QUOTES: QuoteType[] = [
  {
    text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
    author: 'Robert Collier',
  },
  {
    text: 'No cuentes los días, haz que los días cuenten.',
    author: 'Muhammad Ali',
  },
  {
    text: 'La forma más efectiva de hacerlo es hacerlo.',
    author: 'Amelia Earhart',
  },
  { text: 'La vida empieza cada cinco minutos.', author: 'Andreu Buenafuente' },
  {
    text: 'La clave del éxito es empezar antes de que estés listo.',
    author: 'Marie Forleo',
  },
  {
    text: 'No tienes que ser genial para empezar, pero tienes que empezar para ser genial.',
    author: 'Zig Ziglar',
  },
  {
    text: 'Solo podemos ver una corta distancia hacia adelante, pero podemos ver muchas cosas que necesitan hacerse ahí.',
    author: 'Alan Turing',
  },
  { text: 'La mejor venganza es el éxito masivo.', author: 'Frank Sinatra' 
  },
  {
    text: 'El único modo de hacer un gran trabajo es amar lo que haces.',
    author: 'Steve Jobs',
  },
  { text: 'Si puedes soñarlo, puedes lograrlo.', author: 'Walt Disney' 
  },
  {
    text: 'La disciplina es el puente entre las metas y los logros.',
    author: 'Jim Rohn',
  },
  {
    text: 'El valor de una idea radica en el uso de la misma.',
    author: 'Thomas Edison',
  },
  {
    text: 'No esperes. El momento nunca será el justo.',
    author: 'Napoleon Hill',
  },
  {
    text: 'La perseverancia es caer siete veces y levantarse ocho.',
    author: 'Proverbio Japonés',
  },
  {
    text: 'Cree que puedes y ya estás a medio camino.',
    author: 'Theodore Roosevelt',
  },
  {
    text: 'Si quieres algo, ve a por ello. Punto.',
    author: 'The Pursuit of Happyness',
  },
  {
    text: 'Tu actitud, no tu aptitud, determinará tu altitud.',
    author: 'Zig Ziglar',
  },
  {
    text: 'No te detengas cuando estés cansado. Detente cuando hayas terminado.',
    author: 'Marilyn Monroe',
  },
  {
    text: 'La vida es 10% lo que te pasa y 90% cómo reaccionas a ello.',
    author: 'Charles R. Swindoll',
  },
  {
    text: 'Un viaje de mil millas comienza con un solo paso.',
    author: 'Lao Tzu',
  },
  {
    text: 'Nunca es demasiado tarde para ser quien podrías haber sido.',
    author: 'George Eliot',
  },
  {
    text: 'El cambio no vendrá si esperamos a otra persona o a otro momento.',
    author: 'Barack Obama',
  },
  {
    text: 'La diferencia entre un día ordinario y un día extraordinario es ese pequeño "extra".',
    author: 'Jimmy Johnson',
  },
  {
    text: 'La inspiración existe, pero tiene que encontrarte trabajando.',
    author: 'Pablo Picasso',
  },
  { text: 'La calidad no es un acto, es un hábito.', author: 'Aristóteles' },
  {
    text: 'Sé el cambio que deseas ver en el mundo.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Lo que la mente del hombre puede concebir y creer, la mente del hombre puede lograr.',
    author: 'Napoleon Hill',
  },
  {
    text: 'El futuro pertenece a quienes creen en la belleza de sus sueños.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'La felicidad no es algo ya hecho. Viene de tus propias acciones.',
    author: 'Dalai Lama',
  },
  {
    text: 'Un error se convierte en error solo cuando te niegas a corregirlo.',
    author: 'John F. Kennedy',
  },
  {
    text: 'Nuestra mayor debilidad radica en rendirnos. La forma más segura de tener éxito es intentarlo una vez más.',
    author: 'Thomas Edison',
  },
  {
    text: 'No dejes que los pequeños obstáculos te impidan seguir adelante.',
    author: 'Michael Jordan',
  },
  {
    text: 'La lógica te llevará de A a B. La imaginación te llevará a cualquier parte.',
    author: 'Albert Einstein',
  },
  {
    text: 'El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.',
    author: 'Proverbio Chino',
  },
  {
    text: 'Siempre parece imposible hasta que se hace.',
    author: 'Nelson Mandela',
  },
  {
    text: 'La única limitación es la que estableces en tu propia mente.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud.',
    author: 'Maya Angelou',
  },
  {
    text: 'La acción es la clave fundamental para todo éxito.',
    author: 'Pablo Picasso',
  },
  { text: 'No es lo que tienes, sino lo que eres.', author: 'Zig Ziglar' },
  {
    text: 'El dolor es temporal. Rendirse es para siempre.',
    author: 'Lance Armstrong',
  },
  { text: 'Convierte tus heridas en sabiduría.', author: 'Oprah Winfrey' },
  {
    text: 'Sé tú mismo; todos los demás ya están ocupados.',
    author: 'Oscar Wilde',
  },
  {
    text: 'El camino hacia el éxito y el camino hacia el fracaso son casi exactamente los mismos.',
    author: 'Colin R. Davis',
  },
  { text: 'No sueñes con el éxito, trabaja para él.', author: 'Estee Lauder' },
  {
    text: 'La oportunidad se pierde por la mayoría de la gente porque se viste de mono de trabajo y parece trabajo.',
    author: 'Thomas Edison',
  },
  { text: 'El secreto para salir adelante es empezar.', author: 'Mark Twain' },
  {
    text: 'El fracaso es la oportunidad de empezar de nuevo, pero con más inteligencia.',
    author: 'Henry Ford',
  },
  { text: 'Sueña en grande y atrévete a fallar.', author: 'Norman Vaughan' },
  {
    text: 'Toma riesgos: si ganas, serás feliz; si pierdes, serás sabio.',
    author: 'Anónimo',
  },
  {
    text: 'Si la gente duda de lo lejos que puedes llegar, llega tan lejos que ya no puedas oírlos.',
    author: 'Michele Ruiz',
  },
  {
    text: 'Empieza donde estás. Usa lo que tienes. Haz lo que puedas.',
    author: 'Arthur Ashe',
  },
  {
    text: 'La curiosidad sobre la vida en todos sus aspectos es el secreto de los grandes creativos.',
    author: 'Leo Burnett',
  },
  {
    text: 'Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona.',
    author: 'Steve Jobs',
  },
  {
    text: 'El único lugar donde el éxito viene antes que el trabajo es en el diccionario.',
    author: 'Vidal Sassoon',
  },
  { text: 'Las estrellas no pueden brillar sin oscuridad.', author: 'Anónimo' },
  {
    text: 'La confianza en uno mismo es el primer secreto del éxito.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'No es la especie más fuerte la que sobrevive, ni la más inteligente, sino la que mejor se adapta al cambio.',
    author: 'Charles Darwin',
  },
  {
    text: 'La paciencia es amarga, pero su fruto es dulce.',
    author: 'Jean-Jacques Rousseau',
  },
  {
    text: 'No mires el reloj; haz lo que hace. Sigue adelante.',
    author: 'Sam Levenson',
  },
  {
    text: 'La creatividad es la inteligencia divirtiéndose.',
    author: 'Albert Einstein',
  },
  {
    text: 'El futuro está en manos de quienes se atreven a soñar.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'No se trata de dónde vienes, sino de dónde vas.',
    author: 'Ella Fitzgerald',
  },
  {
    text: 'Cada día es una nueva oportunidad para cambiar tu vida.',
    author: 'Anónimo',
  },
  { text: 'Tu potencial es ilimitado. Ve y hazlo.', author: 'Unknown' },
  {
    text: 'Los campeones siguen jugando hasta que lo hacen bien.',
    author: 'Billie Jean King',
  },
  {
    text: 'Nunca te arrepientas de un día en tu vida. Los días buenos dan felicidad, los malos dan experiencia.',
    author: 'Anónimo',
  },
  {
    text: 'La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra.',
    author: 'Walter Elliot',
  },
  { text: 'La mente es todo. Lo que piensas, te conviertes.', author: 'Buda' },
  {
    text: 'No puedes tener un mañana mejor si no dejas de pensar en el ayer.',
    author: 'Charles F. Kettering',
  },
  {
    text: 'El esfuerzo y el coraje no son suficientes sin propósito y dirección.',
    author: 'John F. Kennedy',
  },
  {
    text: 'La vida es demasiado corta para perder el tiempo con gente que no te valora.',
    author: 'Anónimo',
  },
  {
    text: 'No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.',
    author: 'Jack Canfield',
  },
  { text: 'Si vas a ser un pájaro, sé un águila.', author: 'E.F. Schumacher' },
  {
    text: 'La autodisciplina comienza con el dominio de tus pensamientos.',
    author: 'Napoleon Hill',
  },
  { text: 'Sé la heroína de tu vida, no la víctima.', author: 'Nora Ephron' },
  {
    text: 'Solo hay una manera de evitar la crítica: no hacer nada, no decir nada y no ser nada.',
    author: 'Aristóteles',
  },
  {
    text: 'El destino baraja las cartas, y nosotros las jugamos.',
    author: 'Arthur Schopenhauer',
  },
  {
    text: 'Siempre da lo mejor de ti. Lo que siembras ahora, cosecharás más tarde.',
    author: 'Og Mandino',
  },
  {
    text: 'No tengas miedo de renunciar a lo bueno para ir a por lo grandioso.',
    author: 'John D. Rockefeller',
  },
  {
    text: 'El éxito es ir de fracaso en fracaso sin perder el entusiasmo.',
    author: 'Winston Churchill',
  },
  {
    text: 'La mejor vista viene después de la subida más dura.',
    author: 'Anónimo',
  },
  {
    text: 'No se trata de tener tiempo, se trata de hacer tiempo.',
    author: 'Anónimo',
  },
  {
    text: 'Si no puedes volar, corre. Si no puedes correr, camina. Si no puedes caminar, gatea. Pero sigue moviéndote.',
    author: 'Martin Luther King Jr.',
  },
  {
    text: 'La diferencia entre lo ordinario y lo extraordinario es un poco de práctica extra.',
    author: 'Jimmy Johnson',
  },
  {
    text: 'La grandeza comienza fuera de tu zona de confort.',
    author: 'Anónimo',
  },
  {
    text: 'Haz de tu vida un sueño, y de tu sueño una realidad.',
    author: 'Antoine de Saint-Exupéry',
  },
  {
    text: 'La acción es la medida de la inteligencia.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Para tener éxito, primero debemos creer que podemos.',
    author: 'Nikos Kazantzakis',
  },
  { text: 'La felicidad no es la meta, es el camino.', author: 'Anónimo' },
  {
    text: 'Todo lo que siempre has querido está al otro lado del miedo.',
    author: 'George Addair',
  },
  {
    text: 'La mejor preparación para el mañana es hacer tu mejor trabajo hoy.',
    author: 'H. Jackson Brown Jr.',
  },
  { text: 'Sé la voz, no el eco.', author: 'Albert Einstein' },
  {
    text: 'El trabajo duro vence al talento cuando el talento no trabaja duro.',
    author: 'Tim Notke',
  },
  { text: 'No esperes la oportunidad, créala.', author: 'Anónimo' },
  { text: 'Sé tan bueno que no puedan ignorarte.', author: 'Steve Martin' },
  { text: 'Donde hay voluntad, hay un camino.', author: 'Proverbio Inglés' },
  {
    text: 'La vida es una aventura atrevida o nada en absoluto.',
    author: 'Helen Keller',
  },
  {
    text: 'No te ahogas por caer al agua, sino por permanecer bajo ella.',
    author: 'Edwin Louis Cole',
  },
  {
    text: 'El crecimiento es doloroso. El cambio es doloroso. Pero nada es tan doloroso como quedarse atascado donde no perteneces.',
    author: 'N. R. Narayana Murthy',
  },
  {
    text: 'Nunca te limites a ti mismo debido a la limitada imaginación de otros.',
    author: 'Mae Jemison',
  },
];

function getQuoteOfTheDay(): QuoteType {
  const now = new Date();

  // Calcula el día del año (0 a 365)
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Usa el módulo para ciclar a través de las citas
  const index = dayOfYear % QUOTES.length;
  return QUOTES[index];
}

/**
 * Función que obtiene la cita del día o genera una nueva si ya pasó un día,
 * usando el almacenamiento local para el caching.
 */
function getDailyQuote(): QuoteType {
  // Obtenemos la fecha de hoy sin hora (solo el día)
  const today = new Date().toDateString();

  // 1. Intentar obtener la cita de hoy desde el almacenamiento local
  const storedData = localStorage.getItem(QUOTE_STORAGE_KEY);

  if (storedData) {
    try {
      const { date, quote } = JSON.parse(storedData);

      // 2. Si la fecha almacenada es la de hoy, devolvemos la cita existente
      if (date === today) {
        return quote as QuoteType;
      }
    } catch (error) {
      console.error(
        'Error parsing stored quote data, generating new one:',
        error
      );
    }
  }

  // 3. Si no hay cita o es un nuevo día, generamos una nueva con getQuoteOfTheDay
  const newQuote = getQuoteOfTheDay();

  // 4. Almacenamos la nueva cita con la fecha de hoy
  localStorage.setItem(
    QUOTE_STORAGE_KEY,
    JSON.stringify({ date: today, quote: newQuote })
  );

  return newQuote;
}

export default function DailyMotivationCard() {
  const [quote, setQuote] = useState<QuoteType>({
    text: 'Preparando la inspiración...',
    author: 'AndesCream',
  });

  useEffect(() => {
    // Solo se ejecuta en el lado del cliente y una vez al montar
    if (typeof window !== 'undefined') {
      const dailyQuote = getDailyQuote();
      setQuote(dailyQuote);
    }
  }, []);

  return (
    <div className='bg-pink-50 p-6 rounded-lg shadow-xl border-l-4 border-pink-500 mb-8'>
      <div className='flex items-center text-pink-600 mb-4'>
        <TrendingUp className='w-6 h-6 mr-3' />
        <h2 className='text-xl font-bold font-sans'>Motivación del Día</h2>
      </div>

      <blockquote className='italic text-gray-700'>
        <p className='text-lg md:text-xl font-serif leading-relaxed'>
          {quote.text}
        </p>
        <footer className='mt-3 text-sm font-semibold text-gray-600 border-t border-pink-200 pt-2'>
          — {quote.author || 'Anónimo'}
        </footer>
      </blockquote>
    </div>
  );
}
