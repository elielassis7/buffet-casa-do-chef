import { ServiceCard } from './components/ServiceCard'
import imageHomeBuffet from '../../../assets/image-home.jpg'
import ImageHomeCasal from '../../../assets/image-casal-home.jpg'
import ImageHomeFormatura from '../../../assets/image-formatura-home.jpg'
import ImageHome15Th from '../../../assets/image-15-anos-home.jpg'
import ImageHomeCorporative from '../../../assets/image-corporative-home.jpg'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { AdvantageCircle } from './components/AdvantageCircle'
export function Home() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen ">
      <div className="flex flex-row justify-center relative border-t-[1px] border-b-[1px] h-[300px] md:h-[500px] border-sky-400">
        <img src={imageHomeBuffet} alt="" className='relative w-full object-cover blur-[2px]' />
        <h1 className='font-dancing font-bold text-bordo bg-red-400/50 w-full text-center text-5xl md:text-8xl pl-4 absolute z-10 top-32'>Buffet Casa do Chef</h1>
        {/* <div className="flex flex-1 flex-row justify-between">
          <div className='h-full flex flex-col justify-center items-center w-[80%]'>
            <h1 className='font-dancing font-bold text-gray-800 text-6xl pl-4'>Buffet Casa do Chef</h1>
            <p className='text-gray-300 text-lg text-center font-Josefin pt-3 ml-5'>Depois de uma cerimônia memorável, nada melhor do que celebrar um casamento com jantar criado
              e feito por uma equipe comprometida. As escolhas gastronômicas são as mais difíceis para os noivos,
              e por isso o Buffet Casa do Chefe oferece um trabalho de excelência, que concilia sabor e apresentação,
              com pratos que surpreendem os anfitriões e os convidados
            </p>
          </div>
          <div className='h-full flex flex-col justify-around'>
            <img src={ImageHomeCasal} alt="" className='object-cover size-32 m-2 rounded-full translate-x-[55%] z-10' />
            <img src={ImageHomeFormatura} alt="" className='object-cover size-32 m-2 rounded-full translate-x-[55%] z-10' />
            <img src={ImageHome15Th} alt="" className='object-cover size-32 m-2 rounded-full translate-x-[55%] z-10' />

          </div>

        </div> */}
        {/* <div className='w-1/2'>
          <img src={imageHomeBuffet} alt="" className='relative w-full object-cover' />

          <button onClick={() => navigate('/contact')} className='absolute z-10 translate-x-[23rem] -translate-y-[5rem] font-Josefin text-3xl rounded-md py-1 px-2 bg-red-500 hover:bg-red-400 active:scale-95 cursor-pointer text-yellow-100'>Reserve já</button>

        </div> */}

      </div>

      <h2 className='font-Josefin text-3xl md:text-6xl font-semibold text-red-400 my-7'>Aqui sua festa <span className='font-dancing text-3xl md:text-6xl font-bold text-yellow-300 underline'>acontece!</span></h2>

      <div className='w-full grid grid-cols-2 gap-3 md:gap-0 ml-12 md:ml-0 grid-rows-2 md:flex md:flex-row justify-around items-center my-10'>

        <AdvantageCircle
          text1='Cozinha'
          text2='Própria'
        />
        <AdvantageCircle
          text1='30 a 2000'
          text2='pessoas'
        />
        <AdvantageCircle
          text1='Melhor'
          text2='Custo beneficio'
        />
        <AdvantageCircle
          text1='Ótima'
          text2='Localização'
        />

      </div>

      <h2 className='font-Josefin text-4xl md:text-6xl font-semibold text-red-400 mt-4 md:mt-7 text-center'>Nossos Serviços</h2>
      <h3 className='font-Josefin text-2xl md:text-4xl font-medium text-yellow-300 mt-2 text-center'>Conheça algumas de nossas opções</h3>

      <div className='grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-3 p-2 md:p-6 w-full'>
        <ServiceCard
          title="Casamento"
          description="Serviço de buffet completo para casamentos, com opções personalizadas."
          imageUrl={ImageHomeCasal}
        />
        <ServiceCard
          title="Formatura"
          description="Buffet especializado para festas de formatura, com menus variados."
          imageUrl={ImageHomeFormatura}
        />
        <ServiceCard
          title="Festa Corporativa"
          description="Organização de eventos corporativos com serviço de buffet de alta qualidade."
          imageUrl={ImageHomeCorporative}
        />
        <ServiceCard
          title="Festa de Debutante"
          description="Buffet para festas de debutante, com opções elegantes e sofisticadas."
          imageUrl={ImageHome15Th}
        />

      </div>
      <div className='flex flex-col md:flex-row justify-around w-full'>
        <button onClick={() => navigate('/buffet-casa-do-chef/service')} className='font-Josefin text-3xl rounded-md py-1 px-4 mb-7 bg-red-500 hover:bg-red-400 active:scale-95 cursor-pointer text-yellow-100'>Saiba mais</button>
        <button onClick={() => navigate('/buffet-casa-do-chef/contact')} className='font-Josefin text-3xl rounded-md py-1 px-4 mb-7 bg-red-500 hover:bg-red-400 active:scale-95 cursor-pointer text-yellow-100'>Faça um orçamento</button>
      </div>

    </div>
  )
}