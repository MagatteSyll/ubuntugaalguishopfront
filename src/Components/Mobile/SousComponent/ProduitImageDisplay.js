import { IonGrid, IonRow, IonSegment,IonCol,IonText,IonIcon } from '@ionic/react'
import React,{useState} from 'react'
import Image from 'react-bootstrap/Image'
import {starOutline} from 'ionicons/icons'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function ProduitImageDisplay({produitimage,produit,user,islog,handlecart,handlecartunique,handlenonlog}) {
        const [image, setimage] = useState(
            {
                image:produitimage[0].image,
                size:produitimage[0].size,
                color:produitimage[0].color,
                quantite:produitimage[0].quantite,
                id:produitimage[0].id,
                activa:produitimage[0].active,
                nbrvendu:produitimage[0].qte_vendu,
                vendu:produitimage[0].vendu
            } 
        ) 
    const handleclick=id=>{
       let  image=produitimage.find(x => x.id ===id).image;
       let size=produitimage.find(x => x.id ===id).size;
       let color=produitimage.find(x => x.id ===id).color;
       let qte=produitimage.find(x => x.id ===id).quantite;
       let lid=produitimage.find(x => x.id ===id).id;
       let activa =produitimage.find(x => x.id ===id).active;
       let nbrvendu=produitimage.find(x => x.id ===id).qte_vendu;
       let vendu=produitimage.find(x => x.id ===id).vendu;
setimage({...image,image:image,size:size,color:color,quantite:qte,id:lid,
    activa:activa,nbrvendu:nbrvendu,vendu:vendu})
    }
  return (
    <div>
    {produit.variation?
    <>
    <IonGrid>
     <IonRow>
     
    <IonCol size='12' className='container' >
    <h3>{produit.nom}</h3><br/>
    <Image className='imgdetailmobile' src={`http://127.0.0.1:8001${image.image}`} />
   
    <div className='mt-2 container'>
    <IonSegment className='detailsegment'>
        {produitimage.map(pi=>
        <button className='btndrop btndetail' onClick={()=>handleclick(pi.id)}>
        <Image className='imgbtnmobiledetail' src={`http://127.0.0.1:8001${pi.image}`} />
        </button>)}
    </IonSegment>
    </div>
    </IonCol>
    <IonCol size='10' className='container'>  
              <p>{produit.description}</p>    
             <p>taille<strong> {image.size}</strong> </p>
             <p>couleur<strong> {image.color}</strong></p>
             <p>Quantité disponible:<strong> {image.quantite}</strong></p>
             <h3> <strong> {produit.prix} {produit.devise.devise} </strong> </h3>
             {image.vendu?<span className='redstyle'>{image.nbrvendu} vendu(s)</span>:null}

             {user.id===produit.vendeur.id?<IonIcon icon={starOutline} className='iconvendeur'/>
             :<p>
             {image.activa?
             <span>
              {islog? 
            <span>
            {user.is_staff?null:
           <button className='vendrebtn' onClick={()=>handlecart(image.id)}>
           <AddShoppingCartIcon/></button> }</span>
           :<button className='vendrebtn' onClick={handlenonlog}>
           <AddShoppingCartIcon /></button>} 
            </span>:<span className='redstyle'>Produit inactif</span>} </p>}
        </IonCol>
    </IonRow></IonGrid></>:
    <>
    <IonGrid>
   <IonRow>
   <h3 >{produit.nom}</h3><br/>
  <IonCol size='12' className='container' >
    <div>
    <Image className='imgdetailmobile' src={`http://127.0.0.1:8001${image.image}`} />
    </div>
    <div className='mt-2'>
    <IonSegment className='detailsegment'>
        {produitimage.map(pi=>
        <button className='btndrop btndetail' onClick={()=>handleclick(pi.id)}>
        <Image className='imgbtnmobiledetail' src={`http://127.0.0.1:8001${pi.image}`} />
        </button>)}
    </IonSegment>
    </div>
    </IonCol>
    <IonCol size='10' className='container'>
 <p>{produit.description}</p>
  <p>taille <strong> {produit.taille}</strong> </p>
   <p>couleur <strong> {produit.couleur}</strong></p>
 <p>Quantité disponible <strong> {produit.qte}</strong></p>
 <h3> <strong> {produit.prix} {produit.devise.devise} </strong> </h3>
 {produit.vendu?<span className='redstyle'>{produit.vendu_qte} vendu(s)</span>:null}<br/>
 {user.id===produit.vendeur.id?<IonIcon icon={starOutline} className='iconvendeur'/>
     :<p>
     {produit.active?
    <span>
  {islog? 
  <span>
  {user.is_staff?null:
 <button className='vendrebtn' onClick={handlecartunique}>
 <AddShoppingCartIcon/></button>} </span>
 :<button className='vendrebtn' onClick={handlenonlog}>
 <AddShoppingCartIcon /></button>} 
 </span>:<span className='redstyle'>Produit inactif</span>} </p>}
  </IonCol>
    </IonRow>
    </IonGrid>
    </>}
    </div>
  )
}

export default ProduitImageDisplay
