import React,{useEffect,useState,Fragment} from 'react'
import axiosInstance from '../axios'
import {Card,} from  'react-bootstrap'
import {IonLoading} from '@ionic/react'
import AchatDesk from '../Components/Desk/AchatDesk'
import AchatMobile from '../Components/Mobile/AchatMobile'



function HistoriqueDachat() {
   const  [achat, setachat] = useState([])
    const  [loaded, setloaded] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        axiosInstance
        .get('produit/historiquedachat/')
        .then(res=>{
            //console.log(res.data)
            setachat(res.data)
            setloaded(true)
        })
    },[])
    return ( 
        <div>
        {loaded?
        <div>
        <AchatDesk achat={achat}/>
        <AchatMobile achat={achat}/>
        </div>:null}
         </div>
    )
}

export default HistoriqueDachat

