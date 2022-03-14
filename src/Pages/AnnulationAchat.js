import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonLoading} from '@ionic/react'
import AnnulationAchatDesk from '../Components/Desk/AnnulationAchatDesk'
import AnnulationAchatMobile from '../Components/Mobile/AnnulationAchatMobile'


function AnnulationAchat(props) {
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
  return (
    <div>
      {load && notification.nature_notification==="annulation d achat"?
      <div>
      <AnnulationAchatDesk notification={notification}/>
      <AnnulationAchatMobile notification={notification}/>
      </div>:
      <IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
    />}

    </div>
  )
}

export default AnnulationAchat