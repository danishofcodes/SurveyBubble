export default function InputVar({type,options,name,value,handleChange}) {
  return (
    <>
    <div>{console.log(type, options)}</div>
         <div>
         {type === 'checkbox' ? (options.map((option, i) => (<label key={name}>
                <input type="checkbox"  name={name}    value={option}   checked={value.includes(option)} onChange={e => handleChange(e, name)} />
                        {option}
                    </label> ))) : ( type === 'radio' ? (
                    <div>
                        {options.map((option, i) => (
                            <label key={`${i}-${name}`}>
                                <input
                                    type="radio"
                                    name={name} 
                                    value={option}
                                    checked={value === option}
                                    onChange={e => handleChange(e, name)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ) : ( <input type={type} name={name} value={value} onChange={e => handleChange(e, name)} />)
            )}    
        </div>    
    </>
  )
}
