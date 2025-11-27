'use client';

import React, { useState } from 'react';

// Definimos la interfaz (tipo) de los datos del formulario
interface FormData {
  name: string;
  contactInfo: string;
  subject: string;
  sugestion: string;
}

const ContactoSection = () => {
  // Número de teléfono de destino para WhatsApp
  const WHATSAPP_NUMBER = '+584120712420'; // Formato internacional: Código de país + Número

  // 1. ESTADO PARA LOS CAMPOS DEL FORMULARIO
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactInfo: '',
    subject: 'Pregunta/Contacto',
    sugestion: '',
  });

  // 2. ESTADO PARA EL MENSAJE DE ÉXITO/ERROR
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para construir el texto preformateado para WhatsApp
  const buildWhatsAppMessage = () => {
    const { name, contactInfo, subject, sugestion } = formData;

    // Crear el mensaje con los datos del formulario, codificando el URI para el enlace
    const message =
      `¡Hola, mi nombre es ${name}!%0A` +
      `Mi información de contacto es: ${contactInfo}%0A%0A` +
      `*ASUNTO:* ${subject}%0A%0A` +
      `*MENSAJE:*%0A` +
      `${sugestion}`;

    return message;
  };

  // 3. Manejador para el envío tradicional (simulado como envío por Correo/Backend)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contactInfo ||
      !formData.subject ||
      !formData.sugestion
    ) {
      setStatus('Por favor, completa todos los campos obligatorios (*).');
      return;
    }

    console.log(
      'Datos del formulario recogidos para envío por Backend/Correo:',
      formData
    );

    setStatus(
      '¡Mensaje enviado a nuestro sistema! Gracias por contactarnos o compartir tu idea. 🤝'
    );
    setFormData({
      name: '',
      contactInfo: '',
      subject: 'Pregunta/Contacto',
      sugestion: '',
    });
  };

  // 4. Manejador para el envío por WhatsApp
  const handleWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contactInfo ||
      !formData.subject ||
      !formData.sugestion
    ) {
      setStatus(
        'Por favor, completa todos los campos obligatorios (*) antes de enviar por WhatsApp.'
      );
      return;
    }

    const encodedMessage = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Abrir el enlace de WhatsApp en una nueva pestaña
    window.open(url, '_blank');

    setStatus('Se ha abierto WhatsApp para enviar tu mensaje. ¡Gracias! 📱');
    setFormData({
      name: '',
      contactInfo: '',
      subject: 'Pregunta/Contacto',
      sugestion: '',
    });
  };

  // Texto dinámico para el área de texto (sugestion)
  const isComplaint = formData.subject === 'Reclamo/Incidente';

  let textareaLabel = 'Tu Mensaje o Pregunta:';
  let rowsCount = 3;

  if (isComplaint) {
    textareaLabel = 'Detalle de tu Reclamo o Incidente:';
    rowsCount = 6;
  } else if (formData.subject === 'Sugerencia/Idea') {
    textareaLabel = 'Tu Sugerencia o Idea de Mejora:';
    rowsCount = 6;
  }

  const inputClass =
    'mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 placeholder-gray-300 text-rose-500 font-sans text-base transition duration-200';
  const textareaClass =
    'mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 placeholder-gray-500 text-emerald-500 font-sans text-base transition duration-200';
  return (
    <section>
      <div className='flex-grow flex items-center justify-center py-20'>
        <div className='max-w-3xl mx-auto text-center px-4'>
          <h2 className='text-4xl font-serif text-gray-500 mb-0'>
            Contacto, Preguntas y Sugerencias
          </h2>
          <p className='text-xl font-serif text-gray-500 mb-4'>
            Estamos aquí para ayudarte. Completa los datos y elige cómo
            prefieres enviarnos tu mensaje o idea.
          </p>

          {/* Muestra el mensaje de estado si existe */}
          {status && (
            <div
              className={`p-4 mb-6 text-sm ${
                status.includes('error')
                  ? 'text-red-700 bg-red-100'
                  : 'text-green-700 bg-green-100'
              } rounded-lg`}
              role='alert'
            >
              {status}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className='sugestion-form space-y-6 text-left border-2 p-10 mb-4 bg-white/90 rounded-lg shadow-2xl'
          >
            {/* Nombre (Obligatorio) */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-sans text-gray-700 mb-1'
              >
                Nombre: <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                placeholder='Nombre completo'
              />
            </div>

            {/* CAMPO COMBINADO: Celular, Teléfono o Correo (Obligatorio) */}
            <div>
              <label
                htmlFor='contactInfo'
                className='block text-sm font-sans text-gray-700 mb-1'
              >
                Celular, Teléfono o Correo Electrónico:{' '}
                <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='contactInfo'
                name='contactInfo'
                required
                value={formData.contactInfo}
                onChange={handleChange}
                className={inputClass}
                placeholder='Ej: 555-123-4567 o mi.correo@ejemplo.com'
              />
            </div>

            {/* Asunto/Intención (Obligatorio) */}
            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-sans text-gray-700 mb-1'
              >
                Asunto: <span className='text-red-500'>*</span>
              </label>
              <select
                id='subject'
                name='subject'
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              >
                <option value='Pregunta/Contacto'>
                  Pregunta/Contacto (General)
                </option>
                <option value='Sugerencia/Idea'>
                  Sugerencia/Idea (Feedback)
                </option>
                <option value='Reclamo/Incidente'>
                  Reclamo/Incidente (Problema)
                </option>
              </select>
            </div>

            {/* Sugerencia/Comentario/Mensaje (Obligatorio y libre) */}
            <div>
              <label
                htmlFor='sugestion'
                className='block text-sm font-sans text-gray-700 mb-1'
              >
                {textareaLabel} <span className='text-red-500'>*</span>
              </label>
              <textarea
                id='sugestion'
                name='sugestion'
                rows={rowsCount}
                required
                value={formData.sugestion}
                onChange={handleChange}
                className={textareaClass}
              />
            </div>

            {/* CONTENEDOR DE BOTONES (flex) */}
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4'>
              {/* Botón 1: Enviar por Correo/Sistema (Rosa Pastel) */}
              <button
                type='submit'
                className='flex-1 flex items-center justify-center py-3 px-4
        border-2 border-rose-500 rounded-md shadow-sm text-lg font-sans 
        text-rose-500 bg-white 
        hover:bg-rose-50 
        hover:border-rose-500 
        hover:text-rose-500 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-rose-500 
        transition duration-300'

                title='Enviar el formulario a nuestro correo electrónico'
              >
                {/* Ícono de Correo (stroke='currentColor' para coincidir con el texto) */}
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z'
                  ></path>
                </svg>
                Enviar por Correo
              </button>

              {/* Botón 2: Enviar por WhatsApp (Verde Menta) */}
              <button
                type='button'
                onClick={handleWhatsApp}
                className='flex-1 flex items-center justify-center py-3 px-4 border-2 border-emerald-500 rounded-md shadow-sm text-lg font-sans text-emerald-400 bg-white hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition duration-300'
                title='Abrir WhatsApp con el mensaje preescrito'
              >
                {/* Ícono de WhatsApp (fill='currentColor' para coincidir con el texto) */}
                <svg
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12.04 2C6.54 2 2.08 6.46 2.08 11.96C2.08 13.92 2.68 15.7 3.65 17.22L2.01 22.01L7.05 20.47C8.59 21.36 10.29 21.84 12.04 21.84C17.54 21.84 22 17.38 22 11.88C22 6.38 17.54 2 12.04 2ZM17.18 16.5C16.92 17.17 14.54 18.25 14.54 18.25C14.54 18.25 14.47 18.3 14.36 18.25C14.28 18.2 13.56 18.06 13.12 17.84C12.72 17.65 11.16 17.27 9.54 16.3C8.04 15.3 7.08 13.9 6.87 13.68C6.66 13.46 6.55 13.25 6.55 13.04C6.55 12.83 7.02 12.03 7.15 11.85C7.29 11.67 7.42 11.51 7.6 11.41C7.8 11.31 8.01 11.23 8.12 11.2C8.32 11.1 8.53 11.12 8.74 11.3C8.95 11.51 9.17 11.85 9.38 12.21C9.6 12.57 9.87 12.92 10.08 13.06C10.29 13.2 10.51 13.23 10.72 13.13C12.72 12.18 13.78 11.62 14.84 10.64C15.19 10.3 15.42 9.94 15.65 9.68C15.86 9.47 16.03 9.39 16.14 9.36C16.35 9.3 16.56 9.36 16.7 9.49C16.84 9.62 17.16 9.92 17.36 10.28C17.57 10.64 17.57 11.58 17.5 11.65C17.43 11.72 16.71 12.08 16.37 12.21C16.03 12.35 16.03 12.35 16.03 12.44C16.03 12.53 16.09 12.76 16.2 12.97C16.31 13.19 16.31 13.38 16.42 13.59C16.52 13.8 16.73 14.15 16.85 14.34C17 14.53 17.06 14.65 17.16 14.83C17.26 15.01 17.37 15.22 17.47 15.4C17.57 15.58 17.65 15.77 17.67 15.86C17.69 15.95 17.33 16.16 17.18 16.5Z'></path>
                </svg>
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;