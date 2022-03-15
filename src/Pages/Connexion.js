import React,{useState} from 'react'
import ConnexionDesk from '../Components/Desk/ConnexionDesk'
import ConnexionMobile from '../Components/Mobile/ConnexionMobile'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import axiosInstance from '../axios';
import {toast } from 'react-toastify'


function Connexion({getuser}) {
	const history = useHistory();
	const  [showpassword, setshowpassword] = useState(false)
	const initialFormData = Object.freeze({
		phone: '',
		password: '',  
	});


	const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	const erreurvalide = () => toast.error("Verifiez la validité des donnees entrees ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	const [formData, updateFormData] = useState(initialFormData);

	const handlechange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(formData.phone===""||formData.password===""){
			erreurvide()
			return;
		}
        else{
		axios
		.post('https://gaalguishopbackend.herokuapp.com/api/utilisateur/connexion/',{
		//.post('http://127.0.0.1:8001/api/utilisateur/connexion/', {
				phone: formData.phone,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('__jdkm__', res.data.access);
				localStorage.setItem('__jvqm__', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('__jdkm__');
				history.push('/');
				getuser()
				window.location.reload()
				//console.log(res);
				//console.log(res.data);
			})
		   .catch(()=>{
		   	erreurvalide()
		   	return;
		   })
		}
	};
	
	return (
		<div>
			<ConnexionDesk handleSubmit={handleSubmit} handlechange={handlechange} showpassword={showpassword}
			setshowpassword={setshowpassword}/>
			<ConnexionMobile  handleSubmit={handleSubmit} handlechange={handlechange} showpassword={showpassword}
			setshowpassword={setshowpassword}/>
		</div>
	)
}

export default Connexion
