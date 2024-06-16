import React from 'react';

export default function InputText({ name, handleInputChange, id , textvalue}) {


  return (
    <textarea
      name={name}
      id={id}
      value={textvalue}
      onChange={handleInputChange}
      placeholder='Your response here'
    />
  );
}