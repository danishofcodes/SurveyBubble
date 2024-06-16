export default function InputEmoji({ option, name, handleRadioChange, formData, emojiimg }) {
 
  return (
    <>
      <div className={`flex flex-col items-center emojiInput px-2 py-4 gap-2 rounded-2xl cursor-pointer' ${option === formData[name] ? 'bg-[#ffd25547]' : ''}`}>
        <label htmlFor={option}>
            <div className="flex justify-center flex-col items-center">
          <input type="radio" id={option} name={name} value={option} onChange={handleRadioChange} className='me-2' checked={option == formData[name]} />
          <img src={emojiimg} alt={option} />
          <span className={`text-[#0492af] font-medium ${option === formData[name] ? 'text-[#ff8c34]' : ''}`}>{option}</span>
          </div>
        </label>
      </div>
    </>


  );
}

