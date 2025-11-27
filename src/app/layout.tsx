import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AndesCream',
  description: 'Heladería artesanal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className='flex flex-col min-h-screen bg-cover bg-[position:35%_center] bg-no-repeat relative '
          style={{ backgroundImage: `url('/images/fondo5.jpg')` }}
        >
          {/* ⭐ NAVBAR GLOBAL ⭐ */}
          {/* isOverlay=false es generalmente seguro aquí, ya que el fondo está en el layout. */}
          <Navbar />

          {/* ⭐ Contenido de la página: Usa flex-grow para ocupar el espacio restante 
            entre el Navbar (arriba) y el Footer (abajo).
          */}
          <main className='flex-grow bg-black/15 z-0'>{children}</main>

          {/* ⭐ Footer Global */}
          <Footer />
        </div>
      </body>
    </html>
  );
}