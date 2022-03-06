import React,{useState} from 'react'
import InscriptionDesk from '../Components/Desk/InscriptionDesk'
import InscriptionMobile from '../Components/Mobile/InscriptionMobile'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {toast } from 'react-toastify'
import axiosInstance from '../axios'
import ReactModal from 'react-modal';
import {IonText} from '@ionic/react'

function Inscription({getuser}) {
	const history=useHistory()
    const  [showpassword, setshowpassword] = useState(false)
    const  [modal, setmodal] = useState(false)
	const  [modalmobile, setmodalmobile] = useState(false)
    const  [showpasswordcon, setshowpasswordcon] = useState(false)
    const initialFormData = Object.freeze({
		phone: '',
		prenom: '',
        nom:'',
		password: '',
        passwordcon:'',
        code:''
	});
    const [formData, updateFormData] = useState(initialFormData);

    const erreurmdp = () => toast.error("Erreur!Les mots de passe ne sont pas conformes ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
      const erreurlg = () => toast.error("Erreur!Le mot de passe ne doit pas etre inferieur a 8 caracteres",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const incorect = () => toast.error("Erreur!Numero de telephone invalide!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
	  const nocode = () => toast.error("Code de verification obligatoire!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

	const handleChange = e => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
			
		});
	};

    const verif=e=>{
		e.preventDefault()
	if(formData.password !==formData.passwordcon){
		erreurmdp()
		
		return;
	}
    if(formData.password.length <8 ||formData.passwordcon.length<8){
		erreurlg()
		
		return;
	}
	if(formData.nom===""||formData.prenom===""||formData.phone===""
	||formData.password===""||formData.passwordcon===""){
		erreurvide()
		return;
	}

	else{
		let formdata=new FormData()
		formdata.append('phone',formData.phone)
		axios
		//.post('https://verysoongaalguimoney.herokuapp.com/api/client/verificationphoneinsription/',formdata)
		.post('http://127.0.0.1:8001/api/utilisateur/phonecodeconfirmation/',formdata)
		.then(res=>{
		  updateFormData({
				...formData,id:res.data.id
			})
		   setmodal(true) 
		   //console.log(res.data) 
		})
		.catch(()=>{
			incorect()
			return;
		 })
		
	}
		}
     const handlecode=e=>{
            updateFormData({
                ...formData,
                code: e.target.value
            });
        }
       const handleSubmit = (e) => {
            e.preventDefault();
            //console.log(formData);
           if(formData.code!==""){
            axios
            //.post('https://gaalguimoneyback.herokuapp.com/api/client/registration/', {
              .post('http://127.0.0.1:8001/api/utilisateur/registration/',{
                phone: formData.phone,
                prenom: formData.prenom,
                nom: formData.nom,
                password:formData.password,
                identifiant:formData.id,
                code:formData.code
            })
    
            .then((res) => {
               
              axios
            .post(`http://127.0.0.1:8001/api/utilisateur/connexion/`, {
                phone: formData.phone,
                password: formData.password,
            })
           .then((res) => {
                localStorage.setItem('__jdkm__', res.data.access);
                localStorage.setItem('__jvqm__', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                 'JWT ' + localStorage.getItem('__jdkm__');
                 getuser()
				 setmodal(false)
                history.push("/")
               window.location.reload()
            })
        
            });
         }
             
           else{
            
            nocode()
            return;
                
            }
        };

        const handletime=()=>{
            setmodal(false)
        }
	return (
		<div>
	<InscriptionDesk verif={verif} handleChange={handleChange}showpassword={showpassword}
	setshowpassword={setshowpassword} showpasswordcon={showpasswordcon} 
   setshowpasswordcon={setshowpasswordcon} modal={modal} setmodal={setmodal}
   handleSubmit={handleSubmit} handlecode={handlecode} handletime={handletime}/>
<InscriptionMobile verif={verif} handleChange={handleChange}showpassword={showpassword}
 setshowpassword={setshowpassword} showpasswordcon={showpasswordcon} 
 setshowpasswordcon={setshowpasswordcon} modal={modal} setmodal={setmodalmobile}
  handleSubmit={handleSubmit} handlecode={handlecode} handletime={handletime}/>

 	
		</div>
	)
}

export default Inscription
