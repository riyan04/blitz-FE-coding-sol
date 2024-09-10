import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(1)

  const incrementCounter = () => {
    setCounter(counter => counter + 1)
    console.log(counter)

    if (counter > 2) {
      setCounter(3)
    }
  }

  const decrementCounter = () => {
    setCounter(counter => counter - 1);
    console.log(counter)
    if (counter < 2) {
      setCounter(1)
    }
  }

  return (
    <>
      <h1>Hello Blitz</h1>
      <div className='w-100 h-[400px] border border-black flex flex-row p-3 justify-center'>
        <div className=' border border-black w-full h-full flex flex-col'>
          <div className='w-full h-full border border-black flex justify-center items-center'>
            {/* <div id='3' className={` w-[50px] h-[50px] relative border border-red-600 ${counter === 3 ? "" : "hidden"}`}></div> */}
          </div>
          <div className=' w-full h-full border border-black flex justify-center items-center'>
            {/* <div id='2' className={` w-[50px] h-[50px] border relative border-red-600 ${counter === 2 ? "" : "hidden"}`}></div> */}
          </div>
          <div className='w-full h-full border border-black flex justify-center items-center'>
            {/* <div id='1' className={` w-[50px] h-[50px] relative border border-red-600 ${counter === 1 ? "" : "hidden"}`}></div> */}
          </div>
          <div id='1' className={` w-[50px] h-[50px] absolute top-[358px] left-[376px] border border-red-600 transition-transform duration-300 ease-in-out ${counter === 1 ? " -translate-y-[0px]" : counter === 2 ? " -translate-y-[125px]" : " -translate-y-[250px]"}`}></div>

        </div>
        <div className=' border border-black w-full h-full flex justify-center items-center gap-5'>
          <button onClick={incrementCounter} className=' text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Up</button>
          <button onClick={decrementCounter} className=' text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>down</button>
        </div>
      </div>
    </>
  )
}

export default App
