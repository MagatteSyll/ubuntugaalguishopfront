import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import {Link} from 'react-router-dom'

function CommandeEnCoursMobile({commande}) {
  return (
    <div className='mobile'>
     <IonGrid>
    <IonRow>
   {commande.map(ach=>
    <IonCol size='12'>
    {ach.produitcommande.product===null?
    <div>
    <IonCard className='cartcommande'>
    <IonRow>
     <IonCol size='6'>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.imageproduct.produit.slug}/${ach.produitcommande.imageproduct.produit.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.imageproduct.produit.nom}</strong></p></Link>
     <p className='centerbtn'>
     taille <strong> 
  {ach.produitcommande.imageproduct.size}
   </strong> 
     </p> 
 <p className='centerbtn'>
     Couleur <strong> 
  {ach.produitcommande.imageproduct.color}
   </strong> 
     </p> 
    <p className='centerbtn'>
     Quantite <strong> 
  {ach.produitcommande.quantity}
   </strong> 
     </p>
    <p className='centerbtn'>
     prix <strong> 
  {ach.produitcommande.imageproduct.produit.prix} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
 <p className='centerbtn'>
    Sous total  <strong> 
  {ach.produitcommande.subtotal} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p>  
     <p className='centerbtn'>
     Livraison <strong> 
  {ach.livraison} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
     <p className='centerbtn'>
     Total <strong> 
  {ach.total} {ach.produitcommande.imageproduct.produit.devise.devise}
   </strong> 
     </p> 
     </IonCol>
    <IonCol size='6'>
    <img src={`https://gaalguishopbackend.herokuapp.com${ach.produitcommande.imageproduct.image}`} alt="" 
    className="imgcom" />
    <p>Etat de la commande <strong>{ach.statut_commande}</strong></p>
    </IonCol>
   
     </IonRow>
     </IonCard>
    </div>:
    <div>
    <IonCard className='cartcommande'>
    <IonRow>
     <IonCol size='6'>
    <Link className='linkpanier'
  to={`/detail/${ach.produitcommande.product.slug}/${ach.produitcommande.product.nom}`}>
    <p className='centerbtn'> <strong >{ach.produitcommande.product.nom}</strong></p></Link>
     <p className='centerbtn'>
     Taille <strong> 
  {ach.produitcommande.product.taille} 
   </strong> 
     </p> 
     <p className='centerbtn'>
     Couleur <strong> 
     {ach.produitcommande.product.couleur} 
   </strong> 
     </p>
 <p className='centerbtn'>
     Quantite
     <strong>  {ach.produitcommande.quantity} 
   </strong> 
     </p>
     <p className='centerbtn'>
     Prix <strong> 
  {ach.produitcommande.product.prix} {ach.produitcommande.product.devise.devise}
   </strong> 
     </p>
     <p className='centerbtn'>
     Sous total <strong> 
  {ach.produitcommande.subtotal} {ach.produitcommande.product.devise.devise} 
   </strong> 
     </p>
 <p className='centerbtn'>
     Livraison <strong> 
  {ach.livraison} {ach.produitcommande.product.devise.devise} 
   </strong> 
     </p>
 <p className='centerbtn'>
     Total <strong> 
  {ach.total} {ach.produitcommande.product.devise.devise}  
   </strong> 
     </p>

  </IonCol> 
    <IonCol size='6'>
   <img src={`https://gaalguishopbackend.herokuapp.com${ach.produitcommande.product.thumbnail}`} alt="" 
    className="imgcom"/>
 <p>Etat de la commande <strong>{ach.statut_commande}</strong></p>
   </IonCol >
  
    </IonRow>
    </IonCard>

    </div>}
    </IonCol>
    )}
  
   </IonRow>
        </IonGrid>
    </div>
  )
}

export default CommandeEnCoursMobile

