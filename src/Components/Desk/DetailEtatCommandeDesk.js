import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import React from 'react'

function DetailEtatCommandeDesk({notification}) {
  return (
    <div className='desk'>
    <h3>{notification.message}</h3>
    <IonGrid>
        <IonRow>
            <IonCol size='6'>
             <h4>Produit commandé</h4>
             <IonCard>
                 <IonRow>
                     <IonCol size='6'>
                     <p>{notification.commande.produitcommande.product.nom}</p>
                     <p>prix <IonText className='redstyle'> {notification.commande.produitcommande.product.prix}
                     </IonText> CFA</p>
                     <p>livraison<IonText className='redstyle'> {notification.commande.livraison}
                     </IonText> CFA</p>
                     <p>Montant de la commande <IonText className='redstyle'>
                          {notification.commande.total} 
                     </IonText> CFA</p>
                    
                     </IonCol>
                     <IonCol size='6'>
                     <img src={`http://127.0.0.1:8001${notification.commande.produitcommande.product.thumbnail}`}
                      alt='' className='imgajout' />
                     </IonCol>
                 </IonRow>
             </IonCard>
             </IonCol>
             <IonCol size='6' >
             <h4 className='centerbtn'>Detail de la commande</h4>
             <IonCard className='centerbtn'>
             <p> Numero de la commande <IonText className='redstyle'> {notification.commande.id}</IonText> </p> 
             <p> Client <IonText className='redstyle'> {notification.commande.nom_client}</IonText> </p> 
             <p> Telephone <IonText className='redstyle'> {notification.commande.phone}</IonText> </p> 
             <p>Adress de livraison 
            <IonText className='redstyle'> {notification.commande.adress.adress}
            </IonText> ({notification.commande.adress.region.region})</p>   
             </IonCard>
             </IonCol> 
        </IonRow>
    </IonGrid>
    </div>
  )
}

export default DetailEtatCommandeDesk

