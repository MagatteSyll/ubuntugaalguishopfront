import React,{useState,Fragment} from 'react'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {Card,} from  'react-bootstrap'
import Image from 'react-bootstrap/Image'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { IonGrid,IonCol,IonRow, IonText, IonSegment, 
  IonSegmentButton, IonLabel } from '@ionic/react';
import FollowerBoutiqueVu from './SousComponent/FollowerBoutiqueVu';
import ImageProduitBoutiqueVu from './SousComponent/ImageProduitBoutiqueVu';
import ImageProduitVenduBoutiue from './SousComponent/ImageProduitVenduBoutiue';
import { Rating,} from '@mui/material';

 
function BoutiqueVueDesk({profil,seg,handleproduitactif,handlevendu,
  prodactif,produit,prodvendu,produitvendu,islog, handlecart,handleconnexion,handledetail,
  user,getboutique,isStaf,handlavertir,handlactivation}) {
  return( 
    <div className='desk boutiquevendeur'> 
      <IonGrid>
        <IonRow>
          <IonCol size='6'>
          <Image  src={`http://127.0.0.1:8001${profil.logo}`} roundedCircle  className='picprofil'/>
          </IonCol>
          <IonCol size='6'> 
            <IonRow>
              <IonCol size='6'>
              {islog?
                <span>
                {user.isbureaucrate?
                  <span>
                  {profil.avertissement} avertissement(s)<br/>
                  {profil.active?
                  <button className="w3-button  w3-red" onClick={handlavertir} >
                  Avertir le vendeur</button>:
                  <button className="w3-button  w3-red" onClick={handlactivation}>Reactiver la boutique</button>
                   }
                  </span>:
                <>
                <FollowerBoutiqueVu user_id={user.id} boutique_id={profil.id} getboutique={getboutique}/>
               </> }</span>:null}
            <br/><br/>
            <p>
           <strong> {profil.user.prenom} {profil.user.nom}</strong>
           </p> 
            <p><Rating name="half-rating" 
            value={profil.note_vendeur} 
            readOnly
            precision={0.1} />
               ({profil.note_vendeur})
           </p>
            <p> {profil.nbrefollower} abonné(s)</p> 
              </IonCol>
              <IonCol size='6'>
             
          <p>{profil.description}</p>
         
              </IonCol>
            </IonRow>
          
          </IonCol>
        </IonRow>
      </IonGrid>
      <Fragment>
   
  <div className='container'>
 <div className=" row -3 m-3">
  <IonSegment  className='segboutiquevendeur'value= {seg}>
    <IonSegmentButton className='segbtnboutique' onClick={handleproduitactif} value='prodactif'>
     <IonLabel>Produits actifs</IonLabel>
      </IonSegmentButton>
    <IonSegmentButton className='segbtnboutique' onClick={handlevendu} value='prodvendu'>
    <IonLabel>Produits vendus</IonLabel>  
    </IonSegmentButton>
  </IonSegment>
 </div>
  <div className='margseg'>
  {prodvendu?
   <IonGrid>
  <IonRow>
  { produitvendu.length>0 ? produitvendu.map(pi=>
    <IonCol size='3' key={pi.id}>
     <div className='singleproduit'>
      <img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="imgboutiquedesk"  />
      <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <p className='centerbtn'> <strong >{pi.nom}</strong></p></Link>
       <p className='centerbtn'>
      <strong> {pi.prix} {pi.devise.devise} </strong>   
       </p> 
       </div>
    </IonCol>
      ):<h1 className='centerbtn'>Aucun produit vendu </h1>}
  </IonRow>
</IonGrid> :null}
  {prodactif?
  <div className='margseg'>
  <IonGrid>
  <IonRow>
  { produit.length>0 ? produit.map(pi=>
    <IonCol size='3' key={pi.id}>
    <img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="imgboutiquedesk"  />
     <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <p className='centerbtn'> <strong >{pi.nom}</strong> </p>
      </Link>
       <p className='centerbtn'> 
    <strong> {pi.prix} {pi.devise.devise}</strong>  
    </p>     
    </IonCol>)
      :<h1 className='centerbtn'>Aucun produit actif </h1>}
  </IonRow>
</IonGrid>
</div>:null
}
  
  </div>
  </div>
 </Fragment>  




</div>
   
      
)
} 

function ProduitActif({produit,islog,handlecart,handleconnexion,handledetail}){

return(
<div className='margseg'>
<IonGrid>
<IonRow>
{ produit.length>0 ? produit.map(pi=>
  <IonCol size='3' key={pi.id}>
     <ImageProduitBoutiqueVu produit={pi} islog={islog} handlecart={handlecart}/> 
    </IonCol>):<h1 className='centerbtn'>Aucun produit actif </h1>}
</IonRow>
</IonGrid>
</div>
)
}

function ProduitVendu({produitvendu,}){
return(
<div>
<IonGrid>
<IonRow>
{ produitvendu.length>0 ? produitvendu.map(pi=>
  <IonCol size='3'>
   <ImageProduitVenduBoutiue produit={pi}/>

    </IonCol>):<h1 className='centerbtn'>Aucun produit vendu </h1>}
</IonRow>
</IonGrid>
</div>
)
}



export default BoutiqueVueDesk;
