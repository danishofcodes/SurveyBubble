import { useState, useEffect } from 'react'
import './App.css'
import { questions } from './data/dummydata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import QuestionCard from './components/QuestionCard'
import reactImg from './assets/react.svg'



function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const [textvalue, setTextvalue] = useState('');
  const length = questions.length - 1

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    setTextvalue(value)
    console.log("yourtext", textvalue)

  }
  function handleCheckboxChange(e) {
    const { name, checked, value } = e.target;
    console.log(name, checked, value)
   

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...(prevData[name] || []), e.target.value]
        : prevData[name]?.filter((item) => item !== e.target.value),
    }))


  }

  function handleRadioChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }



  function handleNext() {
    // setFormData((prevData) => ({ ...prevData }));
    localStorage.setItem('formData', JSON.stringify(formData));
    if (currentIndex < length) {
      setFadeAnimation(true);
      setCurrentIndex(currentIndex + 1);

      setTimeout(() => {
        setFadeAnimation(false);
      }, 300);
    }


  }

  function handlePrev() {
    // setFormData((prevData) => ({ ...prevData })); 
    localStorage.setItem('formData', JSON.stringify(formData));
    if (currentIndex > 0) {
      setFadeAnimation(true); 
      setCurrentIndex(currentIndex - 1);

      setTimeout(() => {
        setFadeAnimation(false);
      }, 300);
    }
  }

  const res = questions[currentIndex];
  let page = currentIndex + 1


  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 4))

    setTimeout(() => {
      console.log("cleared all from l-storage")
      setFormData({})
      localStorage.clear();
      location.reload();

    }, 4000)

  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <div className="header ">
        <div className="logo">
          <div className="iconsec">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <h2 className="roboto-light ">Surveyfeeds</h2>
        </div>


        <div className='flex items-center iconsec'>
          <img src={reactImg} alt="" />
          {/* this field can be used for company logo */}
          <p className='font-bold text-[#fff] ms-1'>React JS</p>
        </div>
      </div>
      <div className="progressbar"></div>
      <div className="pgcountsec"> <span className="pgcount">{page}/{questions.length}</span></div>
      <form>
        <div className="spread">


          <main>
            <div className="container">
              {/* <QuestionCard question={res.feedbackquestion} questionNo={currentIndex} type={res.type} options={res.options} fadeAnimation={fadeAnimation} handleChange={handleChange}/> */}

              <QuestionCard
                fadeAnimation={fadeAnimation}
                questionNo={page}
                question={res.feedbackquestion}
                type={res.type}
                options={res.options}
                name={res.name}
                id={res.id}
                handleRadioChange={handleRadioChange}
                handleCheckboxChange={handleCheckboxChange}
                handleInputChange={handleInputChange}
                formData={formData}
                textvalue={textvalue}
              />
            </div>
          </main>

          <div className="actionbuttonsec">
            <button type="button" className="buttonaction themeblu  hover:bg-gray-500" onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft} /> Prev</button>
            {currentIndex < length && <button type="button" className="buttonaction themeblu hover:bg-gray-500" onClick={handleNext}>Next <FontAwesomeIcon icon={faAngleRight} /></button>}
            {currentIndex === length && <button type="button" className="buttonaction bg-green-500 hover:bg-green-600" onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </form>
    </>
  )
}

export default App
