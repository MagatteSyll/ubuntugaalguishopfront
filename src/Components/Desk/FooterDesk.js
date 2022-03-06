import { IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import { Container } from 'react-bootstrap'
import '../style.css'

function FooterDesk() {
    return (
        <div className='content'> 
        <div className='desk'>
        <div className='footerdesk'>
        <Container>
           <IonGrid>
               <IonRow>
                   <IonCol size='4'>
                    <p> l equipe GaalguiShop</p>
                    <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                   </IonCol>
                   <IonCol size='4'>
                    <p>Service</p>
                    <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                  </IonCol>
                  <IonCol size='4'>
                  <p>Droits</p>
                    <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='4'>
                     <p>Nous Retrouver sur</p>
                     <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='4'>
                 <p>Faire partie de la famille GaalguiShop</p>
                 <ul>
                   <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='4'>
                 <p>Telechargez GaalguiShop</p>
                 <ul>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                        <li>
                       l equipe GaalguiShop
                        </li>
                    </ul>
                 </IonCol>
                 <IonCol size='12'>
                 <p className='centerbtn'>GaalguiShop &reg; {new Date().getFullYear()}</p>
                 </IonCol>
               </IonRow>
           </IonGrid>
           </Container>
           </div>
           </div>
        </div>
    )
}

export default FooterDesk
