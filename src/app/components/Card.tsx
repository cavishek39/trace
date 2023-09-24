import React from 'react'

type CardProps = {
  title: string
  content: string
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className='bg-white inline-flex p-12 h-44 shadow-md rounded-lg overflow-hidden  justify-center items-center'>
      <div>
        <h3>{title}</h3>
        <h1 className='font-bold text-2xl'>{content}</h1>
      </div>
    </div>
  )
}

export default Card
