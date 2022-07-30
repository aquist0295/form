import {useState} from 'react';

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlefirstName = (event) => {
    setValues({...values, firstname: event.target.value});
  }

  const handleLastName = (event) => {
    setValues({...values, lastname: event.target.value});
  }

  const handleEmail = (event) => {
    setValues({...values, email: event.target.value});
  }

  const handleSubmitted = (event) => {
    event.preventDefault(); // prevents page from reloading when register button is clicked
    setSubmitted(true);

  }

  
  return (
    <div className="form-container">
        <form action="" className="register-form" onSubmit={handleSubmitted}>
        {submitted && values.firstname && values.lastname && values.email
        ? <div className="success-msg">Success! Thank you for  registering</div> : null}

            <input 
              onChange={handlefirstName}
              value= {values.firstname}
              name="firstname" 
              className="form-field" 
              placeholder="First Name"/>
            {submitted && !values.firstname ? <span>Please enter a first name</span> : null}

            <input 
              onChange={handleLastName}
              value= {values.lastname}
              name="lastname" 
              className="form-field" 
              placeholder="Last Name"/>
            {submitted && !values.lastname ? <span>Please enter a last name</span> : null}
            
            <input 
              onChange={handleEmail}
              value= {values.email}
              name="email" 
              className="form-field" 
              placeholder="Email"/>
            {submitted && !values.email ? <span>Please enter your email</span> : null}

            <button type="submit" className="form-field">
              Register
            </button>

        </form>
    </div>
  );
}

export default App;
