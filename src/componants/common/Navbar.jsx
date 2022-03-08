import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Navbar = (props) => {
	const handleLogout = () =>{
			axios.delete('http://localhost:8000/users/sign_out'
			  ).then(function (response) {
						console.log(response);
			  })
			  .catch(function (error) {
				console.log(error);
			  });
		}

  return (
	<div>
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	<div className="container-fluid">
		<a className="navbar-brand" href="#">Navbar</a>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">

		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
			<a className="nav-link" aria-current="page" href="#">Home</a>
			</li>
		{localStorage.getItem('logged_in') =='LOGGED_IN'? (
		<li className="nav-item">
			<a className="nav-link" onClick={handleLogout}>Logout</a>
		</li>
			):
			[
			<li className="nav-item">
			<Link to="/login" className="nav-link ">Sign In</Link>
			</li>,
			<li className="nav-item">
			<Link to="/register" className="nav-link ">Sign Up</Link>
			</li>] }
			
			<li className="nav-item">
			<a className="nav-link ">{props.loggedInStatus}</a>
			</li>
		</ul>
		<form className="d-flex">
			<button className="btn btn-outline-success" type="submit">Add</button>
		</form>
		</div>
	</div>
	</nav>

	</div>
  )
}

export default Navbar