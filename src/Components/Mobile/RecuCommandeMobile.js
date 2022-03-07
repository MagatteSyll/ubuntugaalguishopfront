import React from 'react'
import {IonGrid,IonCard,IonRow,IonCol,IonItem,IonText,IonIcon} from '@ionic/react'
import {callOutline,locationOutline,checkmarkDoneOutline,arrowUndoOutline,mailOutline} from 'ionicons/icons'
import {Link} from 'react-router-dom'


function RecuCommandeMobile({commande}) {
  return (
    <div className='mobile'>
    <IonGrid>
             <IonRow>
                 <IonCol size='7'>
                 <IonItem>
                 <Link to='/monpanier'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
                  </IonItem>
                 <IonCard>Logo</IonCard>
                 </IonCol>
                 <IonCol size='12' className='coladressmobile' >
                   <IonItem className='centerbtn'>
                      <IonText> <IonIcon icon={locationOutline}/> Dakar, rue on s en fiche</IonText>
                  </IonItem>
                  <IonItem className='centerbtn'> 
                    <IonText> <IonIcon icon={callOutline}/> +(221)772059140</IonText></IonItem>
                     <IonItem className='centerbtn'><IonText> <IonIcon icon={callOutline}/> +(221)772197305</IonText></IonItem>
                     <IonItem> <IonText > <IonIcon icon={mailOutline}/> www.gaalguimoney.com</IonText>
                  </IonItem>
                 </IonCol>
             </IonRow>
         </IonGrid>
        {commande.produitcommande.product===null?
          <div>
           <h2 className='centerbtn'> <IonIcon icon={checkmarkDoneOutline}/>Commande effectuée</h2>
           <IonGrid>
             <IonRow>
             <IonCol size='5' className='centerbtn'>
              <p>Date de l achat</p>
              <h4>{new Date(commande.created_at).toLocaleDateString()}</h4>
              </IonCol>
              <IonCol size='5' className='centerbtn'>
              <p>Numero de la commande</p>
              <h4>{commande.id}</h4>
              </IonCol> 
              <IonCol size='5' className='centerbtn' >
              <p>Produit acheté </p>
              <h4>{commande.produitcommande.imageproduct.produit.nom}</h4>
              </IonCol>
              <IonCol size='5' className='centerbtn'>
              <p>Prix unitaire</p>
               <h4>{commande.produitcommande.imageproduct.produit.prix} {commande.produitcommande.imageproduct.produit.devise.devise}  </h4>
               </IonCol> 
               <IonCol size='5' className='centerbtn'>
                <p>Quantité </p>
                 <h4>{commande.produitcommande.quantity} </h4>
                 </IonCol>
                <IonCol size='5' className='centerbtn' >
                 <p>Frais de livraison </p>
                 <h4>{commande.livraison}  {commande.produitcommande.imageproduct.produit.devise.devise}</h4>
                 </IonCol> 
                <IonCol size='5' className='centerbtn' >
                <p>Montant total de la commande </p>
                <h4>{commande.total} 46{commande.produitcommande.imageproduct.produit.devise.devise}</h4>
                 </IonCol> 
                 <IonCol size='5' className='centerbtn'>
                  <p>Nom du client </p>
                  <h4>{commande.nom_client} </h4>
                  </IonCol> 
                  <IonCol size='12' className='centerbtn signature'>
                  <IonItem >
                    Signature
                  </IonItem>
                    </IonCol>  
              </IonRow>
              </IonGrid> 
          </div>:
         <div >
         <h2 className='centerbtn'> <IonIcon icon={checkmarkDoneOutline}/>Commande effectuée</h2>
             <IonGrid>
                 <IonRow>
                     <IonCol size='5' className='centerbtn'>
                     <p>Date de l achat</p>
                     <h4>{new Date(commande.created_at).toLocaleDateString()}</h4>
                     </IonCol>
                     <IonCol size='5' className='centerbtn'>
                     <p>Numero de la commande</p>
                     <h4>{commande.id}</h4>
                     </IonCol>
                     <IonCol size='5' className='centerbtn' >
                     <p>Produit acheté </p>
                     <h4>{commande.produitcommande.product.nom}</h4>
                      </IonCol>
                     <IonCol size='5' className='centerbtn'>
                     <p>Prix unitaire</p>
                     <h4>{commande.produitcommande.product.prix} CFA </h4>
                     </IonCol>  
                     <IonCol size='5' className='centerbtn'>
                     <p>Quantité </p>
                     <h4>{commande.produitcommande.quantity} </h4>
                     </IonCol>
                     <IonCol size='5' className='centerbtn' >
                     <p>Frais de livraison </p>
                     <h4>{commande.livraison} CFA</h4>
                     </IonCol> 
                     <IonCol size='5' className='centerbtn' >
                     <p>Montant total de la commande </p>
                     <h4>{commande.total} CFA</h4>
                     </IonCol> 
                     <IonCol size='5' className='centerbtn'>
                     <p>Nom du client </p>
                     <h4>{commande.nom_client} </h4>
                     </IonCol> 
                     <IonCol size='12' className='centerbtn signature'>
                     <IonItem >
                    Signature
                  </IonItem>
                    </IonCol>   
                 </IonRow>
             </IonGrid>
             </div>}
    </div>
  )
}

export default RecuCommandeMobile


/*

                     
                      
                      
                 </IonRow>
             </IonGrid>
             */