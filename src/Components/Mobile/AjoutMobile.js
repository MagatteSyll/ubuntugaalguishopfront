import React,{Fragment} from 'react';
import {  IonButton,IonIcon, IonGrid, IonRow, IonCol,IonSegment,IonSegmentButton   } from '@ionic/react'
import {  camera,trashOutline } from 'ionicons/icons'


function AjoutMobile({picload,disp,imgref,handleImageSelect,handleref,handlesubmit,handledata,handlecat,
  cat,handleregion,region,data,varia,nonvaria,seg,handlenonvaria,handlevaria,imgrefunique,handleImageSelectunique,dispunique,handlerefunique,
  handledataunique,handlecatunique,handleregionunique,dataunique,picloadunique,handlesubmitunique,
   handluniquepic, handlevaripic, modifvaripic,modifuniquepic,picvariref ,picuniqueref,removunique,
   removevari,devise,handledevise,handledevisevari}) {
  return(
       <div className='mobile'> 
         <IonSegment value= {seg}> 
        <IonGrid>
          <IonRow>
            <IonCol size='6'>
            <IonSegmentButton className='segboutiquevendeur' value='sansvariation' onClick={handlenonvaria}>
          <p>Modèle unique</p>
        </IonSegmentButton>
            </IonCol>
            <IonCol size='6'>
            <IonSegmentButton className='segbtnboutique' value='avecvariation' onClick={handlevaria}>
            <p>Modèle varié</p>
           </IonSegmentButton>
          </IonCol>
          </IonRow>
        </IonGrid>   
      </IonSegment>
      {varia?
      <AvecVariation imgref={imgref} handleImageSelect={handleImageSelect} handlesubmit={handlesubmit}
      handledata={handledata} data={data} picload={picload}disp={disp} handlecat={handlecat} handleref={handleref}
      handleregion={handleregion} region={region} cat={cat}   handlevaripic={handlevaripic} 
      modifvaripic={modifvaripic}  picvariref={picvariref} removevari={removevari}  
      handledevisevari={handledevisevari} devise={devise}  />
       :null}
      {nonvaria?
      <SansVariation region={region} cat={cat} imgrefunique={imgrefunique} handleImageSelectunique={handleImageSelectunique}
      dispunique={dispunique} handlerefunique={handlerefunique} handledataunique={handledataunique}
      handlecatunique={handlecatunique} handleregionunique={handleregionunique} dataunique={dataunique}
       picloadunique={picloadunique} handlesubmitunique={handlesubmitunique}  handluniquepic={handluniquepic} 
       modifuniquepic={modifuniquepic} picuniqueref={picuniqueref} removunique={removunique} 
       handledevise={handledevise} devise={devise}/>:null}
        </div>
  );
}
function AvecVariation({imgref, handleImageSelect, handlesubmit,
  handledata, data,picload,disp,handlecat,handleref,handleregion,region,cat, 
   handlevaripic, modifvaripic,picvariref,removevari,devise,handledevisevari}){
  return(

    <div>
 <input  type='file'  accept='image/*'  ref={imgref} onChange={handleImageSelect}
   className='filimg' />
<input  type='file'  accept='image/*'  ref={picvariref} onChange={modifvaripic}
          className='filimg' />
 <IonGrid>
      <div className='row'>
   <div className="col-md-4 " >
 <button  className='btndrop container' hidden={disp.length===10} onClick={handleref}><IonIcon icon={camera} 
    className='camerazoommobile' />
  </button>
   </div>
  </div>
         <form  onSubmit={handlesubmit} className='mt-3 centerbtn'>
         
         <div className='row'>
          {picload ?
             <Fragment>
               {disp.length>0?
               <Fragment>   
              {disp.length<2?
              <p className='redstyle'>Il faut au minimum deux variations du produit</p>:null} 
              <div>
                <IonRow>
            <IonCol size='4' >
            <img src={disp[0]} alt="" className="imgaddvari"/> 
              <p> <button className='btndrop' onClick={()=>removevari(0)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(0)}>
                      <IonIcon icon={camera}/>
                    </button></p>  
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3' >
                   <IonRow>

                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille1} placeholder='taille' onChange={handledata} name='taille1' required/>
                     </IonCol>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur1}  placeholder='couleur' onChange={handledata} name='couleur1' required/>
                     </IonCol>
                     <IonCol size='11'  >
                     <input type='number' defaultValue={data.qte1}  placeholder='quantité en stock' onChange={handledata} name='qte1' required/>
                     </IonCol>
                     </IonRow>
                     </IonCol>
                    </IonRow>
                     {disp.length>1?
                     <IonRow>
                     <IonCol size='4' >
                    <img src={disp[1]} alt="" className="imgaddvari"/> 
                    <p> <button className='btndrop' onClick={()=>removevari(1)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(1)}>
                      <IonIcon icon={camera}/>
                    </button></p> 
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'  >
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille2}  placeholder='taille' onChange={handledata} name='taille2' required/>
                     </IonCol>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur2}  placeholder='couleur' onChange={handledata} name='couleur2' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte2}  placeholder='quantité en stock' onChange={handledata} name='qte2' required/>
                    </IonCol>
                     </IonRow>
                     </IonCol>
                     </IonRow>:null}
                     {disp.length>2?
                     <IonRow>
                     <IonCol size='4' >
                   <img src={disp[2]} alt="" className="imgaddvari"/> 
                  <p> <button className='btndrop' onClick={()=>removevari(2)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(2)}>
                      <IonIcon icon={camera}/>
                    </button></p> 
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'>
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille3}  placeholder='taille' onChange={handledata} name='taille3' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur3} placeholder='couleur' onChange={handledata} name='couleur3' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte3}  placeholder='quantité en stock' onChange={handledata} name='qte3' required/>
                     </IonCol>
                     
                     </IonRow>
                     </IonCol></IonRow>:null}
                     {disp.length>3?
                     <IonRow>
                     <IonCol size='4' >
                 <img src={disp[3]} alt="" className="imgaddvari" onClick={()=>removevari(3)}/> 
                 <p> <button className='btndrop'>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(3)}>
                      <IonIcon icon={camera}/>
                    </button></p> 
                    </IonCol>
                    <IonCol size='8'>
                   <IonRow>
                     <IonCol size='11' className='centerbtn mr-3' >
                     <input type='text' defaultValue={data.taille4}  placeholder='taille' onChange={handledata} name='taille4' required/>
                     </IonCol>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur4}  placeholder='couleur' onChange={handledata} name='couleur4' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte4}  placeholder='quantité en stock' onChange={handledata} name='qte4' required/>
                     </IonCol> 
                     </IonRow>
                     </IonCol></IonRow>:null}
                     {disp.length>4?
                     <IonRow>
                   <IonCol size='4' >
                   <img src={disp[4]} alt="" className="imgaddvari" /> 
                   <p> <button className='btndrop' onClick={()=>removevari(4)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(4)}>
                      <IonIcon icon={camera}/>
                    </button></p> 
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'>
                     <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille5}  placeholder='taille' onChange={handledata} name='taille5' required/>
                     </IonCol>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur5}  placeholder='couleur' onChange={handledata} name='couleur5' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte5}  placeholder='quantité en stock' onChange={handledata} name='qte5' required/>
                     </IonCol>
                     
                     </IonRow>
                     </IonCol></IonRow>:null}
                     {disp.length>5?
                     <IonRow>
                     <IonCol size='4' >
                   <img src={disp[5]} alt="" className="imgaddvari" onClick={()=>removevari(5)}/> 
                   <p> <button className='btndrop'>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(5)}>
                      <IonIcon icon={camera}/>
                    </button></p> 
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'>
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille6}  placeholder='taille' onChange={handledata} name='taille6' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur6}  placeholder='couleur' onChange={handledata} name='couleur6' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte6}  placeholder='quantité en stock' onChange={handledata} name='qte6' required/>
                     </IonCol>
                    
                     </IonRow>
                   </IonCol></IonRow>:null}
                   {disp.length>6?
                   <IonRow>
                   <IonCol size='4' >
                   <img src={disp[6]} alt="" className="imgaddvari"/> 
                   <p> <button className='btndrop' onClick={()=>removevari(6)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(6)}>
                      <IonIcon icon={camera}/>
                    </button></p> 
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'>
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille7}  placeholder='taille' onChange={handledata} name='taille7' required/>
                     </IonCol>
                    
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur7}  placeholder='couleur' onChange={handledata} name='couleur7' required/>
                     </IonCol>
                    
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte7}  placeholder='quantité en stock' onChange={handledata} name='qte7' required/>
                     </IonCol>
                     
                     </IonRow>
                     </IonCol></IonRow>:null}
                     {disp.length>7?
                     <IonRow>
                   <IonCol size='4' >
                   <img src={disp[7]} alt="" className="imgaddvari"/> 
                   <p> <button className='btndrop' onClick={()=>removevari(7)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(7)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'> 
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille8}  placeholder='taille' onChange={handledata} name='taille8' required/>
                     </IonCol>
                   
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.couleur8}  placeholder='couleur' onChange={handledata} name='couleur8' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte8}  placeholder='quantité en stock' onChange={handledata} name='qte8' required/>
                     </IonCol>
                     
                     </IonRow>
                     </IonCol> </IonRow>:null}
                     {disp.length>8?
                     <IonRow>
                   <IonCol size='4' >
                   <img src={disp[8]} alt="" className="imgaddvari"/> 
                   <p> <button className='btndrop' onClick={()=>removevari(8)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(8)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'>
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille9}  placeholder='taille' onChange={handledata} name='taille9' required/>
                     </IonCol>
                    
                     <IonCol size='11' >
                     <input type='text'  defaultValue={data.couleur9}  placeholder='couleur' onChange={handledata} name='couleur9' required/>
                     </IonCol>
                    
                     <IonCol size='11' >
                     <input type='number'  defaultValue={data.qte9}  placeholder='quantité en stock' onChange={handledata} name='qte9' required/>
                     </IonCol>
                    
                     </IonRow>
                     </IonCol></IonRow>:null}
                     {disp.length>9?
                     <IonRow>
                   <IonCol size='4' >
                   <img src={disp[9]} alt="" className="imgaddvari"/>
                   <p> <button className='btndrop' onClick={()=>removevari(9)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handlevaripic(9)}>
                      <IonIcon icon={camera}/>
                    </button></p>  
                    </IonCol>
                    <IonCol size='8' className='centerbtn mr-3'>
                   <IonRow>
                     <IonCol size='11' >
                     <input type='text' defaultValue={data.taille10}  placeholder='taille' onChange={handledata} name='taille10' required/>
                     </IonCol>
                     
                     <IonCol size='11' >
                     <input type='text'  defaultValue={data.couleur10} placeholder='couleur' onChange={handledata} name='couleur10' required/>
                     </IonCol> 
                     <IonCol size='11' >
                     <input type='number' defaultValue={data.qte10}  placeholder='quantité en stock' onChange={handledata} name='qte10' required/>
                     </IonCol>
                     </IonRow>
                     </IonCol></IonRow>:null}
                       </div> </Fragment>:null}
                </Fragment>
              :null}
         </div>
          <div className=" mt -3 ">
             <IonRow>
               <IonCol size='11' className='centerbtn'>
             <label className='lab'>Nom du produit </label>
             <input type='text'defaultValue={data.nom} 
             placeholder="nom du produit"  onChange={handledata} name='nom' required/>
            </IonCol>
             <IonCol size='11' className='centerbtn'>
            <label className='lab'>Prix du produit </label>
             <input type='number' 
             defaultValue={data.prix}
             placeholder="prix "   onChange={handledata} name='prix' required/>
           </IonCol>
           <IonCol size='12' className='centerbtn'>
           <select
              onChange={handledevisevari}
              className="w3-select"
              >
                 <option value="" disabled selected>Devise</option>
                 {devise.map((d)=>
                 <option value={d.id} key={d.id}>{d.devise}</option>
                 )}
             </select>
           </IonCol>
            <IonCol size='12' className='centerbtn mt-4'>
             <textarea 
             defaultValue={data.description} 
            placeholder="Description du produit" required onChange={handledata}
            rows="3" cols="30" name='description' />
            </IonCol><br/><br/>
            </IonRow>
               </div>
          
          <div className='mt-3'>
         <IonRow>
          
          <IonCol size='12' className='lab'>
               <select
              onChange={handlecat}
              className="w3-select"
              >
                 <option value="" disabled selected>Categorie du produit</option>
                 {cat.map((c)=>
                 <option value={c.id} key={c.id}>{c.category}</option>
                 )}
             </select>
             </IonCol><br/>
             <IonCol size='12' className='lab'>
             <select
              onChange={handleregion}
              className="w3-select"
              >
                 <option value="" disabled selected>Location du produit</option>
                 {region.map((r)=>
                 <option value={r.id} key={r.id}>{r.region}</option>
                 )}
             </select>
               </IonCol><br/><br/>
               <IonCol size='12' className='ion-text-center'>
                 <IonButton type='submit' color='success' disabled={disp.length<2} >Ajouter</IonButton>
               </IonCol>
             </IonRow>
             </div>
           
          </form>
    
  </IonGrid>
    </div>
  )
}
function SansVariation({imgrefunique,handleImageSelectunique,dispunique,handlerefunique,
  handledataunique,handlecatunique,cat,region,handleregionunique,picloadunique,handlesubmitunique,
  picuniqueref, handluniquepic, modifuniquepic,removunique,dataunique,devise,handledevise}){
  return(
    <div>
   <input  type='file'  accept='image/*' multiple ref={imgrefunique} onChange={handleImageSelectunique}
     className='filimg' /> 
    <input  type='file'  accept='image/*'  ref={picuniqueref} onChange={modifuniquepic}
     className='filimg' />

    <div className='row'>
     <div className="col-md-4 " >
      <button  className='btndrop container' hidden={dispunique.length===10} onClick={handlerefunique}>
       <IonIcon icon={camera} 
     className='camerazoommobile' />
     </button>
    </div>
    </div>

   <form className='mt-4' onSubmit={handlesubmitunique}>
    <IonGrid>
    <IonRow>
     {picloadunique ?
         <Fragment>  
           {dispunique.length>0?
           <Fragment> 
             {dispunique.length<3?<p className='redstyle'>Il faut au minimum 3 photos du produit</p>:null} 
            <IonCol size='4' >
            <img src={dispunique[0]} alt="" className="imgaddmobile"/> 
            <p> <button className='btndrop' onClick={()=>removunique(0)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(0)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>
                     {dispunique.length>1?
                     <IonCol size='4' >
                    <img src={dispunique[1]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(1)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(1)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>2?
                     <IonCol size='4' >
                 <img src={dispunique[2]} alt="" className="imgaddmobile"/> 
                 <p> <button className='btndrop' onClick={()=>removunique(2)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(2)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>3?
                     <IonCol size='4'>
                 <img src={dispunique[3]} alt="" className="imgaddmobile"/> 
                 <p> <button className='btndrop' onClick={()=>removunique(3)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(3)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>4?
                   <IonCol size='4' >
                   <img src={dispunique[4]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(4)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(4)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>5?
                     <IonCol size='4' >
                   <img src={dispunique[5]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(5)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(5)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                   </IonCol>:null}
                   {dispunique.length>6?
                   <IonCol size='4' >
                   <img src={dispunique[6]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(6)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(6)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>7?
                   <IonCol size='4'>
                   <img src={dispunique[7]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(7)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(7)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>8?
                   <IonCol size='4'>
                   <img src={dispunique[8]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(8)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(8)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                     </IonCol>:null}
                     {dispunique.length>9?
                   <IonCol size='4'>
                   <img src={dispunique[9]} alt="" className="imgaddmobile"/> 
                   <p> <button className='btndrop' onClick={()=>removunique(9)}>
                      <IonIcon  className='redstyle' icon={trashOutline}/>
                    </button>
                    <button className='btndrop' onClick={()=>handluniquepic(9)}>
                      <IonIcon icon={camera}/>
                    </button></p>
                   
                     </IonCol>:null}
                     </Fragment>:null}
               </Fragment>
              :null}
             
             </IonRow>
     
       <div className='mt-4 '>
       <IonRow>  
        <IonCol size='11' className='centerbtn'>
             <label className='lab'>Nom du produit </label>
             <input type='text' defaultValue={dataunique.nom}  
             placeholder='nom du produit'
              onChange={handledataunique} name='nom' required/>
            </IonCol>
             <IonCol size='11' className='centerbtn'>
            <label className='lab'>Prix du produit </label>
             <input type='number' 
             defaultValue={dataunique.prix}
             placeholder='prix'  onChange={handledataunique} name='prix' required/>
           </IonCol>
           <IonCol size='11' className='centerbtn'>
            
             <select
              onChange={handledevise}
              className="w3-select"
              >
                 <option value="" disabled selected>Devise</option>
                 {devise.map((d)=>
                 <option value={d.id} key={d.id}>{d.devise}</option>
                 )}
             </select>
             </IonCol><br/>
           <IonCol size='11' className='centerbtn'>
           <p> <label className='lab'>Couleur</label></p>
             <input type='text' defaultValue={dataunique.color} 
               onChange={handledataunique} name='color' required
               placeholder='couleur'/>
           </IonCol>
           <IonCol size='11' className='centerbtn'>
            <label className='lab'>Taille ou mesure </label>
             <input defaultValue={dataunique.size}  type='text' 
              onChange={handledataunique} name='size'
              placeholder='taille' required/>
           </IonCol>
           <IonCol size='11' className='centerbtn'>
            <label className='lab'>quantité en stock </label>
             <input type='number'  defaultValue={dataunique.qte} 
               onChange={handledataunique} name='qte'
               placeholder='quantité' required/>
           </IonCol>
            <IonCol size='10' className='centerbtn mt-4'>
             <textarea 
             defaultValue={dataunique.description} 
            placeholder="Description du produit" required onChange={handledataunique}
            rows="3" cols="30" name='description' />
            </IonCol><br/><br/>
            <IonCol size='12' className='lab'>
               <select
              onChange={handlecatunique}
              className="w3-select"
              >
                 <option value="" disabled selected>Categorie du produit</option>
                 {cat.map((c)=>
                 <option value={c.id} key={c.id}>{c.category}</option>
                 )}
             </select>
             </IonCol><br/>
             <IonCol size='12' className='lab'>
             <select
              onChange={handleregionunique}
              className="w3-select"
              >
                 <option value="" disabled selected>Location du produit</option>
                 {region.map((r)=>
                 <option value={r.id} key={r.id}>{r.region}</option>
                 )}
             </select>
               </IonCol><br/><br/>
               <IonCol size='12' className='ion-text-center'>
                 <IonButton type='submit' color='success' disabled={dispunique.length<3} >Ajouter</IonButton>
               </IonCol> 
       </IonRow>
       </div>
     </IonGrid>
   </form>
    </div>
  )
}

export default AjoutMobile;
