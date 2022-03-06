import React from 'react'
import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'

function DetailAvertissmentDesk({notification}) {
  return (
    <div className='desk container'>
    <IonGrid>
        <IonRow>
            <IonCol size='10'>
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

export default DetailAvertissmentDesk