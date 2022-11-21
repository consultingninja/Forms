import './App.css'

function App() {

  const handleSubmit = (e)=>{
    
  }


  return (
    <div className="App">
      <h1>Forms</h1>
        <form onSubmit={(e)=>{e.preventDefault(e); handleSubmit(e)}}>
          <label htmlFor='firstName'>First Name</label>
          <input type="text" id="firstName" name="firstName"  />
          <br />
          <label htmlFor='lastName'>Last Name</label>
          <input type="text" id="lastName" name="lastName"/>
          <br />
          <label htmlFor='age'>Age</label>
          <input required min={1} type="number" id="age" name="age"/>
          <br />
          <label htmlFor='email'>Email</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor='job'>Job</label>
          <input type="text" id="job" name="job"  />
          <br />
          <label htmlFor='phone'>Telephone#</label>
          <input type="tel" id="phone" name="phone"  />
          <br />
          <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default App
