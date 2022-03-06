import React,{useState,useEffect} from 'react'
import NotificationNoteDesk from '../Components/Desk/NotificationNoteDesk'
import NotificationNoteMobile from '../Components/Mobile/NotificationNoteMobile'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'



function NotificationNote(props){
	let id=props.params.match.id
     const [notification,setnotification]=useState([])
     const [load,setload]=useState(false)
     const [showLoading, setShowLoading] = useState(true);
     

     useEffect(()=>{
       getnotification()
     },[])
     const getnotification=()=>{
      axiosInstance
    .post('produit/getnotification/',{id:id})
    .then(res=>{
      setnotification(res.data)
      setload(true)
    })
     }


	return(

     <div>
     {load?
     <>
      <NotificationNoteDesk notification={notification}/>
      <NotificationNoteMobile notification={notification}/>
      </>: <IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
    />}
     </div>

		);
}

export default NotificationNote;