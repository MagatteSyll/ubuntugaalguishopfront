import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'

function AnnulationAchatDesk({notification}) {
  return (
    <div className='desk'>
        <h3>{notification.message}</h3>
    <IonGrid>
        <IonRow>
            <IonCol size='8'>
             <h4>Commande annulée</h4>
             <IonCard>
                 <IonRow>
                     <IonCol size='6'>
                     <p>produit <IonText className='redstyle'> {notification.commande.produitcommande.product.nom}
                     </IonText></p>
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
        </IonRow>
    </IonGrid>
    </div>
  )
}

export default AnnulationAchatDesk
