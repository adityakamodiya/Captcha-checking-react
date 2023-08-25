import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  let str = 'abcdERTPOFIDHCNXMALQvncmx'
  const [save, setsave] = useState([])
  const [val, setval] = useState([])
  let temp = ''


  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      let random = str[Math.floor(Math.random() * str.length)]
      temp = temp + random
    }
    setsave(temp)
  }, [])
  // console.log(save)

  function Refreshfunc() {
    for (let i = 0; i < 6; i++) {
      let random = str[Math.floor(Math.random() * str.length)]
      temp = temp + random
    }
    setsave(temp)
  }


  // generate();
  // console.log(save.length)

  function checkfunc() {
    let j = 0;
    // console.log('tes')
    if (val != '' && save) {

      // console.log(val)
      for (let i = 0; i < save.length; i++) {

        if (val[i] === save[i]) {
          j++
          if (j === save.length) {
            alert('valid')
            console.log(j)

          }


        }


      }

    }
    if (val != '' && j != 6) {
      alert('invalid')
    }

    if (val == '') {
      alert('empty')
    }

  }
  return (
    <>

      <div id='wrapper'>
        <div className='sub-wrapper'>
          <h1>Captcha filling</h1>
          <div className='box'>
            <span>
            <h4>{save}</h4></span>
            <input placeholder='copy this' value={val} onChange={(e) => setval(e.target.value)}></input>

            <div className='buttons'> <button onClick={checkfunc}>check </button>
              <button onClick={Refreshfunc}>Refresh</button></div>
          </div>
        </div></div>
    </>
  )
}

export default App
