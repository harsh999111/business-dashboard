import React from 'react'
import { FiSave } from "react-icons/fi";
const DashBoardSetting = () => {
  return (
    <section className='h-full w-full '>
        <div className='flex justify-between '>

        <div className='flex flex-col space-y-2'><h1 className='text-xl font-semibold'>Account Settings</h1><p className='text-sm text-gray-700'>Manage your account preferences and platform configuration.</p></div>
        <div className='py-2'>
            <div className='flex gap-x-2 bg-gradient-to-r from-[#087C86] to-[#025A85] text-white p-2 rounded-xl w-34'>
                <div className='text-sm mt-1'><FiSave/></div>
                <h1 className='text-sm'>Save Changes</h1>
            </div>
        </div>
        </div>
    </section>
  )
}

export default DashBoardSetting
