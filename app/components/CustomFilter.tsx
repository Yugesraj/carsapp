"use client";

import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

import React from 'react'

export interface OptionProps{
  title: string;
  value: string;
}

interface CustomFilterProps{
  title: string,
  options: OptionProps[];
}

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  
   const router = useRouter();

  const handleUpdateParams = (e: { title: string, value: string}) =>{
    //const newPathname = '';

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(title, e.value.toLowerCase());
    // Update or delete the 'model' search parameter 
    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
   

    // Generate the new pathname with the updated search parameters
     const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  }


  return (
    <div className='w-fit'>
      <Listbox
      value = {selected}
      onChange={(e) => {setSelected(e);
        handleUpdateParams(e);
      }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
          <Image src="/chevron-up-down.svg" alt='chevron'
          width={20}
          height={20}
          className='ml-4 object-contain' />

          </Listbox.Button>
         <Transition as={Fragment}
         leave='transition ease-in duration-100'
         leaveFrom='opacity-100'
         leaveTo='opacity-0'>

          <Listbox.Options className="custom-filter__options">
            {
              options.map((option) =>(
                <Listbox.Option
                key={option.title}
                value={option}
                className={({active}) => `relative cursor-default
                select-none py-2 px-4 ${
                active? 'bg-primary-blue text-white':
                'text-gray-900' }`}>
                  {({selected}) => (
                    <span className={`block truncate
                    ${selected ? 'font-medium':
                  'font-normal'}`}>{option.title}</span>
                  )}
                </Listbox.Option>

              ))
            }

          </Listbox.Options>

         </Transition>

        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter