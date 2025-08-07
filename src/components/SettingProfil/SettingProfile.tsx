import Image from 'next/image'
import React from 'react'
import Profile from '../../../public/Profile.jpeg'
import { MdOutlineCameraAlt } from "react-icons/md";

const SettingProfile = () => {
  return (
   <section className='h-full w-full '>
    <div className='border border-gray-200 rounded-2xl p-4 h-full'>
        <div className=''>

        <h1>Profile Picture</h1>
        </div>
        <div className='flex flex-col items-center  py-4 lg:py-8 gap-y-3'>
        <div className=' '>
            <Image 
              src={Profile} 
              alt='Profile' 
              height={80} 
              width={80} 
              className='rounded-4xl lg:rounde-5xl lg:h-[100px] lg:w-[100px] ' 
            />
          </div>
            <div className='flex border border-gray-200 p-2 rounded-xl gap-x-2  '>
                <div className='mt-1 text-sm'>
                    <MdOutlineCameraAlt/>
                </div><div>
                    <h1 className='text-sm'>Change Photo</h1>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default SettingProfile
