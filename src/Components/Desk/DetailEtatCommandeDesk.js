import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import React from 'react'

function DetailEtatCommandeDesk({notification}) {
  return (
    <div className='desk'>
    <h3>{notification.message}</h3>
    <IonGrid>
        <IonRow>
        {notification.commande.produitcommande.product===null?
        <IonCol size='6'>
        <h4>Produit commandé</h4>
          <IonCard className='cartcommande'> 
                 <IonRow>
                 <IonCol size='6'>
                     <p>{notification.commande.produitcommande.imageproduct.produit.nom}</p> 
                     <p> Couleur <strong>{notification.commande.produitcommande.imageproduct.color}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.imageproduct.size}</strong></p>
                     <p> Quantite <strong>{notification.commande.produitcommande.quantity}</strong></p> 
                     <p>prix unitaire <strong> {notification.commande.produitcommande.imageproduct.produit.prix} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong> </p>
                     <p> Sous total <strong>{notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.imageproduct.produit.devise.devise} 
                     </strong></p>
                     <p>livraison<strong> {notification.commande.livraison} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong> </p>
                     <p>Montant de la commande <strong>
                          {notification.commande.total} {notification.commande.produitcommande.imageproduct.produit.devise.devise}
                     </strong> </p>
                     </IonCol>
                     <IonCol size='6'>
                     <img src={`http://127.0.0.1:8001${notification.commande.produitcommande.imageproduct.image}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard>
             </IonCol>
           :<IonCol size='6'>
             <h4>Produit commandé</h4>
             <IonCard className='cartcommande'> 
                 <IonRow>
                    <IonCol size='6'>
                    <p>{notification.commande.produitcommande.product.nom}</p>
                     <p> Couleur <strong>{notification.commande.produitcommande.product.couleur}</strong></p>
                    <p> Taille <strong>{notification.commande.produitcommande.product.taille}</strong></p>
                     <p> Quantite <strong>{notification.commande.produitcommande.quantity}</strong></p> 
                     <p>prix unitaire <strong> {notification.commande.produitcommande.product.prix} {notification.commande.produitcommande.product.devise.devise}
                     </strong> </p>
                     <p> Sous total <strong>{notification.commande.produitcommande.subtotal} {notification.commande.produitcommande.product.devise.devise} 
                     </strong></p>
                     <p>livraison <strong> 
                     {notification.commande.livraison} {notification.commande.produitcommande.product.devise.devise}
                     </strong></p>
                     <p>Montant de la commande <strong>
                {notification.commande.total} {notification.commande.produitcommande.product.devise.devise}
                     </strong> </p> 
                     </IonCol>
                     <IonCol size='6'>
                     <img src={`http://127.0.0.1:8001${notification.commande.produitcommande.product.thumbnail}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard>
             </IonCol>}
             <IonCol size='6' >
             <h4 className='centerbtn'>Detail de la commande</h4>
             <IonCard className='centerbtn'>
             <p> Numero de la commande <strong> {notification.commande.id}</strong> </p> 
             <p> Client <strong> {notification.commande.nom_client}</strong> </p> 
             <p> Telephone <strong> {notification.commande.phone}</strong> </p> 
             <p>Adress de livraison 
            <strong> {notification.commande.adress.adress} ({notification.commande.adress.region.region})
            </strong> </p>   
             </IonCard>
             </IonCol> 
        </IonRow>
    </IonGrid>
    </div>
  )
}

export default DetailEtatCommandeDesk

