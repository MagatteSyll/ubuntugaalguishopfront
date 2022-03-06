import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'

function DesactivationBoutiqueDesk({notification}) {
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

export default DesactivationBoutiqueDesk
