import React,{useState,useEffect} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Accueil from './Pages/Accueil'
import './Components/style.css'
import axios from 'axios'
import axiosInstance from './axios'
import NavBar from './Components/NavBar';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import ProduitSingleCategory from './Pages/ProduitSingleCategory';
import BoutiqueVueClient from './Pages/BoutiqueVueClient'
import CommandeEnCours from './Pages/CommandeEnCours'
import ModificationProduit  from './Pages/ModificationProduit'
import { Redirect } from 'react-router'
import BoutiqueVendeur  from './Pages/BoutiqueVendeur'
import Commande  from './Pages/Commande'
import HistoriqueDachat  from './Pages/HistoriqueDachat'
import Compte from './Pages/Compte'
import Parametres from './Pages/Parametres'
import Payement from './Pages/Payement'
import AjoutProduit from './Pages/AjoutProduit'
import Panier from './Pages/Panier'
import DetailAvertissement from './Pages/DetailAvertissement'
import DetailEtatCommande from './Pages/DetailEtatCommande'
import DetailNotificationVente from './Pages/DetailNotificationVente'
import AnnulationAchat from './Pages/AnnulationAchat'
import AnnulationVente from './Pages/AnnulationVente'
import DesactivationBoutique from './Pages/DesactivationBoutique'
import NotificationFollower from './Pages/NotificationFollower'
import RecuCommande from './Pages/RecuCommande'
import RechercheCommande from './PageStaff/RechercheCommande'
import Detail from './Pages/Detail'
import Footer from './Components/Footer'
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {toast} from 'react-toastify'
import Modal from 'react-modal'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {IonAlert} from '@ionic/react'
import NotificationNote from './Pages/NotificationNote'




Modal.setAppElement('#root')
toast.configure()
function App() {
  const  [isStaf, setisStaf] = useState(false)
  const  [data, setdata] = useState([])
  const [aler, setaler] = useState(false)
  const  [badgecart, setbadgecart] = useState()
  const  [user, setuser] = useState([])
  const  [userload, setuserload] = useState(false);
  const  [islog, setislog] = useState(false)
  const  [logload, setlogload] = useState(false)
  const  [stafload, setstafload] = useState(false)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr + "...";
    } else {
        return str;
    }
  }

useEffect(()=>{
   getislog()
},[])

useEffect(()=>{
 getuser()
},[])

   useEffect(()=>{
     getstaf()
  },[])

useEffect(()=>{
 axiosInstance
 .get('utilisateur/getchannel/')
 .then(res=>{
 if(res.data.length!==null){
  
  const socket = new W3CWebSocket( 'ws://localhost:8001/ws/'+res.data.channel+'/')
  socket.onopen=()=>{
    console.log('client logged')
    
     }
   socket.onmessage=message=>{
      const data=JSON.parse(message.data)
      console.log(data)
      setdata(data);
      setaler(true)
      getnotifications()
    }
  socket.onclose=()=>{
     console.log('socket close')}
  }
})
})

 const getnotifications=()=>{
      axiosInstance
      .get('utilisateur/getnotification/')
      .then(res=>{
      //  console.log(res.data)
        })
    }
    const getstaf=()=>{
      axiosInstance
   .get('staff/staf/')
   .then(res=>{
     setisStaf(res.data)
     setstafload(true)
   })   
    }
const getuser=()=>{
  axiosInstance
  .get('utilisateur/getuser/')
  .then(res=>{
    setuser(res.data)
    //console.log(res.data)
    setuserload(true)
  })
}

const handlebadge=()=>{

  axiosInstance
  .get('produit/getcart/')
  .then(res=>{
    if(res.data!==false){
   // console.log(res.data)
     setbadgecart(res.data.length)}
    else{
      return;
    }})
    
  }


const getislog=()=>{
   axiosInstance
  .get('utilisateur/isauthenticated/')
  .then(res=>{
    setislog(res.data)
    //console.log(res.data)
    setlogload(true)
  }) 
}

const defaultroute=()=>(
  <div>
  <NavBar islog={islog} handlebadge={handlebadge}
    badgecart={badgecart}  user={user} isStaf={isStaf}
    truncateString={truncateString} />
 <Route exact path='/'  render={(props) =><Accueil {...props} isstaf={isStaf} user={user} islog={islog}/>}/>
 <Route exact path='/category/:slug'  render={(props) =><ProduitSingleCategory {...props} islog={islog} 
     handlebadge={handlebadge} isStaf={isStaf} truncateString={truncateString} /> }/>
 <Route  path='/boutique/:id/:nom'  render={(props) => <BoutiqueVueClient {...props} handlebadge={handlebadge}
    islog={islog} user={user} truncateString={truncateString}/> }/>
<Route  path='/mescommandes' render={(props) =>(isStaf?<Redirect to='/'/>:<CommandeEnCours />) }/>
 <Route  path='/modification/:slug/:nom' render={(props) => (isStaf?<Redirect to='/'/>:
      <ModificationProduit  {...props} />) }/>
  <Route exact path='/maboutique' render={(props) =>(isStaf?<Redirect to='/'/>:<BoutiqueVendeur{...props} 
    truncateString={truncateString} user={user} />) }/>
  <Route exact path='/commande/:slug/:id/:nom' render={(props) => (isStaf?<Redirect to='/'/>:
      <Commande {...props} truncateString={truncateString} />) }/>
  <Route exact path='/historiquesdachat'
     render={(props) =>  (isStaf?<Redirect to='/' {...props}/>:<HistoriqueDachat {...props} />)}/>
   <Route  path='/compte' render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<Compte  {...props} user={user} load={userload}
     getuser={getuser}/>)}/>
  <Route  exact  path='/detail/:slug/:nom'  render={(props) => <Detail {...props} handlebadge={handlebadge} 
     user={user} islog={islog}/> }/>
<Route  path='/parametre' 
render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<Parametres  {...props}/>) }/>
<Route  path='/Payement'  render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<Payement   {...props} />)}/>
<Route  path='/ajoutproduit' render={(props) => (isStaf?<Redirect to='/' {...props}/>: <AjoutProduit />)}/>
 <Route  path='/monpanier'  render={(props) => (isStaf?<Redirect to='/' {...props}/>: <Panier {...props}  truncateString={truncateString}
  handlebadge={handlebadge}/>)}/>
 <Route  path='/avertissement/:id' render={(props) =>(isStaf?<Redirect to='/' {...props}/>
  :<DetailAvertissement {...props} />) }/>
 <Route  path='/etatcommande/:id' 
 render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<DetailEtatCommande {...props} />) }/>
<Route  path='/notificationdevente/:id' 
    render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<DetailNotificationVente {...props} />) }/>
<Route  path='/annulationachat/:id' 
    render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<AnnulationAchat {...props} />) }/>
<Route  path='/noterlevendeur/:id' 
    render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<NotificationNote {...props} />) }/>
<Route  path='/annulationdevente/:id' 
    render={(props) =>(isStaf?<Redirect to='/' {...props}/>:<AnnulationVente {...props} />) }/>
<Route  path='/desactivationboutique/:id' render={(props) =>(isStaf?<Redirect to='/' {...props}/>
    :<DesactivationBoutique {...props} />) }/>
<Route  path='/desactivationboutique/:id' render={(props) =>(isStaf?<Redirect to='/' {...props}/>
    :<DesactivationBoutique {...props} />) }/>
 <Route  path='/nouveauproduit/:id/:slug' render={(props) =>(isStaf?<Redirect to='/' {...props}/>
    :<NotificationFollower {...props} handlebadge={handlebadge} />) }/>
<Footer/>
  </div>
);
  return(

    <div className='app'>
    {userload && logload && stafload?
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path='/connexion' render={(props)=><Connexion {...props} getuser={getuser}/>}/>
    <Route exact path='/inscription' render={(props) =><Inscription {...props}  getuser={getuser}/>}/> 
    <Route  path='/recucommande/:id/:nom' 
      render={(props) => (isStaf?<Accueil/>:(islog? <RecuCommande  {...props} />:null)) }/>
     <Route exact path='/recherchecommande/:id' render={(props) =>(isStaf?<RechercheCommande {...props} 
      user={user} />:null) }/>
    <Route component={defaultroute}/>  
    </Switch>
    </BrowserRouter>
    </>:null}

    </div>

    )
}

export default App;