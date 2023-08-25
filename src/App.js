import React, { useState,useEffect } from 'react'

function App() {
  let str = 'abcdERTPOFIDHCNXMALQvncmx'
  const [save, setsave] = useState([])
  const [val, setval] = useState([])
  let temp = ''
  

   useEffect(()=>{
    for (let i = 0; i < 6; i++) {
      let random = str[Math.floor(Math.random() * str.length)]
      temp = temp + random
    }
    setsave(temp)
  },[]) 
    // console.log(save)

  function Refreshfunc(){
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
            console.log('valid')
            console.log(j)

          }


        }


      }

    }
    if(  val != ''&& j!=6){
      console.log('invalid')
    }

    if(val == '') {
      alert('empty')
    }

  }
  return (
    <>
      <p>{save}</p>
      <input placeholder='copy this' value={val} onChange={(e) => setval(e.target.value)}></input>
      <button onClick={checkfunc}>check </button>
      <button onClick={Refreshfunc}>Refresh</button>

    </>
  )
}

export default App
