import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const UserLogin = (props) => {
const [formData, setFormData] = useState({email:'', password:''})

const handleChange = (e) =>{
	const { name, value } = e.target;
	setFormData(prevState => ({
		...prevState,
		[name]: value
	}));
}
const handleSubmit = () =>{
	if (!(formData.email == '' & formData.password == '')) {
		axios.post('http://localhost:8000/users/sign_in', {
			user:{
				email:formData.email,
				password:formData.password,
			}
		  })
		  .then(function (response) {
				// if (response.data.status ==='created'){
					console.log(response);
					props.handleSuccessfulAuth(response.data)
					console.log(response.data);
				// }
		  })

		  .catch(function (error) {
			console.log(error);
		  });
	}
}

  return (
	< >
	<h1 className='text-center mt-5'>User Sign In</h1>
		<form className='container'>
		<div className="form-group mt-3">
			<label htmlFor="exampleInputEmail1">Email address</label>
			<input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" 
				onChange={handleChange}
			/>
		</div>
		<div className="form-group mt-3">
			<label htmlFor="exampleInputPassword1">Password</label>
			<input type="password" className="form-control" id="exampleInputPassword1" name='password' placeholder="Password" onChange={handleChange}
			/>
		</div>
	

		<button type="button" className="btn btn-primary mt-3 text-" onClick={handleSubmit}>Submit</button>
		</form>
	</>
	
  )

}

export default UserLogin