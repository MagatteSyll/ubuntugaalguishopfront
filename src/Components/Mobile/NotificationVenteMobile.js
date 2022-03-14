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
             <p> produit <strong> 
             {notification.commande.produitcommande.imageproduct.produit.nom}</strong></p>
                 <p> Taille <strong>
                     {notification.commande.produitcommande.imageproduct.size} </strong></p>
                      <p> Couleur <strong>
                     {notification.commande.produitcommande.imageproduct.color} </strong></p>
                      <p> Quantité commandée  <strong>
                     {notification.commande.produitcommande.quantity} </strong></p>
                     <p>Prix unitaire <strong>
                      {notification.commande.produitcommande.imageproduct.produit.prix}
                     </strong> {notification.commande.produitcommande.imageproduct.produit.devise.devise} </p>
                     <p>Quantité commandée <strong>
                    {notification.commande.produitcommande.quantity} 
                     </strong> </p>
                     <p>Montant de la commande <strong>
                          {notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong> </p>
                     <p>Commission de la plateforme <strong>{notification.commande.commission} {notification.commande.produitcommande.imageproduct.produit.devise.devise}</strong> 
                     </p>
                     <p>Quantité restante de ce produit <IonText className='redstyle'>
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
             <p> Taille <strong>{notification.commande.produitcommande.product.taille}</strong></p>
             <p>Couleur <strong> {notification.commande.produitcommande.product.couleur}</strong></p>
             <p>Quantité commandée <strong>
            {notification.commande.produitcommande.quantity} 
            </strong> </p>
              <p>Prix unitaire <strong> 
                {notification.commande.produitcommande.product.prix} {notification.commande.produitcommande.product.devise.devise}
                 </strong> </p>
                     <p>Montant de la commande <strong>
                          {notification.commande.produitcommande.subtotal} 
                     </strong> {notification.commande.produitcommande.product.devise.devise} </p>
                     <p> Commission de la plateforme <strong>
                     {notification.commande.commission} {notification.commande.produitcommande.product.devise.devise}
                     </strong> </p>
                     <p>Quantité restante de ce produit <IonText className='redstyle'>
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