import { useForm } from 'react-hook-form';
import ImageTableContact from '../../../assets/image-mesa-contact.jpg'
import ImageTextureContact from '../../../assets/image-textura-contact.jpg'
import React from 'react';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  observations: string;
}

export function Contact() {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="flex justify-between items-center max-h-[500px] h-[450px] bg-red-500">
      <form className="relative w-1/2 invisible md:visible hidden h-full md:flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
        <img src={ImageTextureContact} alt="" className='absolute size-full z-0 opacity-25' />
        <div className='mb-4 z-10'>

          <input className='w-full rounded-md px-3 p-2 box-border' id="name" placeholder='Nome' {...register('name', { required: true })} />
        </div>
        <div className='mb-4 z-10'>

          <input className='w-full rounded-md px-3 p-2 box-border' id="phone" placeholder='Telefone' {...register('phone', { required: true })} />
        </div>
        <div className='mb-4 z-10'>

          <input className='w-full rounded-md px-3 p-2 box-border' id="email" placeholder='E-mail' {...register('email', { required: true })} />
        </div>
        <div className='mb-4 z-10'>

          <textarea className='w-full rounded-md px-3 p-2 box-border' id="observations" placeholder='Observações' {...register('observations')} />
        </div>
        <button type="submit" className='z-10 px-5 py-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 cursor-pointer text-white rounded-md text-lg font-semibold'>Enviar</button>
      </form>
      <div className="w-1/2 h-full relative invisible md:visible hidden md:flex justify-center items-center">
        <img src={ImageTableContact} alt="Contact" className='min-w-full h-full object-cover' />
        <div className='absolute min-w-full h-full bg-gray-900/50' />
      </div>

      {/* Mobile */}
      <form className="relative w-full md:invisible md:hidden h-full flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
        <img src={ImageTableContact} alt="Contact" className='absolute z-0 min-w-full size-full object-cover' />
        <div className='absolute min-w-full h-full bg-gray-900/50' />
        <div className='mb-4 z-10'>

          <input className='w-full rounded-md px-3 p-2 box-border' id="name" placeholder='Nome' {...register('name', { required: true })} />
        </div>
        <div className='mb-4 z-10'>

          <input className='w-full rounded-md px-3 p-2 box-border' id="phone" placeholder='Telefone' {...register('phone', { required: true })} />
        </div>
        <div className='mb-4 z-10'>

          <input className='w-full rounded-md px-3 p-2 box-border' id="email" placeholder='E-mail' {...register('email', { required: true })} />
        </div>
        <div className='mb-4 z-10'>

          <textarea className='w-full rounded-md px-3 p-2 box-border' id="observations" placeholder='Observações' {...register('observations')} />
        </div>
        <button type="submit" className='z-10 px-5 py-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 cursor-pointer text-white rounded-md text-lg font-semibold'>Enviar</button>
      </form>
    </div>
  );
};


