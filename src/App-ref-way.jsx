import {useRef } from 'react'

import './App.css'

function App() {
const formRef = useRef();

  const handleSubmit = (e)=>{
    console.log("submit");
    console.log(formRef.current);
  }


  return (
    <div className="App">
        <form ref={formRef} onSubmit={(e) => {e.preventDefault(e);handleSubmit();}}>
          <label htmlFor='firstName'>First Name</label>
          <input type="text" id="firstName" name="firstName"/>
          <br />
          <label htmlFor='lastName'>Last Name</label>
          <input type="text" id="lastName" name="lastName"/>
          <br />
          <label htmlFor='age'>Age</label>
          <input type="number" id="age" name="age"/>
          <br />
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" name="email"/>
          <br />
          <label htmlFor='job'>Job</label>
          <input type="text" id="job" name="job"/>
          <br />
          <label htmlFor='phone'>Telephone#</label>
          <input type="tel" id="phone" name="phone"/>
          <br />
          <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default App
