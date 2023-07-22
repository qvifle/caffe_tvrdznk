import React from 'react'
import {second_font} from '@/app/fonts'

const EmptyCart = () => {
  return (
    <div className="w-[600px]  h-screen flex items-center ">
                <h3
                  className={`mb-5 text-[64px] leading-[72px] ${second_font.className} text-center font-semibold underline decoration-[2px] underline-offset-[8px] `}
                >
                  Пока что тут пусто!
                </h3>
              </div>
  )
}

export default EmptyCart