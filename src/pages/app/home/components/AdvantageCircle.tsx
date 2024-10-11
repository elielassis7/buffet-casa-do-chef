import React from "react";

interface AdvantageProps {
  text1: string
  text2: string
}

export function AdvantageCircle({ text1, text2 }: AdvantageProps) {
  return (
    <div className='size-36 md:size-60 rounded-full bg-orange-700 flex flex-col items-center justify-center z-10 border-4 border-red-400'>
      <h3 className='text-red-400 font-bold font-Josefin text-xl md:text-3xl text-center'>{text1}</h3>
      <span className='text-yellow-300 font-normal font-Josefin text-xl md:text-3xl text-center'>{text2}</span>
    </div>
  )
}