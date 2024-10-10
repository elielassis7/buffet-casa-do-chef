import imageHomeBuffet from '../../../assets/image-home.jpg'
import ImageHomeCasal from '../../../assets/image-casal-home.jpg'
import ImageHomeFormatura from '../../../assets/image-formatura-home.jpg'
import ImageHome15Th from '../../../assets/image-15-anos-home.jpg'
import { useNavigate } from 'react-router-dom'
export function Home() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row justify-center border-t-[1px] border-b-[1px] border-sky-400">
        <div className="flex flex-1 flex-row justify-between">
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

        </div>
        <div className='w-1/2'>
          <img src={imageHomeBuffet} alt="" className='relative w-full object-cover' />

          <button onClick={() => navigate('/contact')} className='absolute z-10 translate-x-[23rem] -translate-y-[5rem] font-Josefin text-3xl rounded-md py-1 px-2 bg-red-500 hover:bg-red-400 active:scale-95 cursor-pointer text-yellow-100'>Reserve já</button>

        </div>

      </div>
      <div className='w-full flex flex-row justify-around items-center my-10'>
        <div className=' size-60 rounded-full bg-orange-700 flex flex-col items-center justify-center z-10 border-4 border-red-400'>
          <h3 className='text-red-400 font-bold font-Josefin text-3xl'>Cozinha</h3>
          <span className='text-yellow-300 font-normal font-Josefin text-3xl'>Propria</span>
        </div>
        <div className=' size-60 rounded-full bg-orange-700 flex flex-col items-center justify-center z-10 border-4 border-red-400'>
          <h3 className='text-red-400 font-bold font-Josefin text-3xl'>Espaço para</h3>
          <span className='text-yellow-300 font-normal font-Josefin text-3xl text-center'>30 a 2000 pessoas</span>
        </div>
        <div className=' size-60 rounded-full bg-orange-700 flex flex-col items-center justify-center z-10 border-4 border-red-400'>
          <h3 className='text-red-400 font-bold font-Josefin text-3xl'>Melhor</h3>
          <span className='text-yellow-300 font-normal font-Josefin text-3xl text-center'>Custo beneficio</span>
        </div>
        <div className=' size-60 rounded-full bg-orange-700 flex flex-col items-center justify-center z-10 border-4 border-red-400'>
          <h3 className='text-red-400 font-bold font-Josefin text-3xl'>Otima</h3>
          <span className='text-yellow-300 font-normal font-Josefin text-3xl'>Localização</span>
        </div>
      </div>

    </div>
  )
}