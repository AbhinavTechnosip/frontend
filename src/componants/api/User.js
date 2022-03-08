import axios from "axios";

	axios.post('http//:localhost:8000/users',{
		user:{
			email:'abhinav@gmail.com',
			password:'aaivadil',
			password_confirmation:'aaivadil'
		}
	}).then((r)=>{
		console.log(r.data);
	}).catch((e)=>{
		console.log(e);
	})

