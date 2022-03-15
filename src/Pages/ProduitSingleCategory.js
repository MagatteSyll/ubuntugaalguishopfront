import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { IonLoading } from '@ionic/react';
import {useHistory} from 'react-router-dom'
import ProduitUneCategorieDesk from '../Components/Desk/ProduitUneCategorieDesk';
import ProduitUneCategorieMobile from '../Components/Mobile/ProduitUneCategorieMobile';


function ProduitSingleCategory(props) {
    const  [produit, setproduit] = useState([])
    const  [user, setuser] = useState({})
    const  [load, setload] = useState(false)
    const truncateString=props.truncateString
    let category=props.match.params.slug
    const handlebadge=props.handlebadge
    const [showLoading, setShowLoading] = useState(true);
    const isStaf=props.isStaf
   const  islog=props.islog
   const history=useHistory()
    
  
   
  

    useEffect(()=>{
        
      fetchdata() 

    },[])
    
    

    const fetchdata=()=>{
        axios
        .post('https://gaalguishopbackend.herokuapp.com/api/produit/produitpercategory/',{category:category})
        .then(res=>{
           // console.log(res.data)
            setproduit(res.data)
            setload(true)
         

        })

    }

  
    return (
        <div>
          {load?
        <div>
      <ProduitUneCategorieDesk  
      truncateString={truncateString} produit={produit}  />
      <ProduitUneCategorieMobile  
      truncateString={truncateString} produit={produit} />
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

export default ProduitSingleCategory
