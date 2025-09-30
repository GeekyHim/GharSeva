import React from 'react'
import { useForm } from "react-hook-form";


const SignUp = () => {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
      } = useForm();

  async function onSubmitFunction(data){ // data by default handlesubmit provide karega
    console.log("Submitting the signup form",data);
    // SIMULATING API HERE
    await new Promise((resolve)=> setTimeout(resolve,1000))
  }

  return (

    <div className='h-[100vh] w-full'>
<div className='bg-blue-100  mt-[5vh] h-[90vh] w-[1000px] mx-auto border-2'> 
      <form onSubmit={handleSubmit(onSubmitFunction)} 
      className='flex flex-col space-y-2 justify-center h-full w-full items-center' >
        
        <div className='space-x-2.5 flex-col '>
          <label>Name:</label> 
          <input {...register('fullName',
          {
            required:{value:true, message:"Name is required"},
            minLength:{ value : 3, message:"Minimum length should be 3"},
            pattern:{
              value: /^[A-Za-z ]+$/, // allows only alphabets
              message: "Special characters and numbers are not allowed",
            }
          
          })} 
          type='text' placeholder='Enter Name' className= {`border-black border-2 ${errors.fullName ? "border-red-500 border-2":"" }`} />
          
          {errors.fullName && <p className='text-red-500 text-xs'>{errors.fullName.message}</p>}

        </div>
        
        <div className='space-x-2.5 flex-col' >
          <label> Email:</label> 
          <input 
            type='email' placeholder='Enter Email' className={`border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}`}
          {...register('email',
            {required:{value:true, message:"Email is required"},
            pattern:{value: /^[A-Za-z0-9@. ]+$/, // @ allowed
              message: "Special characters are not allowed"}
          })}
          />
          {errors.email && <p className='text-red-500 text-xs'> {errors.email.message} </p>}  
        </div>
        
        <div className='space-x-2.5 flex-col' >
          <label> Password:</label>
          <input 
          className={`border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}` } type='password' placeholder='Enter Password' {...register('password',{
            required:{value:true, message:"password is required"},
            minLength:{value:8, message:"password length must be atleast 8"}
          })}/>

          {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
        </div>

  {/* confrim password logic is left here  */}
          <div className='space-x-2.5 flex-col' >
          <label> Confirm Password:</label>
          <input 
          className={`border-black border-2 ${errors.email ? "border-red-500 border-2" : ""}` } type='password' placeholder='Confirm Password' 
          {...register('confirmPassword',{
            required:{value:true, message:" LOIGC LEFT HERE password is required"},
            // minLength:{value:8, message:"password length must be atleast 8"}
          })}/>

          {errors.confirmPassword && <p className='text-red-500 text-xs'>{errors.confirmPassword.message}</p>}
        </div>


        
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submiting' : 'Submit'} />
        {/* <button>Submit</button> */}

        
      </form>
</div>
    </div>
  )
}

export default SignUp