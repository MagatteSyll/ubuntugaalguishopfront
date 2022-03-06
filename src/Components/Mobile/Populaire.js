import React,{useState,useEffect, Fragment} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'
import {Image,Card} from 'react-bootstrap'
import {IonLoading,IonCard, IonLabel, IonGrid, IonRow, IonCol} from '@ionic/react'
import {Link} from 'react-router-dom'

function Populaire() {
    const [category,setcategory] =useState([])
    const [showLoading, setShowLoading] = useState(true)
    const  [load, setload] = useState(false)

    useEffect(()=>{
      axios
      .get('http://127.0.0.1:8001/api/produit/category/')
      .then(res=>{
         //console.log(res.data)
         setcategory(res.data)
         setload(true)
      })
    },[])
  return (
    <div>
      <div className='populaire'>
    <h3>Populaire</h3>
    {load?
     <IonCard
      >
    <IonGrid>
        <IonRow>
        {category.map(cat=>
            <IonCol size='4'>
             <img  src={cat.image} alt="" 
          key={cat.id} className='imgvendeur' /> 
          <p style={{marginLeft:'5px'}}>{cat.category} </p>
            </IonCol> )}
        </IonRow>
         </IonGrid>    
        </IonCard>:
      <IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
      />} 
    </div>
    </div>
  
  );
}

export default Populaire;
