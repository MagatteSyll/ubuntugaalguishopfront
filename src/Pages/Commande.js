import React,{useState,useEffect} from 'react';
import axiosInstance from '../axios'
import {IonLoading,IonModal,IonText,IonIcon,IonCol,IonRow,IonGrid} from '@ionic/react'
import CommandeDesk from '../Components/Desk/CommandeDesk';
import CommandeMobile from '../Components/Mobile/CommandeMobile';
import {timeOutline} from 'ionicons/icons'
import axios from 'axios'
import {toast } from 'react-toastify'
import { useHistory } from 'react-router-dom';



function Commande(props) {
    let slug=props.match.params.slug 
    let id=props.match.params.id
    let nom=props.match.params.nom
    const history=useHistory()
    const  [produit, setproduit] = useState([]);
    const  [load, setload] = useState(false);
    const  [showLoading, setShowLoading] = useState(true);
    const  [calculer, setcalculer] = useState(false);
    const  [total, settotal] = useState();
    const  [adress,setadress]=useState([])
    const  [livraison, setlivraison] = useState();
    const  [dta, setdta] = useState({
        nom:'',
        tel:'',
        phonegaalgui:'',
        id:'',
        adress:'',
        livraison:''

    });
  


   const missingcredential = () => toast.error("Veuillez remplir tous les champs!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
  const nogoodtel = () => toast.error("Verifiez la validité des credentiels!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
  const nocode = () => toast.error("code de verification obligatoire!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
  const nocommande = () => toast.error("Echec de la commande ,veuillez reessayer ulterieurement!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });

    useEffect(()=>{
        axiosInstance
        .post('produit/cartcommande/',{slug:slug,id:id})
        .then(res=>{
           // console.log(res.data)
            setproduit(res.data.cartproduit)
            setadress(res.data.adress)
            setload(true)
        })
  
      },[slug,id])

const handlesubmit=e=>{
    e.preventDefault();
   // console.log(dta.nom,dta.tel,dta.phonegaalgui,dta.adress)
    if(dta.nom==="" ||dta.tel===""||dta.phonegaalgui===""||dta.adress===""){
        missingcredential()
        return;
    }
    else{
    let formdata=new FormData()
    formdata.append('phone',dta.phonegaalgui)
    formdata.append('total',total)
    axios
    .post('http://127.0.0.1:8000/api/client/verificationpayement/',formdata)
    .then(res=>{
    let forma=new FormData()
    let id_code=res.data.id
    forma.append('nom_client',dta.nom)
    forma.append('phone',dta.tel)
    forma.append('adress_id',dta.adress)
    forma.append('livraison',livraison)
    forma.append('total',total)
    forma.append('cart_id',id)
    forma.append('phone_gaalguiMoney',dta.phonegaalgui)
    axiosInstance
    .post('produit/commande/',forma)
    .then(res=>{
        //console.log(res.data)
        let idcom=res.data.id
        history.push(`/confirmationpayement/${idcom}/${id_code}/${nom}`)

    })
    .catch(()=>{
       return;
    })
     
    })
    .catch(()=>{
        nogoodtel()
        return;
    })
}
}

const handledta=e=>{
    setdta({...dta,[e.target.name]: e.target.value.trim()})
}
const handladress=e=>{
    let fordata=new FormData()
    setdta({...dta,adress:e.target.value})
    fordata.append('adress_id',e.target.value)
    fordata.append('cartproduit_id',id)
    fordata.append('slug',slug)
    axiosInstance
    .post('produit/calculivraison/',fordata)
    .then(res=>{
       // console.log(res.data)
        setlivraison(res.data.livraison)
        settotal(res.data.total)
        setcalculer(true)
    })
}


  return (
  <div>
      {load?
      <div>
      <CommandeDesk produit={produit} handlesubmit={handlesubmit} livraison={livraison} 
      handladress={handladress} calculer={calculer} total={total} handledta={handledta} adress={adress} />
      <CommandeMobile produit={produit} handlesubmit={handlesubmit} handledta={handledta}
       handladress={handladress} calculer={calculer} livraison={livraison} total={total} adress={adress}/>
      </div>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}
  </div>
  );
}

export default Commande;
