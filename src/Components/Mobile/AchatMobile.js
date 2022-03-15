import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import { Link } from 'react-router-dom'

function AchatMobile({achat}) {
  return (
    <div className='mobile container'>
  <IonGrid>
   <IonRow>
   {achat.map(ach=>
    <IonCol size='6'>
    {ach.produitcommande.product===null?
    <div>
    <img src={`https://gaalguishopbackend.herokuapp.com${ach.produitcommande.imageproduct.image}`} alt="" 
    className="imgboutiquemobile"/>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.imageproduct.produit.slug}/${ach.produitcommande.imageproduct.produit.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.imageproduct.produit.nom}</strong></p></Link>
     <p className='centerbtn'>
     <strong> 
  {ach.produitcommande.imageproduct.produit.prix} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
    </div>:
    <div>
   <img src={`https://gaalguishopbackend.herokuapp.com${ach.produitcommande.product.thumbnail}`} alt="" 
    className="imgboutiquemobile"/>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.product.slug}/${ach.produitcommande.product.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.product.nom}</strong></p></Link>
     <p className='centerbtn'>
     <strong> 
  {ach.produitcommande.product.prix} {ach.produitcommande.product.devise.devise}
   </strong> 
     </p> 

    </div>}
    </IonCol>
    )}
   </IonRow>
  </IonGrid>
 
  </div>
  )
}

export default AchatMobile