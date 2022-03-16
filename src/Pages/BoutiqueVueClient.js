import React,{useState,useEffect,Fragment} from 'react'
import BoutiqueVueDesk from '../Components/Desk/BoutiqueVueDesk';
import BoutiqueVueMobile from '../Components/Mobile/BoutiqueVueMobile';
import {IonLoading} from '@ionic/react'
import {  useHistory, } from 'react-router-dom';
import axiosInstance from '../axios'

 
 

 
function BoutiqueVueClient(props) {
    let id=props.match.params.id
    let nom=props.match.params.nom
    const isStaf=props.isStaf
    const handlebadge=props.handlebadge
    const  [produit, setproduit] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const  [profil, setprofil] = useState({})
    const [profiload, setprofiload] = useState(false)
    const  [load, setload] = useState(false)
    const [vendload, setvendload] = useState(false)
    const [vendu,setvendu]=useState(false)
    const  [prodactif, setprodactif] = useState(true);
    const  [seg, setseg] = useState('prodactif');
    const  [produitvendu, setproduitvendu] = useState([]);
    const islog =props.islog
    const user=props.user
    const history=useHistory()
  
   
    useEffect(()=>{
       getproduitactif()
  
      },[])

      useEffect(()=>{
        getproduitvendu()
   
       },[])
       useEffect(()=>{
        getboutique()
   
       },[])
      
    
    const getproduitactif=()=>{
      axiosInstance
     // .post('produit/produitactif/',{id:id})
      .post('produit/produitactif/',{id:id})
      .then(res=>{
          console.log(res.data.items)
          setproduit(res.data)  
          setload(true)
      })

    }
  const getproduitvendu=()=>{
    axiosInstance
    .post('produit/produitvenduvuclient/',{id:id})
    .then(res=>{
      setproduitvendu(res.data)
      setvendload(true)
    })
  }
const getboutique=()=>{
  axiosInstance
   .post('produit/profilboutiquevuclient/',{id:id})
  .then(res=>{
    setprofil(res.data)
    setprofiload(true)
  })
}

  
   const handleproduitactif=()=>{
    //console.log('actif')
     setseg('prodactif')
     setprodactif(true)
     setvendu(false)
 }
 const handlevendu=()=>{
   //console.log('vendu')
   setseg('produitvendu')
   setvendu(true)
   setprodactif(false)
 }

const handlavertir=()=>{
   history.push(`/avertirlevendeur/${id}/${profil.user.prenom+""+profil.user.nom}`)
}
const handlactivation=()=>{
history.push(`/reactivationboutique/${id}/${profil.user.prenom+""+profil.user.nom}`)
}
    return (
      <div>
        {profiload && load && vendload && nom===profil.user.prenom+""+profil.user.nom?
        <div>
          {user.id===profil.user.id? history.push('/maboutique'):
          <Fragment>
          <BoutiqueVueDesk profil={profil} seg={seg} handleproduitactif={handleproduitactif}
           handlevendu={handlevendu}  prodactif={prodactif} produit={produit} 
           prodvendu={vendu} produitvendu={produitvendu} isStaf={isStaf}
             islog={islog}  user={user} handlavertir={handlavertir}
             handlactivation={handlactivation} />
          <BoutiqueVueMobile profil={profil} seg={seg} handleproduitactif={handleproduitactif}
           handlevendu={handlevendu} isStaf={isStaf} handlavertir={handlavertir}
            prodactif={prodactif} produit={produit} prodvendu={vendu} produitvendu={produitvendu}
        islog={islog}    handlactivation={handlactivation}
        user={user}  /></Fragment>}
       </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}/>}
       
        </div>
          
    )
} 



  

export default BoutiqueVueClient
