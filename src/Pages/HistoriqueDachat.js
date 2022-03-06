import React,{useEffect,useState,Fragment} from 'react'
import axiosInstance from '../axios'
import {Card,} from  'react-bootstrap'
import {IonLoading} from '@ionic/react'
import AchatDesk from './AchatDesk'
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
        <div >
            {loaded?
     <Fragment>
    {achat.length>0?
     <div className=" m-3"> 
     <AchatDesk achat={achat}/>
     <AchatMobile achat={achat}/>
    </div>:<h1 className='centerbtn'>Vous n avez effectué aucun achat</h1>}
         </Fragment>:<IonLoading
    cssClass='my-custom-class'
    isOpen={showLoading}
    onDidDismiss={() => setShowLoading(false)}
    message={'Chargement...'}
    duration={5000}
   />}
         </div>
    )
}

export default HistoriqueDachat

