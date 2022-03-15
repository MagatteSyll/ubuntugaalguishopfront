import React,{useState} from 'react'
import {Container} from  'react-bootstrap'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { IonRow,IonGrid,IonCol, IonText,IonIcon,IonCard} from '@ionic/react'
import 'react-toastify/dist/ReactToastify.css';


function ProduitUneCategorieMobile({produit}) {
 
 
  return (
    <div className='mobile' >  
   <Container>
   <IonGrid>
    <IonRow>
     { produit.length>0 ? 
    produit.map(pi=>   
  <IonCol size='11'>
    <IonCard className='cartcategorymobile'>
    <IonRow>
    <IonCol size='12' className='container'>
    <img src={`https://gaalguishopbackend.herokuapp.com${pi.thumbnail}`} alt="" className="imgcategorymobile" />
    </IonCol>
    <IonCol size='12'>
     <Link className='linkpanier centerbtn' to={`/detail/${pi.slug}/${pi.nom}`}> 
      <p> 
       <strong>{pi.nom}</strong> </p>
       <p>
      {pi.description}</p>
     </Link>
     <p className='centerbtn'><strong>{pi.prix} {pi.devise.devise}</strong></p>
    </IonCol>
    </IonRow>
    </IonCard>
  </IonCol>):<h1 className='centerbtn redstyle'>Oups aucun produit dans cette categorie</h1>
    }
    </IonRow>
   </IonGrid>
  </Container>
   </div>
   
  );
}
  

export default ProduitUneCategorieMobile;

/*
 
 
  <IonRow>
       <IonCol size='12'>
      
       <IonCol size='12'>
       <Link className='linkpanier' to={`/detail/${pi.slug}/${pi.nom}`}> 
       <p> 
       <strong>{pi.nom}</strong> </p>
       
      </Link>
     <p><strong>{pi.prix} {pi.devise}</strong></p>
       </IonCol>
        </IonRow>
        </IonCard>
        </IonCol>
        </IonRow>
    </IonCol>):<h1 className='centerbtn redstyle'>Oups aucun produit dans cette categorie</h1>}
  </IonRow> </IonGrid>
  */