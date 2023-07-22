'use client'
import Typewriter from 'react-ts-typewriter';

export default function myComponent() {
    return (
        <h1 className='ml-[700px] duration-100 w-[290px] bg-light leading-[24px] p-5 italic'>
            <Typewriter text={['- кофе без лишних гласных.', 'Добро пожаловать!', 'ул.Букетова 20']} loop={true} delay={5000} speed={100}/>
        </h1>
    )
}