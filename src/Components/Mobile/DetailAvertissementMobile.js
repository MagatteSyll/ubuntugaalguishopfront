import React from 'react'
import { IonCard,IonGrid,IonRow,IonCol } from '@ionic/react'

function DetailAvertissementMobile({notification}) {
  return (
    <div  className='mobile container'>
    <IonGrid>
           <IonRow>
               <IonCol size='12'>
               <IonCard className='centerbtn'>
           {notification.message}
           <p>Signature</p>
            </IonCard>
               </IonCol>
           </IonRow>
       </IonGrid>
   </div>
 
  )
}

export default DetailAvertissementMobile