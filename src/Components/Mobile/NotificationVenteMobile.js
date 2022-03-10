import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import {Link} from 'react-router-dom'

function NotificationVenteMobile({notification}) {
  return (
    <div className='mobile'>
    <h3>{notification.message}</h3>
    <IonGrid>
    <IonRow>
    {notification.commande.produitcommande.product===null?
        <IonCol size='12'>
         <IonCard>
          <IonRow>
          <IonCol size='8'>
        <img src={`http://127.0.0.1:8001${notification.commande.produitcommande.imageproduct.image}`}
       alt='' className='imgvente' />
       </IonCol>
            <IonCol size='10'>
             <h4>Detail de la commande</h4>
             <p> produit <IonText className='redstyle'> 
             {notification.commande.produitcommande.imageproduct.produit.nom}</IonText></p>
                <p>prix <IonText className='redstyle'>
                 {notification.commande.produitcommande.imageproduct.produit.prix}
             </IonText> {notification.commande.produitcommande.imageproduct.produit.devise.devise}</p>
                     <p>Quantité commandée <IonText className='redstyle'>
                          {notification.commande.produitcommande.quantity} 
                     </IonText> </p>
                     <p>Montant de la commande <IonText className='redstyle'>
                          {notification.commande.produitcommande.subtotal} 
                     </IonText> {notification.commande.produitcommande.imageproduct.produit.devise.devise}</p>
                     <p>Commission de la plateforme <IonText className='redstyle'>{notification.commande.commission}</IonText> {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </p>
                     <p>Quantité restante <IonText className='redstyle'>
                          {notification.commande.produitcommande.imageproduct.quantite} 
                     </IonText> </p>
                     <p>Vous pouvez modifier la quantite restante de ce  produit <Link > ici </Link> </p>
            
             </IonCol>
          </IonRow>
           </IonCard>
        </IonCol>
          :<IonCol size='12'>
            <IonCard>
          <IonRow>
          <IonCol size='8'>
         <img src={`http://127.0.0.1:8001${notification.commande.produitcommande.product.thumbnail}`}
        alt='' className='imgvente'/>
        </IonCol>
            <IonCol size='10'>
             <h4>Detail de la commande</h4>
             <p> produit <IonText className='redstyle'> {notification.commande.produitcommande.product.nom}</IonText></p>
                <p>prix <IonText className='redstyle'> {notification.commande.produitcommande.product.prix}
                 </IonText> {notification.commande.produitcommande.product.devise.devise}</p>
                     <p>Quantité commandée <IonText className='redstyle'>
                          {notification.commande.produitcommande.quantity} 
                     </IonText> </p>
                     <p>Montant de la commande <IonText className='redstyle'>
                          {notification.commande.produitcommande.subtotal} 
                     </IonText> {notification.commande.produitcommande.product.devise.devise} </p>
                     <p> Commission de la plateforme
                     <IonText>{notification.commande.commission}
                     </IonText> {notification.commande.produitcommande.product.devise.devise}</p>
                     <p>Quantité restante <IonText className='redstyle'>
                          {notification.commande.produitcommande.product.quantite} 
                     </IonText> </p>
                     <p>Vous pouvez modifier la quantite restante de ce  produit <Link > ici </Link> </p>
            
             </IonCol>
          </IonRow>
           </IonCard>
          </IonCol>}
    </IonRow>
    </IonGrid>
   
    </div>
  )
}

export default NotificationVenteMobile

/*
 <IonGrid>
        <IonRow>
        <IonCol size='12'>
           <IonCard>
          <IonRow>
          <IonCol size='5'>
        <img src={`http://127.0.0.1:8001${notification.commande.produitcommande.product.thumbnail}`}
       alt='' className='imgvente' />
       </IonCol>
            <IonCol size='7'>
             <h4>Detail de la commande</h4>
             <p> produit <IonText className='redstyle'> {notification.commande.produitcommande.product.nom}</IonText></p>
                <p>prix <IonText className='redstyle'> {notification.commande.produitcommande.product.prix}
             </IonText> CFA</p>
                     <p>Quantité commandée <IonText className='redstyle'>
                          {notification.commande.produitcommande.quantity} 
                     </IonText> </p>
                     <p>Montant de la commande <IonText className='redstyle'>
                          {notification.commande.produitcommande.subtotal} 
                     </IonText> CFA</p>
                     <p>Quantité restante <IonText className='redstyle'>
                          {notification.commande.produitcommande.product.quantite} 
                     </IonText> </p>
                     <p>Vous pouvez modifier la quantite restante de ce  produit <Link > ici </Link> </p>
            
             </IonCol>
          </IonRow>
           </IonCard>
        </IonCol>
       
        </IonRow>
    </IonGrid>

    */