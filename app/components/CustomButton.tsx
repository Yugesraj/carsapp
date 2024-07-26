"use client"
import React, { MouseEventHandler } from 'react'
import Image from 'next/image'

interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    textStyles?: string,
    rightIcon?:string,
    isDisabled?: boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button disabled={false} 
    type= {"button"}
    className={`custom-btn ${props.containerStyles}`}
    onClick={props.handleClick}>
        <span className={`flex ${props.textStyles}`}>{props.title}</span>
      {
        props.rightIcon && (
          <div className='relative w-6 h-6'>
              <Image src={props.rightIcon} alt='righticon' fill
              className='object-contain' />
          </div>
        )
      }
    </button>
  )
}

export default CustomButton