import React, { Fragment,useState,useEffect } from 'react'
import AccueilDesk from '../Components/Desk/AccueilDesk'
import AccueilMobile from '../Components/Mobile/AccueilMobile'
import StaffAccueil from '../PageStaff/StaffAccueil'
import axios from 'axios'
import {IonLoading} from '@ionic/react'
import axiosInstance from '../axios'


function Accueil({isstaf,user,islog}) {
    const  [vendeur, setvendeur] = useState([])
    const  [showLoading, setShowLoading] = useState(true);
    const  [populaire, setpopulaire] = useState([]);
    const  [occas, setoccas] = useState([]);
    const  [vendload, setvendload] = useState(false)
    const [category, setcategory] = useState([])
    const [catload, setcatload] = useState(false)
    const [occasload, setoccasload] = useState(false)
  



    useEffect(()=>{
       getvendeur()
    },[])
    useEffect(()=>{
        getcategory()
    },[])
    useEffect(()=>{
        getoccasion()
    },[])
  
    const getpopulaire=()=>{
        //
    }
    const getoccasion=()=>{
        axios
        .get('http://127.0.0.1:8001/api/produit/produitoccasion/')
        .then(res=>{
            setoccas(res.data)
            
            setoccasload(true)
        })

    }
    const getvendeur=()=>{
        axios
        .get('http://127.0.0.1:8001/api/produit/nosvendeur/')
        .then((res=>{
           // console.log(res.data)
            setvendeur(res.data)
            setvendload(true)
            
        }))
    }
    const getcategory=()=>{
        axios
        .get('http://127.0.0.1:8001/api/produit/category/')
        .then(res=>{
            setcategory(res.data)
            setcatload(true)
          //   console.log(res.data)
        })
    }

   
    
    return ( 
       <div>
        {isstaf? <StaffAccueil/>:
        <Fragment>
        {catload &&vendload &&occasload?
       
        <>
        <AccueilDesk user={user} vendeur={vendeur} category={category} occas={occas}
         islog={islog}  />
        <AccueilMobile user={user} vendeur={vendeur} category={category} occas={occas}
         islog={islog} />
         </>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000} />}

        </Fragment>}
           
      </div>

    

    )
}

export default Accueil
