import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow, IonText } from '@ionic/react'
import { Link } from 'react-router-dom'

function AchatDesk({achat}) {
  return (
    <div className='desk container'>
        
        <IonGrid>
    <IonRow>
   {achat.map(p=> 
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
            <p><Link className='link'
             to={`/boutique/${p.produitcommande.product.boutique.id}/${p.produitcommande.product.vendeur.prenom+""+p.produitcommande.product.vendeur.nom}`}>
                 Voir le vendeur</Link></p>
            </IonCol>  
         </IonRow>

       </IonCard>
       </IonCol>  )}
       </IonRow>
        </IonGrid>
    </div>
  )
}

export default AchatDesk