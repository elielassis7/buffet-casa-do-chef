import React from "react"

interface serviceContainerProps {
  title: string
  content: string
  //image: string
}

export function ServiceContainer({ title, content }: serviceContainerProps) {
  return (
    <div className="flex flex-col w-full h-[400px] mt-6">
      {/* <div className='absolute bg-gradient-to-l to-transparent via-90% from-cyan-400   z-10 h-full w-[70%] right-0' /> */}

      <div className="w-full h-[150px] flex flex-row justify-around items-center bg-gradient-to-l to-transparent via-70% from-cyan-400">
        <h2 className="font-dancing font-semibold text-5xl text-yellow-300">{title}</h2>
        <p className='text-start font-Josefin text-lg text-gray-950 w-2/3'>{content}</p>
      </div>


      <div className="w-full flex flex-row justify-center items-center">

        <div className='object-cover size-[250px] flex justify-center items-center bg-indigo-400'>Foto</div>
        <div className='object-cover size-[250px] flex justify-center items-center bg-indigo-700'>Foto</div>
        <div className='object-cover size-[250px] flex justify-center items-center bg-indigo-400'>Foto</div>
        <div className='object-cover size-[250px] flex justify-center items-center bg-indigo-700'>Foto</div>
        <div className='object-cover size-[250px] flex justify-center items-center bg-indigo-400'>Foto</div>
      </div>

    </div>
  )

}