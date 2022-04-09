import React, { useState } from 'react'
const App1 = () =>{
    //const state = useState();
    const [count,setCount]=useState(0);
    const IncNum = () =>{
      setCount(count +1);
      //console.log('clicked ', count++);
    }
  //console.log(state);
    return(
      <>
        <h2>{count}</h2>
        <button className="butt" onClick={IncNum}>click Me</button>
      </>
    )
  }

  export default App1;