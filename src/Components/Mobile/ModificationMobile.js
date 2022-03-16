import React,{Fragment} from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IonSegment,IonGrid, IonRow, IonCol,  IonIcon, IonSegmentButton} from '@ionic/react'
import {  camera,trashOutline } from 'ionicons/icons'
import ModifUnProdit from './SousComponent/ModifUnProdit';


function ModificationMobile({imgref,handledata,handleundata,produit,handlecat,
    handleregion,region,cat,produitimage,devise,
    varia,variation,detail,handledetail, handledevise,handlevariation,
    handledetailsubmit,handledeleteimgjout,undata
    ,handledelete,handleclick,handleajoutunique,handleajout}) {
  return(
    <div className='mobile'>
      <IonSegment value={varia}>
      <IonSegmentButton onClick={handledetail} value="detail">
        <p>Detail</p>
      </IonSegmentButton>
      <IonSegmentButton onClick={handlevariation} value="variation">
        <p>Variation</p>
      </IonSegmentButton>
      </IonSegment>
  <div className='container mt-3'>
     {detail?
      <IonGrid>
        <IonRow>
        <IonCol size='10'>
         <h3>Detail du produit</h3>
        <p> <strong>{produit.nom}</strong></p>
         <p> {produit.description}</p>
        <p>  <strong>{produit.prix} {produit.devise.devise}</strong></p>
         {produit.variation?null:
        <span>
          <p> Taille <strong>{produit.taille}</strong></p>
          <p> couleur <strong>{produit.couleur}</strong></p>
          <p> Quantité en stock <strong>{produit.qte}</strong></p>
          </span>}
        </IonCol>
        <IonCol size='12' className='container' >
         <form onSubmit={handledetailsubmit}>
      <IonRow>
       <IonCol size='10'>
       <label className='lab'>Nom du produit </label>
         <input type='text'  onChange={handledata} name='nom' required />
        </IonCol>
             <IonCol size='10'>
            <label className='lab'>Prix du produit </label>
             <input type='number'   onChange={handledata} name='prix' required />
           </IonCol>
           <IonCol size='10' className='centerbtn'>
             <select
              onChange={handledevise}
              className="w3-select"
              required
              >
            <option value="" disabled selected>Devise</option>
           {devise.map((d)=>
            <option value={d.id} key={d.id}>{d.devise}</option>
             )}
             </select>
           </IonCol>
           <IonCol size='10' className='centerbtn mt-4'>
             <textarea 
            placeholder="Description du produit" required onChange={handledata}
            rows="3" cols="30" name='description' />
            </IonCol><br/><br/>
           {produit.variation?null:
             <div className='mt-3'>
               <IonRow>
                 <IonCol size='10'>
                 <label className='lab'>Taille </label>
                 <input type='text'   onChange={handledata} name='taille' required/>
                 </IonCol>
                 <IonCol size='10'>
                 <label className='lab'>Couleur </label>
                 <input type='text'  onChange={handledata} name='couleur' required/>
                 </IonCol>
                 <IonCol size='10'>
                 <label className='lab'>Quantité en stock </label>
                 <input type='number'   onChange={handledata} name='qte' required/>
                 </IonCol>
               </IonRow>
             </div>}
           <div className='mt-3 container'>
         <IonRow>
          <IonCol size='5' className='lab'>
               <select
              onChange={handlecat}
              className="w3-select"
              required
              > <option value="" disabled selected>Categorie du produit</option>
                 {cat.map((c)=>
                 <option value={c.id} key={c.id}>{c.category}</option>
                 )}
             </select>
             </IonCol>
             <IonCol size='5' className='lab'>
             <select
              onChange={handleregion}
              className="w3-select"
              required
              >
                 <option value="" disabled selected>Location du produit</option>
                 {region.map((r)=>
                 <option value={r.id} key={r.id}>{r.region}</option>
                 )}
             </select>
               </IonCol><br/><br/>
               </IonRow>
               </div>
          
            
            <IonCol size='10' className='centerbtn'>
           <button type='submit'  className="w3-button w3-round-large w3-purple ">Modifier</button>
            </IonCol>
            </IonRow>
           </form>
          </IonCol>
           </IonRow>
           </IonGrid>:null}
           {variation? 
        <div className='mt-3'>
        {produit.variation?
      <span>
      {produitimage.length===2?
        <h3>Il faut au minimum 2 variations du produit</h3>:null}
      </span>:<span>
      {produitimage.length===3? 
       <h3>Il faut au minimum 3 images du produit</h3>:null} 
      </span>}
        <div className='row'>
         {produitimage.length<10?
          <div className='col-md-4'>
          <button  className='btndrop container' onClick={handleclick}><IonIcon icon={camera} 
          className='camerazoomdesk' />
          </button>
          </div>:null}

          {undata.imgload?
            <div className='col-md-4'>
             {produit.variation?
              <IonGrid>
              <IonRow>
              <IonCol size='4'>
               <img alt='' src={undata.imagedisp} className='imgmodif'/>
               <p> <button className='btndrop' onClick={handledeleteimgjout} >
                <IonIcon  className='redstyle' icon={trashOutline}/>
              </button>
              </p>
              </IonCol>
              <IonCol size='8'>
            <form onSubmit={handleajout}>
             <IonRow>
            <IonCol size='10'>
             <p>Taille</p>
            <input type='text'  onChange={handleundata} placeholder='taille' name='size' required/>
            </IonCol>
           <IonCol size='10'>
             <p>Couleur</p>
          <input type='text' onChange={handleundata} placeholder='couleur' 
          name='color' required />
         </IonCol>
          <IonCol size='10'>
          <p>Quantité</p>
         <input type='number'  onChange={handleundata} placeholder='quantité' name='qte' required/>
        </IonCol>
        <IonCol size='10'>
        <button className="w3-button w3-round-large w3-purple" type='submit'>Ajouter</button>
        </IonCol>
        </IonRow>
       </form>
        </IonCol>
          </IonRow>
           </IonGrid>:
           <div className='col-md-4'>
           <img alt='' src={undata.imagedisp} className='imgmodif'/>
            <p> <button className='btndrop' onClick={handledeleteimgjout}>
             <IonIcon  className='redstyle' icon={trashOutline}/>
              </button>
              </p>
            <p>
           <button className="w3-button w3-round-large w3-purple"
            onClick={handleajoutunique}>Ajouter</button> 
            </p>
           </div>}
            </div>:null}
          </div>
            <div className='row'>
         {produit.variation?
             <>
           {produitimage.map(pi=>
           <div className='col-md-4'>
          <IonGrid>
          <IonRow>
          <IonCol size='8'>
          <img alt='' src={`http://127.0.0.1:8001${pi.image}`} className='imgmodif'/>
          <p> <button className='btndrop' onClick={()=>handledelete(pi.id)}>
           <IonIcon  className='redstyle' icon={trashOutline}/>
           </button></p>
          </IonCol>
          <IonCol size='4'>
          <p> Taille<strong> {pi.size}</strong></p>
          <p> Couleur <strong>{pi.color}</strong></p>
          <p> Quantité  <strong>{pi.quantite}</strong></p>
          </IonCol>
          </IonRow>
          </IonGrid>
          </div>)}
          </>:
           <>
           {produitimage.map(pi=>
          <div className='col-md-4'>
          <img alt='' src={`https://gaalguishopbackend.herokuapp.com${pi.image}`} className='imgmodifunique'/>
          <p> <button className='btndrop' onClick={()=>handledelete(pi.id)}>
           <IonIcon  className='redstyle' icon={trashOutline}/>
           </button></p>
          </div>)}
          </>}
         </div>

        </div>:null}



     </div>

      
    </div>
  );

}

export default ModificationMobile;
