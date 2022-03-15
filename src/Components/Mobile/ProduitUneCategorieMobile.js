import React,{useState} from 'react'
import {Container} from  'react-bootstrap'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { IonRow,IonGrid,IonCol, IonText,IonIcon,IonCard} from '@ionic/react'
import 'react-toastify/dist/ReactToastify.css';


function ProduitUneCategorieMobile({islog,HandleAddCart,truncateString, 
    handlenonlog, user, produit,handledetail}) {
 
 
  return (
    <div className='mobile' >  
   <Container>
    <IonGrid>
    <IonRow>
  { produit.length>0 ? produit.map(pi=>   
  <IonCol size='11'>
  <IonRow>
       <IonCol size='12'>
       <IonCard className='cartcategorymobile'>
          <IonRow>
         <IonCol size='12' className='container'>
        <img src={`https://gaalguishopbackend.herokuapp.com${pi.thumbnail}`} alt="" className="imgcategorymobile" />
       </IonCol>
       <IonCol size='12'>
       <Link className='linkpanier' to={`/detail/${produit.slug}/${produit.nom}`}> 
       <p> 
       <strong>{produit.nom}</strong> </p>
       <p>
      {produit.description}</p>
      </Link>
     <p><strong>{produit.prix} {produit.devise}</strong></p>
       </IonCol>
        </IonRow>
        </IonCard>
        </IonCol>
        </IonRow>
    </IonCol>):<h1 className='centerbtn redstyle'>Oups aucun produit dans cette categorie</h1>}
  </IonRow> </IonGrid>
  </Container>
   </div>
   
  );
}
  

export default ProduitUneCategorieMobile;
