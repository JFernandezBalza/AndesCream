// app/historia/page.tsx
import Navbar from '@/components/Navbar';
import HistoriaSection from '@/components/HistoriaSection';
import Footer from '@/components/Footer'; // ¡Ahora esta importación es válida!

export default function HistoriaPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main
        className='flex-grow'
        style={{ backgroundImage: `url('/images/fondo5.jpg')` }}
      >
        <HistoriaSection />
      </main>
      <Footer /> {/* Usamos el componente aquí */}
    </div>
  );
}
