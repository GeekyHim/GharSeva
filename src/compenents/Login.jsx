// will use react hook form library 
import React from 'react'
import { useForm } from "react-hook-form";

// form creation
// registration, data taking
// submit button se kya hoga

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div> 
      <form>
        
        <div>
          <label> First Name:</label>
          <input />
        </div>
        <div>
          <label> First Name:</label>
          <input/>
        </div>
        <div>
          <label> First Name:</label>
          <input/>
        </div>
        <div>
          <label> First Name:</label>
          <input/>
        </div>
        <div>
          <label> First Name:</label>
          <input/>
        </div>
      </form>
    </div>
    // <>
    //   <h1>HELLO</h1>
    // </>
    )
}

export default Login