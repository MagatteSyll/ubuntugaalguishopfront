import React from 'react'
import {Container} from  'react-bootstrap'
import { Link } from 'react-router-dom';
import { IonRow,IonGrid,IonCol, } from '@ionic/react'






function ProduitUneCategorieDesk({islog,HandleAddCart,truncateString, 
    handlenonlog,user, produit}){ 
   
  return(
    <div className='desk'>
    <Container>
    <IonGrid>
    <IonRow>
  {produit.length>0 ? produit.map(pi=>   
   <IonCol size='4'>
  
          <IonRow>
         <IonCol size='6'>
        <img src={`http://127.0.0.1:8001${pi.thumbnail}`} alt="" className="imgcategory" />
        <p>    
       <Link className='linkpanier' 
         to={`/boutique/${pi.boutique.id}/${pi.vendeur.prenom+""+pi.vendeur.nom}`}>
        voir la boutique du vendeur</Link></p>
       </IonCol>
       <IonCol size='6'>
       <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}> 
       <p> 
       <strong>{pi.nom}</strong> </p>
       <p>
      {pi.description}</p>
    </Link>
    <p> 
       <strong>{pi.prix} {pi.devise.devise}</strong> </p>
       </IonCol>
        </IonRow>
    </IonCol>):<h1 className='centerbtn redstyle'>Oups aucun produit dans cette categorie</h1>}
  </IonRow> </IonGrid>
  </Container>
  </div>
  
    );
}

export default ProduitUneCategorieDesk;
