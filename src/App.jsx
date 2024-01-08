import { useState, useEffect } from "react"

import BodyFooter from "./Components/Body/BodyFooter"
import BodyHeader from "./Components/Body/BodyHeader"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import BodyMain from "./Components/Body/BodyMain"
import EscButton from "./Components/Body/EscButton"
import Result from "./Components/Body/Result"

function App() {

  // This useState is use to change the theme of our website...
  const [darkTheme, setDarkTheme] = useState(true)

  // These useState are used to generate the paragraph according to the user needs...
  const [isNumber, setIsNumber] = useState(false)
  const [isPunctuation, setIsPunctuation] = useState(false)
  const [isEsc, setIsEsc] = useState(false)
  const [isFirstStart, setIsFirstStart] = useState(false);

  const [isTimer, setIsTimer] = useState(0)

  const [completed, setCompleted] = useState(false);
  const [correctCharCount, setCorrectCharCount] = useState(0);
  const [incorrectCharCount, setInCorrectCharCount] = useState(0);

  const handleBodyMainCompletion = (isCompleted, correct, incorrect) => {
    setCorrectCharCount(correct);
    setInCorrectCharCount(incorrect);
    setCompleted(isCompleted);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsEsc((prevIsEsc) => !prevIsEsc);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="relative font-poppins w-full dark:bg-[#323437] bg-gray-300 h-screen flex flex-col justify-between py-[20px] px-[100px] items-center">
        <div className={`z-[999] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${isEsc ? 'block' : 'hidden'}`}>
          <EscButton />
        </div>
        <div className="w-full">
          <Navbar />
        </div>

        {completed 
        ? 
        
          <>
            <Result correctCharCount={correctCharCount} incorrectCharCount={incorrectCharCount} isTimer={isTimer} isNumber={isNumber} isPunctuation={isPunctuation}/>
          </>
        
        :
          (<div className="flex-1 flex flex-col items-center justify-between py-[50px]">
            <BodyHeader isNumber={isNumber} setIsNumber={setIsNumber} isPunctuation={isPunctuation} setIsPunctuation={setIsPunctuation} setIsTimer={setIsTimer} isTimer={isTimer} isFirstStart={isFirstStart} setIsFirstStart={setIsFirstStart} isEsc={isEsc} setIsEsc={setIsEsc}/>
            <BodyMain className='flex-1' isNumber={isNumber} isPunctuation={isPunctuation} isTimer={isTimer}setIsTimer={setIsTimer} isFirstStart={isFirstStart} setIsFirstStart={setIsFirstStart} isEsc={isEsc} onCompletion={handleBodyMainCompletion}/>
            <BodyFooter />
          </div>)
        } 

        <div className="w-full">
          <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </div>
      </div>
    </div>
  )
}

export default App