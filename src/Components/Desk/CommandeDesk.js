import { IonCard, IonCol, IonGrid,IonIcon,IonRow, IonText } from '@ionic/react';
import React from 'react';
import {walletOutline} from 'ionicons/icons';


function CommandeDesk({produit,handlesubmit,handledta,handladress,calculer,livraison,total,adress}) {
  return( 
    <div className='desk container'>
     <IonGrid>
     {produit.product===null?
      <IonRow>
      <IonCol size='6'> 
       <IonCard>
        <IonRow>
         <IonCol size='5'>
         <p>{produit.imageproduct.produit.nom}</p>
         <p> Taille <strong>{produit.imageproduct.size}</strong></p>
          <p> Couleur <strong> {produit.imageproduct.color}</strong></p>
          <p>quantite <strong> {produit.quantity}</strong> </p>
           <p>Prix unitaire <strong> {produit.imageproduct.produit.prix} {produit.imageproduct.produit.devise.devise}</strong> 
            </p>
           <p>Montant total  <strong>
            {produit.subtotal} {produit.imageproduct.produit.devise.devise}
            </strong> </p>
            {calculer?
            <div> <p>Livraison <strong>{livraison} </strong> 
            {produit.imageproduct.produit.devise.devise}</p>
            <p>Total <strong>{total} </strong>{produit.imageproduct.produit.devise.devise} </p>
              </div>:null}
              </IonCol>
              <IonCol size='5'>
            <img src={`http://127.0.0.1:8001${produit.imageproduct.image}`} alt='' className='imgajout' />
             </IonCol>
             </IonRow>
              </IonCard>
      </IonCol>
      {produit.imageproduct.active?
       <IonCol size='6' className='centerbtn ml-4'>
            <form  onSubmit={handlesubmit}>
            <label className="w3-text"><b>Nom complet du client</b></label>
            <input type='text' className="w3-input w3-border" required name='nom' onChange={handledta}/>
            <label className="w3-text"><b>Numero de telephone du client</b></label>
            <input type='tel' className="w3-input w3-border" placeholder='+221' required name='tel'
             onChange={handledta}/>
           <p className='mt-3'> <select
              onChange={handladress}
              required
              className="w3-select"
              > <option value="" disabled selected>Adresse de livraison</option>
                {adress.map(ad=>
                    <option key={ad.id} value={ad.id}>{ad.adress}({ad.region.region})</option>)}     
             </select></p>
             <p className='redstyle'>Payement <IonIcon icon={walletOutline}/></p>
             <label className="w3-text "><b>Numero de telephone de votre compte GaalguiMoney</b></label>
            <input type='tel' className="w3-input w3-border" placeholder='+221' required name='phonegaalgui' 
            onChange={handledta}/>
            <p className='mt-3'> <button class="w3-button w3-round-xxlarge w3-black" type='submit'>Passer la commande</button></p>
            </form>
            </IonCol>:<h3 className='redstyle mt-4'>Impossible de commander, produit inactif</h3>}
      </IonRow>:
      <IonRow>
      <IonCol size='6'>
        <IonCard>
          <IonRow>
            <IonCol size='5'>
            <p>{produit.product.nom}</p>
            <p> Couleur <strong> {produit.product.couleur}</strong></p>
            <p>Taille <strong> {produit.product.taille}</strong> </p>
             <p>quantite <strong> {produit.quantity}</strong></p>
            <p>Prix unitaire <strong>{produit.product.prix} {produit.product.devise.devise} 
            </strong> </p>
             <p> Total <strong> 
              {produit.subtotal}
              </strong> </p>
              {calculer?
              <div> <p>Livraison <strong>{livraison} </strong> </p>
               <p>Total <strong>{total} {produit.product.devise.devise} 
                </strong> </p>
                </div>:null}
                </IonCol>
                <IonCol size='5'>
                <img src={`http://127.0.0.1:8001${produit.product.thumbnail}`} alt='' className='imgajout' />
                </IonCol>
                  </IonRow>
              </IonCard>
            </IonCol>
           {produit.product.active?
           <IonCol size='6' className='centerbtn ml-4'>
            <form  onSubmit={handlesubmit}>
            <label className="w3-text"><b>Nom complet du client</b></label>
            <input type='text' className="w3-input w3-border" required name='nom' onChange={handledta}/>
            <label className="w3-text"><b>Numero de telephone du client</b></label>
            <input type='tel' className="w3-input w3-border" placeholder='+221' required name='tel'
             onChange={handledta}/>
           <p className='mt-3'> <select
              onChange={handladress}
              required
              className="w3-select"
              > <option value="" disabled selected>Adresse de livraison</option>
                {adress.map(ad=>
                    <option key={ad.id} value={ad.id}>{ad.adress}({ad.region.region})</option>)}     
             </select></p>
             <p className='redstyle'>Payement <IonIcon icon={walletOutline}/></p>
             <label className="w3-text "><b>Numero de telephone de votre compte GaalguiMoney</b></label>
            <input type='tel' className="w3-input w3-border" placeholder='+221' required name='phonegaalgui' 
            onChange={handledta}/>
            <p className='mt-3'> <button class="w3-button w3-round-xxlarge w3-black" type='submit'>Passer la commande</button></p>
            </form>
            </IonCol>
            :<h3 className='redstyle mt-4'>Impossible de commander, produit inactif</h3>}
      </IonRow>}
     </IonGrid>
     </div>
  );
}

export default CommandeDesk;


