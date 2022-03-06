import React,{Fragment,useState,useEffect} from 'react'
import axiosInstance from '../../../axios'
import {IonIcon} from '@ionic/react'
import {addOutline,checkmarkDoneOutline} from 'ionicons/icons'

function FollowerBoutiqueVu({user_id,boutique_id,getboutique}) {
    const [isabonned, setisabonned] = useState()
    const  [load, setload] = useState(false)
 
    useEffect(()=>{
      getfollower()
    },[])
    const getfollower=()=>{
    axiosInstance
    .post('produit/isabon/',{user_id:user_id,boutique_id:boutique_id})
    .then(res=>{
     // console.log(res.data)
      setisabonned(res.data)
      setload(true)
    })
    }
  const addfollower=id=>{
        axiosInstance
        .post('produit/addfollower/',{id_boutique:id})
        .then(res=>{
           // console.log(res.data)
           getfollower()
           getboutique()
        })
     }
     const removefollover=id=>{
         axiosInstance
         .delete(`produit/follower/removefollower/${id}`)
         .then(res=>{
            // console.log(res.data)
           getfollower()
           getboutique()
         })
     }
  return (
    <Fragment>
    {load?
    <span >
    {isabonned?
    <button className="w3-button  w3-red" onClick={()=>removefollover(boutique_id)}>
     <IonIcon icon={checkmarkDoneOutline} className='iconfollower'/>abonné</button>
    :<button className="w3-button  w3-red" onClick={()=>addfollower(boutique_id)}>
     <IonIcon icon={addOutline} className='iconfollower'/>s abonner</button>}
     </span> :null}
    
     </Fragment>

  )
}

export default FollowerBoutiqueVu