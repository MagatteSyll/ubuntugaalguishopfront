import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'

function CommandeEnCoursMobile({commande}) {
  return (
    <div className='mobile'>
<IonGrid>
    <IonRow>
   {commande.map(p=> 
      <IonCol key={p.id}  size='6'>  
     <IonCard className='cartcategorymobile'>
         <IonRow>
             <IonCol size='12'>
             <img alt='' src={`http://127.0.0.1:8001${p.produitcommande.product.thumbnail}`} className='imgajout' />
             </IonCol>
            <IonCol size='12'>
            <p> {p.produitcommande.product.nom}</p>
             <p> <IonText className='redstyle'> {p.produitcommande.product.prix}</IonText> CFA</p>
         <p>Status de la commande <strong className='redstyle' >{p.statut_commande}</strong></p>
            </IonCol>
         </IonRow>

       </IonCard>
       </IonCol>  )}
       </IonRow>
        </IonGrid>
    </div>
  )
}

export default CommandeEnCoursMobile

