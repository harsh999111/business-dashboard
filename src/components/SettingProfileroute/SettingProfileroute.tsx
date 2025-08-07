"use client"
import React, { useState } from 'react'

const tabs = [
  { label: 'Profile' },
  { label: 'Notification' },
  { label: 'Privacy' },
  { label: 'Billing' },
  { label: 'Integration' },
]

const SettingProfileroute = () => {
  const [activeTab, setActiveTab] = useState('Profile')

  return (
    <section className='h-full w-full '>
      {/* Scrollable container */}
      <div className=''>
        <div className='border border-gray-200 flex rounded-xl w-fit '>
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.label
            const isFirst = index === 0
            const isLast = index === tabs.length - 1

            return (
              <div
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`p-2 cursor-pointer text-sm md:text-sm md:px-4 transition-colors duration-200 border border-gray-200
                  ${isActive ? 'bg-gradient-to-r from-[#087C86] to-[#025A85] text-white' : 'text-black'}
                  ${isActive && isFirst ? 'rounded-l-xl' : ''}
                  ${isActive && isLast ? 'rounded-r-xl' : ''}
                `}
              >
                <h1>{tab.label}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SettingProfileroute
