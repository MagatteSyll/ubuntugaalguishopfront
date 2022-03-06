import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from  'react-bootstrap'
import {IonCard, IonGrid, IonCol,IonRow,IonText} from '@ionic/react'
import { Link } from 'react-router-dom';

function PanierMobile({cartproduit, handleplus, handleminus,handleremove,truncateString
  ,cart,handlecommande,handleplunique}) {
  return( 
  <div className='mobile '>
     {cartproduit.length>0?
    <div>
    <IonGrid>
    <IonRow>
    {cartproduit.map(cart=>
      <IonCol size='12' key={cart.id}>
    {cart.product===null?
     <IonCard className='cartpanierdesk'>
      <IonRow>
      <IonCol size='4'>
     <Link className='linkpanier' 
     to={`detail/${cart.imageproduct.produit.slug}/${cart.imageproduct.produit.nom}`}>
      <p><strong>{cart.imageproduct.produit.nom}</strong></p>
      <p>{truncateString(cart.imageproduct.produit.description,50)}</p></Link>
      </IonCol>
       <IonCol size='4'>
      <img src={`http://127.0.0.1:8001${cart.imageproduct.image}`} alt='' className='imgpaniermobile' />
      </IonCol>
      <IonCol size='4'>
      {cart.imageproduct.active?
       <p>
       <Button  variant="dark" edge='start'
        onClick={()=>handlecommande(cart.id ,cart.imageproduct.produit.nom,cart.imageproduct.produit.slug)}>
        Commander</Button><br/>
       <IonText className='redstyle'>{cart.imageproduct.quantite} disponible(s)</IonText></p>:
       <IonText className='redstyle'>Produit inactif!</IonText>}
      </IonCol>
      <IonCol size='12' className='centerbtn'>
       <p> couleur <strong>{cart.imageproduct.color}</strong></p>
        <p> taille <strong>{cart.imageproduct.size}</strong></p>
       <p>quantite <strong>{cart.quantity}</strong></p>
       <p>prix unitaire <strong>{cart.imageproduct.produit.prix}  {cart.imageproduct.produit.devise.devise} </strong></p>
      <p>sous total <IonText className='redstyle'> {cart.subtotal} {cart.imageproduct.produit.devise.devise} 
       </IonText> </p>
      <p className='mt-3'><Button variant="outline-warning" 
      onClick={()=>handleplus(cart.imageproduct.produit.slug,cart.imageproduct.id)}><AddCircleIcon/></Button>
      <Button variant="outline-info" onClick={()=>handleminus(cart.id)} ><RemoveIcon/></Button>
      <Button  variant="outline-danger" edge='end' onClick={()=>handleremove(cart.id)} ><DeleteIcon/></Button>
      </p>
      </IonCol>
     </IonRow>
     </IonCard>:
     <IonCard>
     <IonRow>
   <IonCol size='4'>
    <Link className='linkpanier' 
     to={`detail/${cart.product.slug}/${cart.product.nom}`}>
      <p><strong>{cart.product.nom}</strong></p>
      <p>{truncateString(cart.product.description,50)}</p></Link>
   </IonCol>
    <IonCol size='4'>
    <img src={`http://127.0.0.1:8001${cart.product.thumbnail}`} alt='' className='imgpaniermobile' />
    </IonCol>
    <IonCol size='4'>
     {cart.product.active?
       <p>
       <Button  variant="dark" edge='start'
       onClick={()=>handlecommande(cart.id ,cart.product.nom,cart.product.slug)}>Commander</Button><br/>
       <IonText className='redstyle'>{cart.product.qte} disponible(s)</IonText></p>:
       <IonText className='redstyle'>Produit inactif!</IonText>}
      </IonCol>
      <IonCol size='12' className='centerbtn'>
       <p> couleur <strong>{cart.product.couleur}</strong></p>
        <p> taille <strong>{cart.product.taille}</strong></p>
       <p>quantite <strong>{cart.quantity}</strong></p>
       <p>prix unitaire <strong>{cart.product.prix}  {cart.product.devise.devise} </strong></p>
      <p>sous total <IonText className='redstyle'> {cart.subtotal} {cart.product.devise.devise} 
      </IonText> </p>
      <p className='mt-3'><Button variant="outline-warning" 
      onClick={()=>handleplunique(cart.product.slug)}><AddCircleIcon/></Button>
      <Button variant="outline-info" onClick={()=>handleminus(cart.id)} ><RemoveIcon/></Button>
      <Button  variant="outline-danger" edge='end' onClick={()=>handleremove(cart.id)} ><DeleteIcon/></Button>
      </p>
      </IonCol>
      </IonRow>
     </IonCard>}
      </IonCol>)}
    </IonRow>
    </IonGrid>
    </div>
      :<h1>Oups votre panier est vide <Link to='/' className='linkpanier'> Commencez vos Shoppings</Link></h1>}
   
  </div>
  );
}

export default PanierMobile;

/*
 <IonCol size='6'>
             <p>{pi.product.nom}</p>
             <p>quantite:{pi.quantity}</p>
             <p>prix unitaire: <IonText className='redstyle'>{pi.product.prix}</IonText> CFA</p>
             <p>sous total:<IonText className='redstyle'> {pi.subtotal}</IonText>  CFA CFA</p>
             <p className='mt-3'><Button variant="outline-warning" onClick={()=>handleplus(pi.product.id)}><AddCircleIcon/></Button>
            <Button variant="outline-info" onClick={()=>handleminus(pi.id)}><RemoveIcon/></Button>
            <Button  variant="outline-danger" edge='end' onClick={()=>handleremove(pi.id)}><DeleteIcon/></Button>
            </p>
             </IonCol>
             <IonCol size='4'>
             <p> <Link className='linkpanier' to={`/detail/${pi.product.slug}/${pi.product.nom}`}>
              {truncateString(pi.product.description,40)}</Link>  
                </p>
             </IonCol>
             <IonCol size='2'>
             {pi.product.active?
             <p className='centerbtn'>
              <Button  className='btncommandedesk' variant="dark" edge='end' 
              onClick={()=>handlecommande(pi)}>Commander</Button></p>:
              <IonText style={{color:'red'}}>Produit inactif!</IonText>}
             </IonCol>



   {cartproduit.map(pi=>
             <IonCard className='cartpaniermobile'>
            <IonRow>
             <IonCol size='8'>
             <img src={`http://127.0.0.1:8001${pi.product.thumbnail}`} alt='' className='imgpaniermobile' />
             </IonCol>
             <IonCol size='4'>
             <p> <Link className='linkpanier' to={`/detail/${pi.product.slug}/${pi.product.nom}`}>
              {truncateString(pi.product.description,40)}</Link>  
                </p>
            
             </IonCol>
             <IonCol size='12' className='centerbtn'>
             <p>{pi.product.nom}</p>
             <p>quantite:{pi.quantity}</p>
             <p>prix unitaire: <IonText className='redstyle'>{pi.product.prix}</IonText> CFA</p>
             <p>sous total:<IonText className='redstyle'> {pi.subtotal}</IonText>  CFA</p>
             <p className='mt-3'><Button variant="outline-warning" onClick={()=>handleplus(pi.product.id)}><AddCircleIcon/></Button>
            <Button variant="outline-info" onClick={()=>handleminus(pi.id)}><RemoveIcon/></Button>
            <Button  variant="outline-danger" edge='end' onClick={()=>handleremove(pi.id)}><DeleteIcon/></Button>
            </p>
            {pi.product.active?
             <p >
              <Button  variant="dark" edge='start' 
              onClick={()=>handlecommande(pi.id ,pi.product.nom,pi.product.slug)}>Commander</Button><br/>
              <IonText className='redstyle'>{pi.product.quantite} disponibles</IonText></p>:
              <IonText className='redstyle'>Produit inactif!</IonText>}
             </IonCol>
             </IonRow>
            </IonCard>)}
             
*/