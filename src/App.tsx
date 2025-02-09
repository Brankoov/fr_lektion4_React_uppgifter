import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      {/* Detta är en kommentar i JSX 
       <h1>Hello World!</h1>
      <div>
        <p>
          2+2= {2 + 2}
        </p>
      </div> */}
      
      {2<4 ? "True" : "False"}
      {2<4 ? <p>2 är mindre än 4</p> : <h1>kommer inte bli denna..</h1> }
      <p>  {2+2 == 90 || 2+2 == 4 ? "TRUE" : "FALSE"} </p> 
      <p>  {2+2 == 4 && 2+4 == 6 ? "TRUE" : "FALSE"} </p> 
      



    
     
    </>
  ) 
  
}

export default App
