import React, { useState } from 'react'
export const App2 = () =>{
    const [info,setInfo] = useState("");
    const FunVi = () =>{
      setInfo("MyData");
    }
    //const state = useState();
    return(
      <>
        <button onClick={FunVi}>click me here</button>
        {/* <p id="para1">{info}</p> */}
      </>
    )
  
  }

  export default App2;