import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    job: '',
    phone: '',

  })


  useEffect(()=>{
    console.log("re-render");
  },[form])

  const handleSubmit = ()=>{
    console.log("submit");
  }

  const handleChange = (e) =>{
    setForm(prev => {
      return{...prev,
        [e.target.name]:e.target.value
      }

    })
  }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='lastName'>Last Name</label>
          <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='age'>Age</label>
          <input type="number" id="age" name="age" value={form.age} onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='job'>Job</label>
          <input type="text" id="job" name="job" value={form.job} onChange={(e) => handleChange(e)} />
          <br />
          <label htmlFor='phone'>Telephone#</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={(e) => handleChange(e)} />
          <br />
          <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default App
