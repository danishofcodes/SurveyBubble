import React from 'react'

export default function InputChecked({option, name, handleCheckboxChange, formData}) {
  function isOptionSelected(option, formData) {
    const selectedOptions = formData[name] || []; 
    return selectedOptions.includes(option);
  }

  const isChecked = isOptionSelected(option, formData);
  return (
    <div className='flex items-center  py-1'>
      <label className={`w-full flex items-center  px-2 py-2 rounded-lg ${isChecked? "text0492af] bg-[#c0e7f0] text-[#0492af]"  : ''}`}>

    <input type="checkbox"  name={name} value={option} onChange={handleCheckboxChange}  checked={isChecked} className='me-2'/>
    <span>{option}</span></label>
    </div>
  )
}

