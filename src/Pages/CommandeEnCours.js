import React,{useEffect,useState} from 'react'
import axiosInstance from '../axios'
import {Card} from  'react-bootstrap'
import { Fragment } from 'react'
import {IonLoading} from '@ionic/react'
import CommandeEnCoursDesk from '../Components/Desk/CommandeEnCoursDesk'
import CommandeEnCoursMobile from '../Components/Mobile/CommandeEnCoursMobile'

function CommandeEnCours() {
    const  [commande, setcommande] = useState([])
    const  [loaded, setloaded] = useState(false)
    const [showLoading, setShowLoading] = useState(true); 

    useEffect(()=>{
        axiosInstance 
        .get('produit/commandeencours/')
        .then(res=>{
            setcommande(res.data)
            //console.log(res.data)
            setloaded(true)
        })

    },[])
    return (
        <div >
        {loaded?
        <Fragment>
            {commande.length>0?
        <div className=" mt-3">
        <h3 className='centerbtn'>Commandes en cours</h3>
         <CommandeEnCoursDesk  commande={commande}/>
         <CommandeEnCoursMobile commande={commande}/>
        </div>:<h1 className='centerbtn'>Oups vous n avez aucune commande en cours </h1>}
        </Fragment>:
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

export default CommandeEnCours
