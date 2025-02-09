import { useState } from 'react'
import './App.css'
import { Student } from './types/Student'

function App() {
  
  //Uppgift 4 kommenterade jag ut. Gjorde en annan variant som jag kunde skriva ut.
  {/*function studentProfile(){
    const [student, getStudent] = useState<Student>({
      name :"Liam",
      age:19, 
      grade: "B" 
    })
  } */}

  const [student, getStudent] = useState<Student>({
    name:"Branko",
    age: 31,
    grade:"A+"
  })


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

      <h2>Student sida</h2>
      <div>
        <p>Studentens namn: {student.name}</p>
        <p>Studentens ålder: {student.age}</p>
        <p>Studentes betyg: {student.grade}</p>
      </div>    
     
    </>
  ) 
  
}

export default App
