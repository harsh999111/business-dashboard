import React from 'react'

const formFields = [
  {
    label: 'Full Name',
    name: 'fullName',
    placeholder: 'John Smith',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'you@example.com',
    type: 'email',
  },
  {
    label: 'Company',
    name: 'company',
    placeholder: 'Your Company',
    type: 'text',
  },
  {
    label: 'Phone',
    name: 'phone',
    placeholder: '+1 234 567 8900',
    type: 'tel',
  },
  {
    label: 'Website',
    name: 'website',
    placeholder: 'https://yourwebsite.com',
    type: 'url',
    fullWidth: true,
  },
  {
    label: 'Timezone',
    name: 'timezone',
    type: 'time',
  },
  {
    label: 'Language',
    name: 'language',
    placeholder: 'English',
    type: 'text',
  },
]

const SettingForm = () => {
  return (
    <section className="h-full w-full ">
      <div className="border border-gray-200 p-6 rounded-2xl  mx-auto bg-white shadow-sm">
        <div className="mb-6">
          <h1 className="text-base font-semibold text-gray-800">Basic Information</h1>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {formFields.map((field, index) => {
              const isFullWidth = field.fullWidth;

              return (
                <div key={index} className={isFullWidth ? 'col-span-2' : ''}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg px-4 py-1 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingForm;
