import React from 'react';
import { IonGrid,IonCol,IonRow, IonSegment, 
IonSegmentButton, IonLabel,IonIcon} from '@ionic/react';
import {Form } from  'react-bootstrap'
import {pencilOutline} from 'ionicons/icons'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Image from 'react-bootstrap/Image'
import { Rating,} from '@mui/material';
import { ellipsisHorizontalOutline } from 'ionicons/icons'
import {Link} from 'react-router-dom'


 
function BoutiqueVendeurMobile({produit,produitvendu, botique, modal,  seg,
  prodactif, prodvendu,  handlefile, user,
  handleclick, handledes, handledescription, handleclose, handleopen, handleproduitactif,
  handlevendu, handlereactif, handledelete,setmodal,iref,truncateString,handledetail,aler,
   pid,handlepid,setaler,handlemodif,handlepopen,setpop,pop,popvendu,setpopvendu,handlepopenvendu,handleajout}) {
    
  return (
  <div className='mobile'>
   <IonGrid>
       <IonRow> 
        <IonCol size='4' >
        <button onClick={handleclick} className='btndrop m-0' > 
        <Image  src={`https://gaalguishopbackend.herokuapp.com${botique.logo}`} roundedCircle className='imgprofile'/>
        <CameraAltIcon/></button><br/><br/>
        <input type='file' accept='image/*' ref={iref} className='filimg' onChange={handlefile} />
        </IonCol>
        <IonCol size='8'>
        <p><Rating name="half-rating" 
            value={botique.note_vendeur} 
            readOnly
           precision={0.1} />
             ({botique.note_vendeur})
           </p>
        <p>{botique.nbrefollower} abonné(s)</p>  
        <p>{botique.description}<button className='btndrop' onClick={handleopen}>
          <IonIcon icon={pencilOutline}/></button></p>
         {botique.active?
         <p className='centerbtn' >
          <button   onClick={handleajout} className="w3-btn w3-round-xxlarge w3-blue ">
          Ajouter un produit
          </button>
         </p>:null}
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
      <button className=' btndrop ' onClick={()=>handlepopen(pi.id,pi.nom,pi.slug)}> 
        <IonIcon icon={ellipsisHorizontalOutline} className='zoomicon'/></button>
      <img src={`https://gaalguishopbackend.herokuapp.com${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
     <p >  <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <strong >{pi.nom}</strong>
      </Link> </p>
      {pi.active?
     <strong> {pi.prix} {pi.devise.devise} </strong> 
     :<span className='redstyle'>Inactif!</span>}
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
      <img src={`https://gaalguishopbackend.herokuapp.com${pi.thumbnail}`} alt="" className="imgboutiquemobile"  />
      <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}>
       <p className='centerbtn'> <strong >{pi.nom}</strong></p></Link>
       <p>
       <strong> {pi.prix} {pi.devise.devise} </strong><br/>  
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
  );
}

  

export default BoutiqueVendeurMobile;
