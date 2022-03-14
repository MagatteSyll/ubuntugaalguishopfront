import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Form ,} from  'react-bootstrap'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Image from 'react-bootstrap/Image'
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fragment } from 'react';
import { IonGrid,IonCol,IonRow,IonButton, IonSegment,IonLoading,
 IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { Rating,} from '@mui/material';
import { ellipsisHorizontalOutline } from 'ionicons/icons'

 
 
function BoutiqueVendeurDesk({produit,produitvendu, botique, modal,  seg,
  prodactif, prodvendu,  handlefile, user,
  handleclick, handledes, handledescription, handleclose, handleopen, handleproduitactif,
  handlevendu, handlereactif, handledelete,setmodal,iref,truncateString,handledetail,aler,
   pid,handlepid,setaler,handlemodif,handlepopen,setpop,pop,popvendu,setpopvendu,handlepopenvendu,handleajout}) {
 
  return( 
    <div className='desk boutiquevendeur' >
      {botique.active? 
      <IonButton   onClick={handleajout} className="ion-float-end">
          Ajouter un produit
       </IonButton>:null}
     <IonGrid>
        <IonRow>
        <IonCol size='5'>     
        <button onClick={handleclick} className='m-0 btndrop'> <Image  src={`http://127.0.0.1:8001${botique.logo}`} roundedCircle
         className='picprofil'/>
        <CameraAltIcon/></button><br/><br/>
        <input type='file' accept='image/*' ref={iref} className='filimg' onChange={handlefile} />
        </IonCol>
        <IonCol size='7'> 
          <IonRow>
            <IonCol size='3'>
            <p><Rating name="half-rating" 
            value={botique.note_vendeur} 
            readOnly
             precision={0.1} />
             ({botique.note_vendeur})
           </p>
            <p>{botique.nbrefollower} abonné(s)</p>
            </IonCol>
            <IonCol size='9'>
            <p>{botique.description}<button className='btndrop' onClick={handleopen}>
          <CreateIcon/></button></p>
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
     <IonLabel>Tous les produits</IonLabel>
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
      <strong> {pi.prix} {pi.devise.devise} </strong> <br/>
      <span className='redstyle'>{pi.vendu_qte} vendu(s)</span>  
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
     <button className=' btndrop' onClick={()=>handlepopen(pi.id,pi.nom,pi.slug)}> 
     <IonIcon icon={ellipsisHorizontalOutline} className='zoomicon'/></button>
    <img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="imgboutiquedesk"  />
     <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
    <p className='centerbtn'> <strong >{pi.nom}</strong> </p>
      </Link>
      {pi.active?
       <p className='centerbtn'> 
    <strong> {pi.prix} {pi.devise.devise}</strong>  
    </p>:<span className='redstyle'>Inactif!</span>}   
    </IonCol>)
      :<h1 className='centerbtn'>Aucun produit actif </h1>}
  </IonRow>
</IonGrid>
</div>:null
}
  
  </div>
  </div>
 </Fragment> 

   </div>       ) 
}

export default BoutiqueVendeurDesk;
