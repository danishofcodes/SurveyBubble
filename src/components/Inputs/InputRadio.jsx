// import React, { useState, useEffect } from 'react';

import { useEffect } from "react";

export default function InputRadio({ option, name, handleRadioChange , formData}) {
  // console.log("RADIO checkd name", name)
  // console.log("RADIO checkd name", option)

  // console.log("see if equal ", option==formData[name])
 const  isChecked = option==formData[name];
  return (
    <div className='flex items-center py-1'>
     <label  className={`w-full flex items-center py-2 px-2 rounded-lg ${isChecked? "text-[#0492af] bg-[#c0e7f0]"  : ''}`} >
      <input type="radio" name={name} value={option} onChange={handleRadioChange} className='me-2' checked={isChecked}/>
      <span>{option}</span></label>
    </div>
  );
}

