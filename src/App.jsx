// import { useState } from 'react'
import github from '/github-mark.svg'
import linkedin from '/LI-In-Bug.png'
import {ArrowDownTrayIcon} from '@heroicons/react/24/solid'
import Tooltip from './components/Tooltip'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div class="bg-gray-100 flex flex-row p-4 justify-between items-center">
      <h1 className="text-4xl font-bold text-blue-500">
        Shivam Ashtikar
      </h1>
      <div class="flex flex-row">
        <div class="flex flex-row p-4">
          <a href="https://github.com/shivamashtikar" target="_blank">
              <img src={github} alt="github" class="h-8"/>
          </a>
        </div>
        <div class="flex flex-row p-4">
          <a href="https://www.linkedin.com/in/shivamashtikar" target="_blank">
              <img src={linkedin} alt="linkedin" class="h-8"/>
          </a>
        </div>
        <div class="flex flex-row p-4" >
          <Tooltip text="Download Resume" position="bottom">
            <a href="./resume/Shivam_Ashtikar_Resume.pdf" download>
              <ArrowDownTrayIcon class="h-8 text-blue-500" alt="Download Resume" />
            </a>
          </Tooltip>
        </div>
      </div>
    
    </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <p className="text-sky-700"> (Something Awesome Here Soon!) </p>
    </div>
    </>
  )
}

export default App
