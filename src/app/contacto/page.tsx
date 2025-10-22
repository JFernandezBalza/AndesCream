// app/contacto/page.tsx
import Navbar from '@/components/Navbar';
import ContactoSection from '@/components/ContactoSection'; // <-- Usa el componente modificado
import Footer from '@/components/Footer';

export default function ContactoPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <ContactoSection /> {/* <-- Renderiza el formulario */}
      </main>
      <Footer />
    </div>
  );
}
