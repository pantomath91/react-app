import React, { useState } from 'react'
const App3 = ()=>{
    const[value,setShowData] = useState(null);
    const ShowRe = () =>{
        setShowData(document.getElementById('text1').value);
    }
    return(
        <>
            <button onClick={ShowRe}>Click Here</button><br /><br />
            <input type="text" name="text1" id="text1" />
            <p id="p1">{value}</p>
        </>
    )
}
export default App3;
