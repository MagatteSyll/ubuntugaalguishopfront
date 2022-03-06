import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useHistory } from 'react-router';
import Carousel from 'react-bootstrap/esm/Carousel'
import {IonCol, IonGrid, IonLoading, IonRow, IonText,IonItem,IonIcon,IonSegment,IonAlert} from '@ionic/react'
import {arrowUndoOutline,} from 'ionicons/icons'
import {Form ,Col,Button} from  'react-bootstrap'
import Image from 'react-bootstrap/Image'



function RechercheCommande(props) {
 const [commande,setcommande]=useState([])
 let id =props.match.params.id
 const user=props.user
 const [loaded,setloaded]=useState(false)
 const  [thum, setthum] = useState(true);
 const  [picone, setpicone] = useState(false);
 const [pictwo, setpictwo] = useState(false);
 const  [picthird, setpicthird] = useState(false);
 const  [picfour, setpicfour] = useState(false);
 const  [picfive, setpicfive] = useState(false);
 const  [aler, setaler] = useState(false)
 const  [data, setdata] = useState()
const [showLoading, setShowLoading] = useState(true);

 const history=useHistory()
  const notify = () => toast.success("Commande annulée !",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
  const erreur = () => toast.error("Erreur d annulation!Verifiez les credentiels entrés!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });


  const trou = () => toast.error("Commande non trouvee !",
{
  position:toast.POSITION.TOP_CENTER,
  autoClose:false
});
    useEffect(()=>{
        
        handlecomande()
    },[id])

const handlecomande=()=>{
 axiosInstance
        .post('staff/commande/',{id:id})
        .then(res=>{
          //  console.log(res.data)
            setcommande(res.data)
           setloaded(true)
        })
        .catch(()=>{
          history.push('/accueil')
          trou()
        })
}

  const handlecommandepot=id_commande=>{
     axiosInstance
     .post('staff/depotcommande/',{id:id_commande})
     .then(res=>{
       handlecomande()

     })
  }
const handlecommanderetrait=id_commande=>{
     axiosInstance
     .post('staff/retraitcommande/',{id:id_commande})
     .then(res=>{
       handlecomande()

     })
  }

  
  const handlethumbnail=()=>{
  setthum(true)
  setpicone(false)
  setpictwo(false)
  setpicthird(false)
  setpicfour(false)
  setpicfive(false)
}
const handlepicone=()=>{
  setthum(false)
  setpicone(true)
  setpictwo(false)
  setpicthird(false)
  setpicfour(false)
  setpicfive(false)
}
const handlepitwo=()=>{
  setthum(false)
  setpicone(false)
  setpictwo(true)
  setpicthird(false)
  setpicfour(false)
  setpicfive(false)
}
const handlepicthird=()=>{
  setthum(false)
  setpicone(false)
  setpictwo(false)
  setpicthird(true)
  setpicfour(false)
  setpicfive(false)
}
const handlepifour=()=>{
  setthum(false)
  setpicone(false)
  setpictwo(false)
  setpicthird(false)
  setpicfour(true)
  setpicfive(false)
}
const handlepicfive=()=>{
  setthum(false)
  setpicone(false)
  setpictwo(false)
  setpicthird(false)
  setpicfour(false)
  setpicfive(true)

}
const handleconfirm=id_commande=>{
  setdata(id_commande)
  setaler(true)
}
const handlennulation=id_commande=>{
  axiosInstance
  .post('staff/annulationcommande/',{id:id_commande})
  .then(res=>{
    let formdata=new FormData()
    formdata.append('phone',res.data.phone_gaalguiMoney)
    formdata.append('montant',res.data.total)
    formdata.append('commission',res.data.commission)
    formdata.append('livraison',res.data.livraison)
    axios
    .post('http://127.0.0.1:8000/api/client/annulationcommandegaalguishop/',formdata)
    .then(res=>{
      
    })
  })
}


  

   return (
        <div>
        {loaded?
      
      <div className=" container row -3">
        <IonGrid>
          <IonRow>
           {commande.statut_commande==="produit en attente de livraison "?
            <IonCol size='6' className='mt-3'>
            <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h3> ****Commande en attente d etre déposée par le vendeur</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit:<strong> {commande.produitcommande.product.nom}</strong></p>
            <p> prix: <strong> {commande.produitcommande.product.prix}</strong> CFA</p>
             <p>taille :<strong>{commande.produitcommande.product.nom}</strong> </p>
             <p>couleur : <strong> {commande.produitcommande.product.color}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} </strong></p>
            <p> status de la commande:<strong> 
            {commande.statut_commande}</strong></p>
            <p> adresse de livraison: <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            <p> commission de la plateforme <strong>{commande.commission}</strong></p>
            <p>Montant a remettre au vendeur <IonText className='redstyle'>{commande.montant_vendeur}</IonText></p>
             <button className="w3-btn w3-round-xxlarge w3-green" onClick={()=>handlecommandepot(commande.id)}>Confirmer le depot du produit</button>
            </IonCol>: 
            commande.statut_commande==="produit en cours de livraison "?
            <IonCol size='6'>
             <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h3>***Produit en attente d etre livré au client</h3>
            <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit:<strong> {commande.produitcommande.product.nom}</strong></p>
            <p> prix: <strong> {commande.produitcommande.product.prix}</strong> CFA</p>
             <p>taille :<strong>{commande.produitcommande.product.nom}</strong> </p>
             <p>couleur : <strong> {commande.produitcommande.product.color}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} </strong></p>
            <p> status de la commande:<strong> 
            {commande.statut_commande}</strong></p>
            <p> adresse de livraison: <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
             <button className="w3-btn w3-round-xxlarge w3-green" 
             onClick={()=>handlecommanderetrait(commande.id)}>Confirmer la livraison au client</button>
            </IonCol>:
            commande.statut_commande==="produit livré"?
            <IonCol size='6'>
            <IonItem>
           <Link to='/'><IonIcon icon={arrowUndoOutline} className='zoomicon retour'/></Link> 
             </IonItem>
            <h4> Produit déja livré au client!</h4>
             <p> Commande numero <strong> {commande.id}</strong>  </p>
            <p> produit:<strong> {commande.produitcommande.product.nom}</strong></p>
            <p> prix: <strong> {commande.produitcommande.product.prix}</strong> CFA</p>
             <p>taille :<strong>{commande.produitcommande.product.nom}</strong> </p>
             <p>couleur : <strong> {commande.produitcommande.product.color}</strong></p>
             <p>  date de la commande : <strong>{new Date(commande.created_at).toLocaleDateString()} </strong></p>
            <p> status de la commande:<strong> 
            {commande.statut_commande}</strong></p>
            <p> adresse de livraison: <strong> 
            {commande.adress.region.region},{commande.adress.adress} </strong></p>
            </IonCol>:null}
             <IonCol size='6' className='mt-3'>
            <div className='divimgdetail'>
              {thum?
             <Image className='imgdetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.thumbnail}`} />:null}
              {picone?
             <Image className='imgdetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic1}`} />:null}
              {pictwo?
             <Image className='imgdetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic2}`} />:null}
              {picthird?
             <Image className='imgdetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic3}`} />:null}
             {picfour?
             <Image className='imgdetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic4}`} />:null}
              {picfive?
             <Image className='imgdetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic5}`} />:null}
            </div> 
            <div>
            <IonSegment className='segdetail'>
              <button className='btndrop btndetail' onClick={handlethumbnail}>
              <Image className='imgbtndetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.thumbnail}`} />
              </button>
              <button className='btndrop btndetail' onClick={handlepicone} >
              <Image className='imgbtndetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic1}`} />
              </button>
              <button className='btndrop btndetail' onClick={handlepitwo}>
              <Image className='imgbtndetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic2}`} />
              </button>
              {commande.produitcommande.product.pic3 == null ? null:
              <button className='btndrop btndetail' onClick={handlepicthird}>
              <Image className='imgbtndetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic3}`} />
              </button>}
              {commande.produitcommande.product.pic4 == null ? null:
              <button className='btndrop btndetail' onClick={handlepifour}>
              <Image className='imgbtndetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic4}`} />
              </button>}
              {commande.produitcommande.product.pic5 == null ? null:
              <button className='btndrop btndetail' onClick={handlepicfive}>
              <Image className='imgbtndetail' src={`http://127.0.0.1:8001${commande.produitcommande.product.pic5}`} />
              </button>}
            </IonSegment> 
            </div>       
           </IonCol>
           {user.isbureaucrate?
           <IonCol size='12'>
           <span>
            <p><Link to={`/boutique/${commande.produitcommande.product.boutique.id}/${commande.produitcommande.product.vendeur.prenom+""+commande.produitcommande.product.vendeur.nom}`}>
              Voir le  vendeur </Link></p></span>
             {commande.statut_commande==="produit en attente de livraison "?
             <button className="w3-btn w3-round-xxlarge w3-red" 
             onClick={()=>handlecommanderetrait(commande.id)}>Annulation de la commande </button>:null}
           </IonCol>:null}
          </IonRow>
        </IonGrid>
       
        </div>:<IonLoading
          cssClass='my-custom-class'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Chargement...'}
          duration={5000}
        />}
      
       <IonAlert
          isOpen={aler}
          onDidDismiss={() => setaler(false)}
          cssClass='my-custom-class'
          header={'Confirm!'}
          message={'Message <strong>text</strong>!!!'}
          buttons={[
            {
              text: 'Annuler',
              role: 'cancel',
              cssClass: 'secondary',
              id: 'cancel-button',
              handler: () => {
                //handleAnnulation(data)
              }
            },
            {
              text: 'Okay',
              id: 'confirm-button',
              handler: () => {
                console.log('Confirm Okay');
              }
            }
          ]}
        />   
  
     </div>
    )
}

export default RechercheCommande


/* 
            :null}
              */
