import React from 'react'
import { useState } from 'react'



const UserRegistration = () => {
const [formData, setFormData] = useState('')

console.log(formData);
const handleChange = (e) =>{
	console.log(e.target.id);
}

  return (
	< >
		<form className='container'>
		<div className="form-group">
			<label htmlFor="exampleInputEmail1">Email address</label>
			<input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" 
				onChange={handleChange}
			/>
			<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
		</div>
		<div className="form-group">
			<label htmlFor="exampleInputPassword1">Password</label>
			<input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" 
			/>
		</div>
		<div className="form-group">
			<label htmlFor="exampleInputPassword1">Password Confirmation</label>
			<input type="password" className="form-control" id="exampleInputPassword2" name='password2' placeholder="Password" />
		</div>

		<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	</>
	
  )

}

export default UserRegistration