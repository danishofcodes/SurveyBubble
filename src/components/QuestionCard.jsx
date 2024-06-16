
import InputChecked from "./Inputs/InputChecked";
import InputRadio from "./Inputs/InputRadio";
import InputText from "./Inputs/InputText";
import InputEmoji from "./Inputs/InputEmoji";
import { emojiIcons } from './emojiimage';
export default function QuestionCard({ fadeAnimation, questionNo, question, type, options, name, id, handleRadioChange, handleCheckboxChange, handleInputChange, formData, textvalue }) {
  // console.log(type)
  return (
    <>
      <div className={`card ${fadeAnimation ? 'fade-animation' : ''}`}>
        <div className="fb-question">
          {/* {questionNo}. {question} */}
          {question}

        </div>

        <div className="card-content">
          {(type == "textarea" && options == null) &&
            <InputText id={id} key={id} name={name} handleInputChange={handleInputChange} textvalue={textvalue} />
          }
          {type == "radio" &&
            options.map((option, i) => {
              // console.log(option, name)
              return <InputRadio option={option} key={name + i} name={name} handleRadioChange={handleRadioChange} formData={formData} />
            })
          }
          {type == "checkbox" &&
            options.map((option, i) => {
              // console.log(option, name)
              return <InputChecked option={option} key={name + i} name={name} handleCheckboxChange={handleCheckboxChange} formData={formData} />
            })
          }



          {type == "emojireact" &&
            <div className="flex justify-evenly flex-wrap items-center h-[100%]">
              {
                options.map((option, i) => {
                  return (
                        <InputEmoji option={option} key={option + i} name={name} handleRadioChange={handleRadioChange}
                          formData={formData} id={option} emojiimg={emojiIcons[option.toLowerCase().split(" ").join("")]} />
               
                  )
                })
              }
            </div>
          }

        </div>


      </div>




    </>
  );
}

