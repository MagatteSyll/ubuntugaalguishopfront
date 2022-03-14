import React from 'react'
import Image from 'react-bootstrap/Image'
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { IonGrid,IonCol,IonRow,  IonSegment, 
  IonSegmentButton, IonLabel } from '@ionic/react';
import FoolowBoutiquevu from './SousComponent/FoolowBoutiquevu';
import ImageProduitButique from './SousComponent/ImageProduitButique';
import ImageProduitVenduBoutiqueVu from './SousComponent/ImageProduitVenduBoutiqueVu';
import { Rating,} from '@mui/material'; 
import {Link} from 'react-router-dom'


function BoutiqueVueMobile({profil,seg,handleproduitactif,handlevendu,
  prodactif,produit,prodvendu,produitvendu,islog,handlecart,handleconnexion,handledetail,
  user,getboutique,isStaf,handlavertir,handlactivation}) {
  return(
    <div className='mobile'>
    <IonGrid> 
      <IonRow>
        <IonCol size='4'>
        <Image  src={`http://127.0.0.1:8001${profil.logo}`} roundedCircle  className='picprofilmobile'/>
        </IonCol>
        <IonCol size='8'>
       <IonRow>
       <IonCol size='6'>
       {islog?
          <span>
          {user.isbureaucrate?
            <span>
           {profil.avertissement} avertissement(s)<br/>
           {profil.nbredesactivation} desactivation(s)<br/>
            {profil.active?
           <button className="w3-button  w3-red" onClick={handlavertir} >
            Avertir le vendeur</button>:
            <button className="w3-button  w3-red" onClick={handlactivation}>Reactiver la boutique</button>
             }
            </span>:
          <>
        <FoolowBoutiquevu  user_id={user.id} boutique_id={profil.id} getboutique={getboutique}/>
               </>}</span>:null}
            <br/><br/>
            <p>
      <strong> {profil.user.prenom} {profil.user.nom}</strong>
      </p>
            <p> <p><Rating name="half-rating" 
            value={profil.note_vendeur} 
            readOnly
            precision={0.1} />
             ({profil.note_vendeur})
           </p></p>
             <p> {profil.nbrefollower} abonné(s)</p> 
         </IonCol>
         <IonCol size='6'> 
        
      <p>{profil.description}</p>
         </IonCol>
       </IonRow>
        </IonCol>
       <IonCol size='12'>
        <IonSegment value= {seg} className='segboutiquevendeur'>
       <IonSegmentButton className='segbtnboutique' onClick={handleproduitactif} value='prodactif'>
        <IonLabel>Produits actifs</IonLabel>
           </IonSegmentButton>
        <IonSegmentButton className='segbtnboutique' onClick={handlevendu} value='prodvendu'>
        <IonLabel>Produits vendus</IonLabel>  
        </IonSegmentButton>
            </IonSegment>
            </IonCol>
      </IonRow>
      </IonGrid>
   <div>
  {prodactif?
  <div className='margseg'>
   <IonGrid>
   <IonRow>
   { produit.length>0 ? produit.map(pi=>
    <IonCol size='4' key={pi.id}> 
       <div className='singleproduit' > 
      <img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
     <p >  <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <strong >{pi.nom}</strong>
      </Link> </p>
      {pi.active?
     <strong> {pi.prix} {pi.devise.devise} </strong> :
     <span className='redstyle'>Inactif!</span>}
     </div>
      </IonCol>
      ):<h1 className='centerbtn'>Aucun produit actif </h1>}
    </IonRow>
   </IonGrid> 
    </div>
   :null}
  {prodvendu?
    <div>
    <IonGrid>
    <IonRow>
    {produitvendu.length>0 ? produitvendu.map(pi=>
    <IonCol size='4' key={pi.id}>
      <div className='singleproduit'>
      <img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
      <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <p className='centerbtn'> <strong >{pi.nom}</strong></p></Link>

       <p>
       <strong> {pi.prix} {pi.devise.devise} </strong> <br/>
       <span className='redstyle'>{pi.vendu_qte} vendu(s)</span>         
       </p> 
 
       </div>
      </IonCol>
      ):<h1 className='centerbtn'>Aucun produit actif </h1>}
     </IonRow>
   </IonGrid>
    </div>
  
  :null}
  </div>

</div>

    
)
} 




export default BoutiqueVueMobile;
