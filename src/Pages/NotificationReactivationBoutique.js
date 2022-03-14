import React,{useState,useEffect} from 'react'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import {Link} from 'react-router-dom'



function NotificationReactivationBoutique(props){
	let id=props.match.params.id
    const  [notification, setnotification] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
      axiosInstance
      .post('produit/getnotification/',{id:id})
      .then(res=>{
        setnotification(res.data)
        setload(true)
      })
    },[id])

return(
 <div>
 {load && notification.nature_notification==="reactivation boutique"?
 <div className='w3-margin'>
 <h1>{notification.message}</h1>
 <h2>Nous vous invite a un plus grand respect<Link> de la politique de confidentialite
 </Link> et vous souhaite un rebienvenu dans la famille .
 Vous pouvez modifier l etat actuel des produits de votre <Link to='/maboutique'>boutique</Link>
 </h2>

 
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

export default NotificationReactivationBoutique;