import React,{useState,useEffect} from 'react'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import NotificationFollowerDesk from '../Components/Desk/NotificationFollowerDesk'
import NotificationFollowerMobile from '../Components/Mobile/NotificationFollowerMobile'


function NotificationFollower(props) {
    let id=props.match.params.id
    const handlebadge=props.handlebadge
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
    const  handlecart = id =>{
        axiosInstance
      .post("produit/addcart/",{id})
       .then(res=>{
        //console.log(res.data)
        handlebadge() 
       
    })
  }
  return (
    <div>
    {load?
    <div>
     <NotificationFollowerDesk notification={notification} handlecart={handlecart}/>
     <NotificationFollowerMobile notification={notification} handlecart={handlecart}/>
    </div>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
    />}
    </div>
  )
}

export default NotificationFollower