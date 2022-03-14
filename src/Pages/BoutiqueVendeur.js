import React,{useState,useEffect,useRef,Fragment} from 'react';
import BoutiqueVendeurDesk from '../Components/Desk/BoutiqueVendeurDesk';
import BoutiqueVendeurMobile from '../Components/Mobile/BoutiqueVendeurMobile';
import axiosInstance from '../axios'
import {IonLoading,IonModal,IonPopover,IonAlert,IonGrid,IonRow,IonCol} from '@ionic/react'
import {useHistory} from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


function BoutiqueVendeur({truncateString,user}) { 
  const  [produit, setproduit] = useState([])
  const  [produitvendu, setproduitvendu] = useState([])
  const  [produitvenduload, setproduitvenduload] = useState(false)
  const  [botique, setbotique] = useState({}) 
  const  [loading, setloading] = useState(true)
  const  [produitload, setproduitload] = useState(false)
  const  [modal, setmodal] = useState(false)
  const  [seg, setseg] = useState('prodactif');
  const  [prodactif, setprodactif] = useState(true);
  const  [pop, setpop] = useState(false);
  const  [popvendu, setpopvendu] = useState(false);
  const  [prodvendu, setprodvendu] = useState(false);
  const  [description, setdescription] = useState();
  const iref= useRef(null)
  const [showLoading, setShowLoading] = useState(true);
  const history=useHistory() 
  const  [aler, setaler] = useState(false);
  const  [pid, setpid] = useState({
    id:'',
    nom:'',
    slug:'',
    active:''
  })


  useEffect(()=>{
    getbotique()

  },[])
  useEffect(()=>{
    getproduit()
  },[])
  useEffect(()=>{
    getproduitvendu()
  },[])
  const getproduitvendu=()=>{
    axiosInstance
    .get('produit/produitvendu/')
    .then(res=>{
      setproduitvendu(res.data)
      setproduitvenduload(true)
    })
  }
  const getbotique=()=>{
    axiosInstance.get('produit/maboutique/')
    .then(res=>{
      //console.log(res.data)
      setbotique(res.data)
      setloading(true)
    })
  }

 const getproduit=()=>{
   axiosInstance
   .get('produit/mesproduits/')
   .then(res=>{
     setproduit(res.data)
     setproduitload(true)
   })
 }
 const handleajout=()=>{
   history.push('/ajoutproduit')
 }
 const handlepopen=(id,nom,slug)=>{
  setpid({...pid,id:id,nom:nom,slug:slug})
  setpop(true)
  }
   const handlepopenvendu=(id,nom,slug,active)=>{
  setpid({...pid,id:id,nom:nom,slug:slug,active:active})
  setpopvendu(true)
  }
  const handlefile=e=>{ 
    let img= e.target.files[0]
    let forimage=new FormData()
    forimage.append('logo',img)
    axiosInstance
    .post('produit/editboutiquepic/', forimage,{headers: 
      {'content-type': 'multipart/form-data'}
    })
    .then(res=>{
     // console.log(res.data)
      getbotique()
     
    })
    
   }
  
   const handleclick=e=>{
    iref.current.click();
  }
   const handledes=e=>{  
     setdescription(e.target.value)
   }
   const handledescription=()=>{
     if(description !==""){
    axiosInstance
    .post('produit/editboutiquedes/',{description:description})
    .then(res=>{
     // console.log(res.data)
      getbotique()
      setmodal(false)
      
    })
  }
  else{
    setmodal(false)
    return;
  }

   }
     const handleclose=()=>{
       setmodal(false)
     }
     const handleopen=()=>{
       setmodal(true)
     }
  
     const handledelete=id=>{
      axiosInstance
      .put(`produit/produitmanage/supprimer/${id}/`)
      .then(res=>{
          //console.log(res.data)
          getproduit()
          getproduitvendu()
          setaler(false)
      })
  }
  
  const handleproduitactif=()=>{
     //console.log('actif')
      setseg('prodactif')
      setprodactif(true)
      setprodvendu(false)


  }
  const handlevendu=()=>{
    //console.log('vendu')
    setseg('prodvendu')
    setprodvendu(true)
    setprodactif(false)
  }
  const handlereactif=id=>{
    axiosInstance
    .post('produit/reactivationproduit/',{id:id})
    .then(res=>{
     getproduitvendu()
     setpopvendu(false)    
    })
  }
  const handledetail=(slug,nom)=>{
    history.push(`/detail/${slug}/${nom}`)
  }
  const handlepid=()=>{ 
    setaler(true)
   }
  const handlemodif=(slug,nom)=>{
     history.push(`/modification/${slug}/${nom}`)
  }
 

  return(
     <div>
       {loading && produitload &&produitvenduload?
      <Fragment>
       <BoutiqueVendeurDesk produit={produit} produitvendu={produitvendu} 
      botique={botique} modal={modal}  seg={seg} 
     prodactif={prodactif} prodvendu={prodvendu}  handlefile={handlefile} 
     handleclick={handleclick} handledes={handledes} handledescription={handledescription} 
     handleclose={handleclose} handleopen={handleopen} handleproduitactif={handleproduitactif} 
     handlevendu={handlevendu} handlereactif={handlereactif} handledelete={handledelete} 
     setmodal={setmodal} iref={iref} truncateString={truncateString} handledetail={handledetail}
     aler={aler} setpid={setpid} pid={pid} handlepid={handlepid} setaler={setaler} handlemodif={handlemodif} 
     handlepopen={handlepopen} setpop={setpop} pop={pop} popvendu={popvendu} user={user}
       setpopvendu={setpopvendu} handlepopenvendu={handlepopenvendu} handleajout={handleajout} />
     <BoutiqueVendeurMobile produit={produit} produitvendu={produitvendu} 
      botique={botique} modal={modal}  seg={seg} 
     prodactif={prodactif} prodvendu={prodvendu}  handlefile={handlefile} 
     handleclick={handleclick} handledes={handledes} handledescription={handledescription} 
     handleclose={handleclose} handleopen={handleopen} handleproduitactif={handleproduitactif} 
     handlevendu={handlevendu} handlereactif={handlereactif} handledelete={handledelete} 
     setmodal={setmodal} iref={iref} truncateString={truncateString} handledetail={handledetail}
     aler={aler} setpid={setpid} pid={pid} handlepid={handlepid} setaler={setaler} handlemodif={handlemodif} 
     handlepopen={handlepopen} setpop={setpop} pop={pop} popvendu={popvendu} user={user}
       setpopvendu={setpopvendu} handlepopenvendu={handlepopenvendu} handleajout={handleajout} />

    </Fragment>:<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
      />}

  <IonModal
  isOpen={modal}
  cssClass='my-custom-class'
  swipeToClose={true}
  onDidDismiss={() => setmodal(false)}
  >
    
    <div >
    <h1 className='centerbtn'>Décrire sa boutique</h1>
    <IonGrid>
    <IonRow>
    <IonCol size='10' className='centerbtn'>
    <textarea 
   rows="3" cols="40"
   onChange={handledes} />
    </IonCol>
    </IonRow>
    </IonGrid>
   <p className='centerbtn'> <button className="w3-btn w3-round-xlarge w3-red w3-margin"  onClick={handleclose}>Annuler </button>
    <button className="w3-btn w3-round-xlarge w3-green w3-margin" onClick={handledescription} >
    Valider</button></p>
    </div>
  </IonModal>
    <IonAlert
         isOpen={aler}
           onDidDismiss={() => setaler(false)}
          cssClass='my-custom-class'
          header={'Suppresion de ' + pid.nom }
          message={' <strong>Etes vous sur de vouloir supprimer ce produit? </strong>'}

          buttons={[
          {
          text: 'Annuler',
          role: 'cancel',
          handler:()=>{setaler(false)},
          cssClass: 'secondary',
            id: 'cancel-button',},
            {
           text: 'Supprimer',
           id: 'confirm-button',
           handler: () => {
           handledelete(pid.id);
          //console.log('confirmer')
           } }]} />
           <IonPopover
        cssClass='my-custom-class'
        isOpen={pop}
        onDidDismiss={() => setpop(false)}
      >
      <p className='centerbtn'><button className='btndrop' onClick={()=>handlemodif(pid.slug,pid.nom)} ><CreateIcon/></button>
      <button className='btndrop' onClick={()=>handlepid(pid.id,pid.nom)}><DeleteIcon/></button>
       </p>   
      </IonPopover>
       <IonPopover
        cssClass='my-custom-class'
        isOpen={popvendu}
        onDidDismiss={() => setpopvendu(false)}>
        {pid.active?null:
      <p  className='centerbtn'> Si le produit est toujours disponible,vous pouvez le
      <button className='btndrop redstyle' onClick={()=>handlereactif(pid.id)}> 
      Reactiver</button></p>}
      <p>
      <button className='btndrop' onClick={()=>handlepid(pid.id,pid.nom)}><DeleteIcon/></button>
       </p>   
      </IonPopover> 
     </div>
  );
}

export default BoutiqueVendeur;
