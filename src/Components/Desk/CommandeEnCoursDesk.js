import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import React from 'react'

function CommandeEnCoursDesk({commande}) {
  return (
    <div className='desk container'>
        
    <IonGrid>
    <IonRow>
   {commande.map(p=> 
      <IonCol key={p.id}  size='3'>  
     <IonCard className='cartcategory'>
         <IonRow>
             <IonCol size='6'>
             <p> {p.produitcommande.product.nom}</p>
             <p> <IonText className='redstyle'> {p.produitcommande.product.prix}</IonText> CFA</p>
            
             </IonCol>
             <IonCol size='6'>
             <img alt='' src={`http://127.0.0.1:8001${p.produitcommande.product.thumbnail}`} className='imgajout' />
             </IonCol>
            <IonCol size='12'>
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

export default CommandeEnCoursDesk