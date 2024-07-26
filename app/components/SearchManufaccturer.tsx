"use client"
import React, { useState } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers } from '@/constants';

interface searchManufacturer {
    propsManufacture: string;
    propsSetManufacture: (manufacturer:string) => void;
}


const SearchManufaccturer = (props: searchManufacturer) => {

    const [qurey, setqurey] = useState("");
    const filteredManufactures= qurey ===""? manufacturers : manufacturers.filter((item) => (item.toLowerCase().replace(/\s+/g, "").includes(qurey.toLowerCase().replace(/\s+/g,""))));

  return (
    <div className='search-manufacturer'>
        <Combobox value={props.propsManufacture} onChange={props.propsSetManufacture}>
            <div className='relative w-full'>



        <Combobox.Button className="absolute top-[14px]">
        <Image
            src="/car-logo.svg"
            alt="carlogo"
            width={20}
            height={20}
            className='ml-4'/>
        </Combobox.Button>

        <ComboboxInput 
        className="search-manufacturer__input"
        placeholder='Fiat'
        displayValue={(manufacturer: string) => manufacturer}
        onChange={(e) => setqurey(e.target.value)} />

        <ComboboxOptions>
          {
            filteredManufactures.length === 0 && qurey !== "" ? (
                <ComboboxOption
                value={qurey}
                className="search-manufacturer__option">

                    create "{qurey}"

                </ComboboxOption>
            ) :

            (filteredManufactures.map((items) => (
                <ComboboxOption
                key={items}
                className={ ({active}) => `relative search-manufacturer__option ${active? 'bg-blue-600 text-white':'text-gray-900' }`  }
                value={items}
                >
      
               {items}

                </ComboboxOption>
            ) ))

          }
        </ComboboxOptions>

 
       

           

            </div>

        </Combobox>
    </div>

  )
}

export default SearchManufaccturer